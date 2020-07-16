
const tools = require('./tools/handler-dev');

module.exports = function (grunt) {

  const package = grunt.file.readJSON('package.json');
  const config = grunt.file.readJSON('config.json');

  grunt.initConfig({
  });

  grunt.registerTask('test', function () {
    console.log("test");
  });

  grunt.registerTask('default', ['test']);
  
};
