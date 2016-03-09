import path, { join } from 'path';
import { readdirSync, readFileSync } from 'fs';
import getWebpackCommonConfig from 'atool-build/lib/getWebpackCommonConfig';
import { ProgressPlugin } from 'atool-build/lib/webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const cwd = process.cwd();
const root = path.join(__dirname, '../');
const pkg = require(join(cwd, 'package.json'));

const getResolve = function () {
  return {
    root: cwd,
    extensions: ['', '.js', '.jsx'],
    alias: {
      [`${pkg.name}$`]: join(cwd, 'index.js'),
      [pkg.name]: cwd,
    },
  }
}

const getDemoFiles = function (dir) {
  return readdirSync(dir).map(file => join(dir, file));
}

const getEntry = function(source) {
  const files = getDemoFiles(source);
  const entry = {};
  files.forEach(file => {
    const ext = path.extname(file);
    const name = path.basename(file, ext);
    if(ext === '.md') {
      // const obj = require(join(resolveCwd(file)));
      console.log(require('./loader!./examples/fs.md'));
    } else if (ext === '.js' && 1) {
      entry[join(path.dirname(file), name)] = file;
    }
  });
  return entry;
}


export default function(source, dest) {
  const commonConfig = getWebpackCommonConfig({ cwd });
  const entry = getEntry(source);
  const webpackConfig = {
    ...commonConfig,
    entry,
    devtool: '#inline-source-map',
    resolve: getResolve(),
    resolveLoader: {
      ...commonConfig.resolveLoader,
      root: join(__dirname, '../node_modules'),
    },
    output: {
      path: path.resolve(cwd, dest),
      filename: '[name].js',
    }
  };

  webpackConfig.plugins = webpackConfig.plugins.concat([
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: join(root, '/tpl/index.ejs'),
      inject: 'body',
      chunks: [],
      title: 'Custom template',
      link: entry,
    })
  ], Object.keys(entry).map(file => new HtmlWebpackPlugin({
    filename: `${file}.html`,
    template: join(root, '/tpl/realEvery.ejs'),
    inject: 'body',
    chunks: ['common', file],
    title: `${path.basename(file)}`,
    path: './' + path.basename(entry[file]),
  })), [
    new ProgressPlugin((percentage, msg) => {
      const stream = process.stderr;
      if (stream.isTTY && percentage < 0.71) {
        stream.cursorTo(0);
        stream.write('📦  ' + msg);
        stream.clearLine(1);
      } else if (percentage === 1) {
        console.log('\nwebpack: bundle build is now finished.');
      }
    })
  ]);

  return webpackConfig;
}
