const fs = require('fs');
const path = require('path');

const loaderUtils = require('loader-utils');
const ejs = require('ejs');

const util = require('../utils');

function calculateHtmlPath(cwd, source) {
  const selfPath = path.relative(cwd, source);
  return path.join(path.dirname(selfPath),
  `${path.basename(selfPath, path.extname(selfPath))}.html`);
}

module.exports = function (content) {
  const options = this.options;
  const resourcePath = this.resourcePath;
  const resource = new util.Resource(options.cwd, options.demoSource, resourcePath);

  const query = loaderUtils.parseQuery(this.query);

  const tpl = query.template;
  this.addDependency(tpl);

  const scripts = [
    path.relative(resourcePath, path.join(resource.demoPath, 'common.js')),
    `${resource.name}.js`,
  ];

  const link = {};
  link.Index = path.relative('../', path.relative(resource.path, './index'));
  Object.keys(options.entry).forEach((key) => {
    link[path.relative(options.demoSource, key)] = path.relative('../',
    path.relative(resource.path, key));
  });

  const html = ejs.render(fs.readFileSync(tpl, 'utf-8'), {
    file: {
      link,
      title: resource.relativeToCwd + resource.ext,
      resource,
      script: scripts,
      desc: util.marked([{
        type: 'h2',
        children: 'code',
      }, {
        type: 'code',
        props: {
          lang: 'js',
        },
        children: content,
      }]),
      alias: this._compiler.docSet.fileAlias,
    },
  });

  this.emitFile(calculateHtmlPath(options.cwd, resourcePath), html);

  return content;
};
