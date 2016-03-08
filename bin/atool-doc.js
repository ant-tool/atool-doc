#!/usr/bin/env node

var program = require('commander');

program
  .version(require('../package').version, '-v, --version')
  .option('-b, --build', 'build _site')
  .option('--dest <dir>', 'config output dir', '_site')
  .option('--source <dir>', 'config demo source dir', 'examples')
  .option('--build', 'only build')
  .parse(process.argv);

program.cwd = process.cwd();

require('../lib/doc')(program);
