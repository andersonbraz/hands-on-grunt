const fse = require("fs-extra");

let project, version;

this.cleanDist = function () {
  fse.emptyDirSync("dist/");
};

this.createDist = function () {
  fse.readJson("package.json", function (err, data) {
    if (err) console.error(err);

    this.project = data.name;
    this.version = data.version;

    // Criar Diretório de Projeto para Distribuição
    fse.ensureDir(`dist/${this.project}`, function (err) {
      console.log(`Create: ${this.project}`);
    });

    fse.ensureDir(`dist/${this.project}/fonts`, function (err) {
      console.log(`Fonts creating...`);
    });

    fse.ensureDir(`dist/${this.project}/src`, function (err) {
      console.log(`Source creating...`);
    });

    fse.ensureDir(`dist/${this.project}/styles`, function (err) {
      console.log(`Styles creating...`);
    });

    fse.ensureDir(`dist/${this.project}/libs`, function (err) {
      console.log(`Libs creating...`);
    });

  });
};

this.fillDist = function (project, data) {

  const vendorCss = data.vendor.css;
  const vendorJs = data.vendor.js;

  vendorCss.forEach(function(element, index, array){
    fse.copy(`${element.value}`, `dist/${project}/styles/vendor.css`)
    .then(function(){
      console.log("Writing: ", element.value);
    })
    .catch(function(err){
      console.error(err);
    });
  });

  vendorJs.forEach(function(element, index, array){
    fse.copy(`${element.value}`, `dist/${project}/styles/vendor.js`)
    .then(function(){
      console.log("Writing: ", element.value);
    })
    .catch(function(err){
      console.error(err);
    });
  });
  
};
