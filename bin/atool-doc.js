#!/usr/bin/env node

var cp = require('child_process');

function start() {
  const p = cp.fork(__dirname + '/atool-doc', process.argv.slice(2));
  p.on('message', function (data) {
    if (data === 'restart') {
      p.kill('SIGINT');
      start();
    }
  });
}

if (!process.send) {
  start();
} else {
  var program = require('commander');

  program
    .version(require('../package').version, '-v, --version')
    .option('--dest <dir>', 'config path of output dir, default __site', '__site')
    .option('--source <dir>', 'config path of demo files dir, default examples', 'examples')
    .option('--asset <dir>', 'config path of static resource, default statics', 'statics')
    .option('--tpl <path>', 'config path or name of tpl file')
    .option('--config <path>', 'config path of webpack.config, default webpack.config.js', 'webpack.config.js')
    .option('--port <number>', 'specify server port, default 8002', '8002')
    .option('--build', 'only build')
    .option('-w, --watch', 'using with --build, watch mode')
    .parse(process.argv);

  program.cwd = process.cwd();

  require('../lib/doc')(program);
  require('atool-monitor').emit();
}


