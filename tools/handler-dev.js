const fse = require("fs-extra");

this.cleanDev = function () {
  fse.emptyDirSync("src/assets");
};

this.createDev = function () {
  
  // Criar Diretório CSS
  fse.ensureDir('src/assets/css')
  .then(function(){
    console.log('Directory styles created...');
  })
  .catch(function(err){
    console.error(err);
  });

  // Criar Diretório JS
  fse.ensureDir('src/assets/js')
  .then(function(){
    console.log('Directory scripts created...');
  })
  .catch(function(err){
    console.error(err);
  });

  // Criar Diretório FONTS
  fse.ensureDir('src/assets/fonts')
  .then(function(){
    console.log('Directory fonts created...');
  })
  .catch(function(err){
    console.error(err);
  });

};

this.fillDev = function (data) {

  const vendorCss = data.vendor.css;
  const vendorJs = data.vendor.js;

  // Mounted Vendor

  vendorCss.forEach(function(element, index, array){
    fse.copy(`${element.pack}`, `${element.target}`)
    .then(function(){
      console.log("Writing: ", element.target);
    })
    .catch(function(err){
      console.error(err);
    });
  });

  vendorJs.forEach(function(element, index, array){
    fse.copy(`${element.pack}`, `${element.target}`)
    .then(function(){
      console.log("Writing: ", element.target);
    })
    .catch(function(err){
      console.error(err);
    });
  });
  
};
