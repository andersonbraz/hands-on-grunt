module.exports = function (grunt) {

  grunt.loadNpmTasks("grunt-contrib-connect");

  const pkg = grunt.file.readJSON("package.json");

  grunt.initConfig({
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
    console.log('Development mode ...');
    console.log(`${pkg.name}-${pkg.version}`);
  });

  grunt.registerTask("prod", function () {
    console.log("Production mode ...");
    console.log(`${pkg.name}-${pkg.version}`);
  });

  grunt.registerTask("default", ['dev', 'prod']);

};
