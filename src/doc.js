import fs from 'fs';
import path from 'path';
import webpack, { ProgressPlugin } from 'atool-build/lib/webpack';
import dora from 'dora';
import getWebpackConfig from './getWebpackConfig';

export default function (options) {
  const { source, dest, cwd } = options;

  fs.writeFileSync(
    path.join(__dirname, '../tpl/realEvery.ejs'),
    fs.readFileSync(path.join(__dirname, '../tpl/every.ejs'), 'utf8').replace('thisIsCwd', path.join(cwd, source))
  );

  let webpackConfig;

  if (options.build) {
    webpackConfig = getWebpackConfig(source, dest);

    const compiler = webpack(webpackConfig);

    compiler.watch(200, function(err, stats){
      console.log('redo');
    });
  } else {
    dora({
      port: 8002,
      plugins: [
        {
          'middleware.before'() {
            webpackConfig = getWebpackConfig(source, dest);
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
