import path, { join } from 'path';
import { readFileSync, existsSync } from 'fs';
import getWebpackCommonConfig from 'atool-build/lib/getWebpackCommonConfig';
import mergeCustomConfig from 'atool-build/lib/mergeCustomConfig';
import webpack, { ProgressPlugin } from 'atool-build/lib/webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { marked } from 'atool-doc-util';
import glob from 'glob';

const root = path.join(__dirname, '..');

const getDemoFiles = function (dir) {
  return glob.sync(join(dir, '**/*.{js,jsx,html,md}'));
};

const getEntry = function (source) {
  const files = getDemoFiles(source);

  const entry = {};
  files.forEach(file => {
    const ext = path.extname(file);
    const name = path.basename(file, ext);
    const pathWithoutExt = join(path.dirname(file), name);
    if (
      ext === '.md' ||
      (ext === '.js' || ext === '.jsx') && files.indexOf(`${pathWithoutExt}.html`) !== -1
    ) {
      entry[pathWithoutExt] = file;
    }
  });

  return entry;
};


export default function (source, dest, cwd, tpl, config) {
  const pkg = require(join(cwd, 'package.json'));

  const commonConfig = getWebpackCommonConfig({ cwd, devtool: '#inline-cheap-module-source-map' });
  const customConfigPath = join(cwd, config);

  const webpackConfig = existsSync(customConfigPath)
    ? mergeCustomConfig(commonConfig, customConfigPath, 'development')
    : commonConfig;

  const entry = getEntry(source);

  webpackConfig.entry = entry;
  webpackConfig.output = {
    path: join(cwd, dest),
    filename: '[name].js',
  };
  webpackConfig.cwd = cwd;
  webpackConfig.demoSource = source;

  webpackConfig.resolve.root = cwd;
  webpackConfig.resolve.alias = {
    [`${pkg.name}$`]: join(cwd, 'index.js'),
    [pkg.name]: cwd,
  };

  webpackConfig.resolve.modulesDirectories.push(join(root, 'node_modules'));
  webpackConfig.resolveLoader.modulesDirectories.push(join(root, 'node_modules'));

  webpackConfig.module.loaders = webpackConfig.module.loaders.map(i => ({
    ...i,
    loader: i.loader.replace(/^.*extract-text-webpack-plugin\/loader.js((?!!).)*!/, 'style!'),
  }));

  webpackConfig.module.preLoaders = webpackConfig.module.preLoaders || [];

  webpackConfig.module.preLoaders.push({
    test: /\.md$/,
    loader: `babel?${JSON.stringify(webpackConfig.babel)}!atool-doc-md-loader?template=${tpl}`,
    include: path.join(cwd, source),
  });

  webpackConfig.module.preLoaders.push({
    test: /\.(jsx|js)$/,
    loader: `babel?${JSON.stringify(webpackConfig.babel)}!atool-doc-js-loader?template=${tpl}`,
    include: path.join(cwd, source),
  });

  const link = {};
  Object.keys(entry).forEach(key => {
    link[path.relative(source, key)] = key;
  });

  webpackConfig.plugins = [
    new ProgressPlugin((percentage, msg) => {
      const stream = process.stderr;
      if (stream.isTTY && percentage < 0.71) {
        stream.cursorTo(0);
        stream.write(`📦   ${msg}`);
        stream.clearLine(1);
      } else if (percentage === 1) {
        console.log('\nwebpack: bundle build is now finished.');
      }
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: join(root, '/tpl/index.ejs'),
      inject: 'body',
      chunks: [],
      title: `${pkg.name}@${pkg.version}`,
      homepage: pkg.homepage,
      link,
      readme: marked(readFileSync(join(cwd, 'README.md'), 'utf-8')),
    }),
    new webpack.optimize.CommonsChunkPlugin('common', 'common.js'),
    new webpack.optimize.OccurenceOrderPlugin(),
  ];

  return webpackConfig;
}
