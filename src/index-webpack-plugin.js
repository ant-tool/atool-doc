import { readFileSync, existsSync } from 'fs';
import { render } from 'ejs';
import { join } from 'path';
import { marked } from 'atool-doc-util';
import mt from 'mark-twain';
const root = join(__dirname, '..');

function addContentToAssets(content, filename, compilation) {
  const { assets } = compilation;
  assets[filename] = {
    source: () => content,
    size: () => content.length,
  };
}

function getFileFullPath(file, context) {
  return join(context, file);
}

function getFileContent(file) {
  return existsSync(file) ? readFileSync(file, 'utf-8') : false;
}

export default function IndexWebpackPlugin(options) {
  const { fileDependencies, contextDependencies, file, template, title, params } = {
    fileDependencies: ['package.json', 'README.md', 'HISTORY.md', 'CHANGELOG.md'],
    contextDependencies: [],
    file: 'index.html',
    template: join(root, 'tpl/index.ejs'),
    title: 'title',
    params: {
      link: [],
    },
    ...options,
  };

  const apply = compiler => {
    compiler.plugin('emit', (compilation, cb) => {
      const content = render(getFileContent(template), {
        file: params,
        README: marked(getFileContent('README.md')),
        CHANGELOG: marked(getFileContent('CHANGELOG.md')),
        HISTORY: marked(getFileContent('HISTORY.md')),
        PKG: JSON.parse(getFileContent('package.json')),
        alias: compiler.docSet.fileAlias,
      });

      addContentToAssets(content, file, compilation);
      cb();
    });
    compiler.plugin('compilation', () => {
      if (!compiler.docSet) {
        compiler.docSet = { fileAlias: {} };  /* eslint no-param-reassign: "warn"*/
      }
      Object.keys(params.link).forEach(name => {
        const current = getFileContent(compiler.options.entry[params.link[name]]);
        compiler.docSet.fileAlias[name] = mt(current).meta[title];
      });
    });
    compiler.plugin('after-compile', (compilation, cb) => {
      const { context } = compiler;
      compilation.fileDependencies.push(template, context);
      fileDependencies.forEach(dep => {
        compilation.fileDependencies.push(getFileFullPath(dep, context));
      });
      contextDependencies.forEach(dep => {
        compilation.contextDependencies.push(getFileFullPath(dep, context));
      });
      cb();
    });
  };
  return {
    apply,
  };
}
