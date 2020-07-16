
const tools = require('./tools/handler-dev');

module.exports = function (grunt) {

  const package = grunt.file.readJSON('package.json');
  const config = grunt.file.readJSON('config.json');

  grunt.initConfig({
  });

  grunt.registerTask('mount-dev', function () {
    tools.cleanDev();
    tools.createDev();
  });

  grunt.registerTask('default', ['mount-dev']);
  
};
