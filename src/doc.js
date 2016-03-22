import fs from 'fs';
import path from 'path';
import webpack, { ProgressPlugin } from 'atool-build/lib/webpack';
import dora from 'dora';
import getWebpackConfig from './getWebpackConfig';

const root = path.join(__dirname, '..');

export default function (options) {
  const { source, dest, cwd, tpl } = options;
  const tplPath = tpl ? path.join(cwd, tpl) : path.join(root, 'tpl', 'element.ejs');

  let webpackConfig;

  if (options.build) {
    webpackConfig = getWebpackConfig(source, dest, cwd, tplPath);

    const compiler = webpack(webpackConfig);

    if(options.watch) {
      compiler.watch(200, function(err, stats) {
        if(err) {
          console.error(err);
        }
      });
    } else {
      compiler.run(function(err, stats) {
        if(err) {
          console.error(err);
        }
      });
    }
  } else {
    dora({
      port: 8002,
      plugins: [
        {
          'middleware.before'() {
            webpackConfig = getWebpackConfig(source, dest, cwd, tplPath);
          },
          'middleware'() {
            const compiler = webpack(webpackConfig);
            this.set('compiler', compiler);
            compiler.plugin('done', function doneHandler(stats) {
              if (stats.hasErrors()) {
                console.log(stats.toString({colors: true}));
              }
            });
            return require('koa-webpack-dev-middleware')(compiler, {
              publicPath: '/',
              quiet: true,
              ...this.query
            });
          }
        }
      ]
    })
  }
}
