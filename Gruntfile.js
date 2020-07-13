module.exports = function (grunt) {

  grunt.loadNpmTasks("grunt-contrib-connect");

  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    connect: {
      server: {
        options: {
          port: 8282,
          hostname: "localhost",
          base: "src",
          keepalive: true,
          livereload: true,
        },
      },
    },
  });

  grunt.registerTask("dev", function () {
    console.log("Development mode ...");
  });

  grunt.registerTask("prod", function () {
    console.log("Production mode ...");
  });
};
