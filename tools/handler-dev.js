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
    fse.ensureDir(`dist/${this.project}`)
    .then(function(){
      console.log(`Create: ${this.project}`);
    })
    .catch(function(err){
      console.error(err);
    });
    // Criar Diretório de Fonts para Distribuição
    fse.ensureDir(`dist/${this.project}/fonts`)
    .then(function(){
      console.log(`Directory fonts created...`);
    })
    .catch(function(err){
      console.error(err);
    });
    // Criar Diretório de Source para Distribuição
    fse.ensureDir(`dist/${this.project}/src`)
    .then(function(){
      console.log(`Directory src created...`);
    })
    .catch(function(err){
      console.error(err);
    });
    // Criar Diretório de Styles para Distribuição
    fse.ensureDir(`dist/${this.project}/styles`)
    .then(function(){
      console.log(`Directory styles created...`);
    })
    .catch(function(err){
      console.error(err);
    });
    // Criar Diretório de Libraries para Distribuição
    fse.ensureDir(`dist/${this.project}/libs`)
    .then(function(){
      console.log(`Directory libs created...`);
    })
    .catch(function(err){
      console.error(err);
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
