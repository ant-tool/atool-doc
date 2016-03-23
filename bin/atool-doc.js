#!/usr/bin/env node

var program = require('commander');

program
  .version(require('../package').version, '-v, --version')
  .option('--dest <dir>', 'config output dir', '__site')
  .option('--source <dir>', 'config demo source dir', 'examples')
  .option('--tpl <path>', 'config custom tpl file')
  .option('--config <path>', 'config custom webpack.config.js', 'webpack.config.js')
  .option('--build', 'only build')
  .option('-w, --watch', 'build with watch mode')
  .parse(process.argv);

program.cwd = process.cwd();

require('../lib/doc')(program);
