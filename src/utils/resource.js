const path = require('path');

module.exports = function Resource(cwd, demoPath, resourcePath) {
  this.ext = path.extname(resourcePath);
  this.name = path.basename(resourcePath, this.ext);

  this.path = path.join(path.dirname(resourcePath), this.name);
  this.demoPath = path.join(cwd, demoPath);

  this.relativeToCwd = path.relative(cwd, this.path);
  this.relativeToDemo = path.relative(demoPath, this.path);
};
