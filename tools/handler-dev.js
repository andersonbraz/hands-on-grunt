const fse = require("fs-extra");

let project, version;

this.cleanDist = function(){
  fse.emptyDirSync("dist/");
};

this.createDist = function(){
  fse.readJson('package.json', function(err, packageObj){

    if (err) console.error(err);

    this.project = packageObj.name;
    this.version = packageObj.version;

    // Criar Diretório de Projeto para Distribuição
    fse.ensureDir(`dist/${this.project}`, err => {
      console.log(`Create: ${this.project}`);
    });

    fse.ensureDir(`dist/${this.project}/fonts`, err => {
      console.log(`Fonts creating...`);
    });

    fse.ensureDir(`dist/${this.project}/src`, err => {
      console.log(`Source creating...`);
    });

    fse.ensureDir(`dist/${this.project}/styles`, err => {
      console.log(`Source creating...`);
    });

  });
};
