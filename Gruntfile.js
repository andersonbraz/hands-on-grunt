module.exports = function (grunt) {

  grunt.loadNpmTasks("grunt-contrib-connect");
  grunt.loadNpmTasks('grunt-war');

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
    war: {
      target: {
        options: {
          war_dist_folder: './dist',    /* Folder where to generate the WAR. */
          war_name: `${pkg.name}-${pkg.version}`                   /* The name fo the WAR file (.war will be the extension) */
        },
        files: [
          {
            expand: true,
            cwd: 'src',
            src: ['**'],
            dest: ''
          }
        ]
      }
    }
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
