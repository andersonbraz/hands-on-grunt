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
      console.log(`Source creating...`);
    });
  });
};

this.fillDist = function () {
  console.log("Start");
  fse.readJson("config.json", function (err, data) {
    if (err) throw err;
    let config = JSON.stringify(data);
    console.log(config);
  });
  console.log("End");
};
