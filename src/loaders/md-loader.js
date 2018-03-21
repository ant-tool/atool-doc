const fs = require('fs');
const path = require('path');

const loaderUtils = require('loader-utils');
const webpack = require('atool-build/lib/webpack');
const mt = require('mark-twain');
const R = require('ramda');
const ejs = require('ejs');

const isCode = R.compose(R.contains(R.__, ['js', 'jsx', 'javascript']), R.path(['props', 'lang']));
const isStyle = R.whereEq({ type: 'code', props: { lang: 'css' } });
const isHtml = R.whereEq({ type: 'code', props: { lang: 'html' } });
const getChildren = R.compose(R.prop('children'), R.defaultTo({}));

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

  const fileContentTree = mt(content).content;
  const meta = mt(content).meta;

  const code = getChildren(fileContentTree.find(isCode));
  const style = getChildren(fileContentTree.find(isStyle));
  const html = getChildren(fileContentTree.find(isHtml));

  const tpl = query.template;
  this.addDependency(tpl);

  const hasCommon = options.plugins.some(i => i instanceof webpack.optimize.CommonsChunkPlugin);
  const filename = loaderUtils.interpolateName(this, options.output.filename, {})
    || `${resource.name}.js`;

  const scripts = [
    ...(hasCommon ? [path.relative(resourcePath, path.join(resource.demoPath, 'common.js'))] : []),
    filename,
  ];

  const link = {};
  link.Index = path.relative('../', path.relative(resource.path, './index'));
  Object.keys(options.entry).forEach(key => {
    link[path.relative(options.demoSource, key)] = path.relative('../',
      path.relative(resource.path, key));
  });

  const result = ejs.render(fs.readFileSync(tpl, 'utf-8'), {
    file: {
      meta,
      link,
      title: resource.relativeToDemo,
      filePath: resource.relativeToCwd + resource.ext,
      resource,
      // script: common ? scripts : scripts.slice(1),
      script: scripts,
      html,
      style,
      desc: util.marked(fileContentTree),
      alias: this._compiler.docSet.fileAlias,
    },
  });

  this.emitFile(calculateHtmlPath(options.cwd, resourcePath), result);

  return code;
};
