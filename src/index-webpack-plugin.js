import { readFileSync, existsSync } from 'fs';
import { render } from 'ejs';
import { join } from 'path';
import { marked } from 'atool-doc-util';

function addContentToAssets(content, filename, compilation) {
  compilation.assets[filename] = {        // disable no-param-reassign
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
  const { fileDependencies, contextDependencies, file, template, params } = {
    fileDependencies: ['package.json', 'README.md', 'HISTORY.md', 'CHANGELOG.md'],
    contextDependencies: [],
    file: 'index.html',
    template: 'tpl/index.ejs',
    params: {
      title: 'index.html',
    },
    ...options,
  };

  const apply = compiler => {
    compiler.plugin('emit', (compilation, cb) => {
      const content = render(readFileSync(template, 'utf-8'), {
        file: params,
        README: marked(getFileContent('README.md')),
        CHANGELOG: marked(getFileContent('CHANGELOG.md')),
        HISTORY: marked(getFileContent('HISTORY.md')),
      });

      addContentToAssets(content, file, compilation);
      cb();
    });
    compiler.plugin('after-compile', (compilation, cb) => {
      const { context } = compiler;
      compilation.fileDependencies.push(getFileFullPath(template, context));
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
