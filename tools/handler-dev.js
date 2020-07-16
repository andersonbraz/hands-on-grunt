const fse = require("fs-extra");

this.cleanDist = function () {
  fse.emptyDirSync("dist/");
};

