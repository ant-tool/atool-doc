import { join } from 'path';
import { existsSync, writeFileSync, readFileSync } from 'fs';
import webpack from 'atool-build/lib/webpack';
import dora from 'dora';
import getWebpackConfig from './getWebpackConfig';
import { tplSet } from './constant';

const root = join(__dirname, '..');

export default function (options) {
  const { source, dest, cwd, tpl, config, port } = options;

  const tplDefault = join(root, tplSet.github);
  let tplPath;

  if (tpl) {
    if (tplSet[tpl]) {
      tplPath = join(root, tplSet[tpl]);
    } else {
      tplPath = join(cwd, tpl);
      if (!existsSync(tplPath)) {
        console.warn(`There\'s no file in ${tpl}, creating one for you...`);
        writeFileSync(tplPath, readFileSync(tplDefault, 'utf-8'), 'utf-8');
      }
    }
  } else {
    tplPath = tplDefault;
  }

  let webpackConfig;

  if (options.build) {
    webpackConfig = getWebpackConfig(source, dest, cwd, tplPath, config);

    const compiler = webpack(webpackConfig);

    if (options.watch) {
      compiler.watch(200, (err) => {
        if (err) {
          console.error(err);
        }
      });
    } else {
      compiler.run((err) => {
        if (err) {
          console.error(err);
        }
      });
    }
  } else {
    dora({
      port,
      plugins: [
        {
          'middleware.before'() {
            webpackConfig = getWebpackConfig(source, dest, cwd, tplPath, config);
          },
          'middleware'() {
            const compiler = webpack(webpackConfig);
            this.set('compiler', compiler);
            compiler.plugin('done', stats => {
              if (stats.hasErrors()) {
                console.log(stats.toString({ colors: true }));
              }
            });
            return require('koa-webpack-dev-middleware')(compiler, {
              publicPath: '/',
              quiet: true,
              ...this.query,
            });
          },
        },
      ],
    });
  }
}
