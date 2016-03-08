import fs from 'fs';
import path from 'path';
import webpack, { ProgressPlugin } from 'atool-build/lib/webpack';
import dora from 'dora';
import getWebpackConfig from './getWebpackConfig';

const getCode = function (code) {
  return mt(code);
}

const getFunction = function (files) {
  const father = {};
  files.forEach(file => {
    const sourceCode = fs.readFileSync(file, 'utf8');
    if(path.extname(file) === '.md') {
      const obj = require('./md-loader!' + file);
      // console.log(obj);
    } else if (path.extname(file) === '.js') {
      // father[path.basename(file, '.js')] = new Function(require('babel-core').transform(sourceCode, {
      //   presets: ['es2015', 'react']
      // }).code);
    }
  });
  return father;
}



export default function (options) {
  const { source, dest, cwd } = options;

  const webpackConfig = getWebpackConfig(source, dest);
  // console.log(webpackConfig);

  // config.module.loaders.push({
  //   test: /\.md$/,
  //   loader:
  // });

  webpackConfig.plugins.push(
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
  );

  // buildHtml(pkg, entry, 'dist');

  console.log(webpackConfig.module.loaders);

  const compiler = webpack(webpackConfig);
  compiler.plugin('html-webpack-plugin-before-html-processing', function(){
    console.log(arguments);
  })
  compiler.watch(200, function(err, stats){
    console.log('redo');
  });
  // compiler.run(doneHandler);
}

function doneHandler(err, stats) {
    const { errors } = stats.toJson();
    if (errors && errors.length) {
      process.on('exit', function exitHandler() {
        process.exit(1);
      });
    }

    if (!args.watch || stats.hasErrors()) {
      console.log(stats.toString({colors: true}));
    }

    if (err) {
      process.on('exit', function exitHandler() {
        process.exit(1);
      });
      console.error(err);
    }

    if (callback) {
      callback(err);
    }
  }

const buildHtml = function(pkg, entry, dest) {
  Object.keys(entry).forEach(file => {
    xtpl.renderFile(path.join(__dirname, '../tpl/each.xtpl'), {
      pkg,
      code: fs.readFileSync(entry[file]),
      name: path.basename(file),
    }, function(err, content) {
      fs.writeFileSync(path.join('dist', `${file}.html`), content);
    })
  });


  xtpl.renderFile(path.join(__dirname, '../tpl/index.xtpl'), {
    pkg,
    readMe: fs.readFileSync(path.join(cwd, 'README.md'), 'utf8'),
  }, (err, content) => {
    fs.writeFileSync(path.join(dest, `index.html`), content);
  });
}
