module.exports = function (grunt) {
  
  grunt.loadNpmTasks("grunt-http-server");
  grunt.loadNpmTasks("grunt-war");

  const pkg = grunt.file.readJSON("package.json");

  // Using grunt-http-server
  grunt.initConfig({
    "http-server": {
      "dev": {
        root: "src",
        port: 8282,
        host: "localhost",
        openBrowser: true,
        livereload: true,
        runInBackground: true,
        logFn: function(req, res, error) { },
      },
    },
    war: {
      target: {
        options: {
          war_dist_folder: "./dist",
          war_name: `${pkg.name}-${pkg.version}`,
          war_extras: [
            {
              filename: "WEB-INF/weblogic.xml",
              data: `<?xml version="1.0" encoding="UTF-8"?>\n <wls:weblogic-web-app xmlns:wls="http://xmlns.oracle.com/weblogic/weblogic-web-app" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd http://xmlns.oracle.com/weblogic/weblogic-web-app http://xmlns.oracle.com/weblogic/weblogic-web-app/1.9/weblogic-web-app.xsd">\n<wls:context-root>${pkg.name}</wls:context-root>\n </wls:weblogic-web-app>`,
            },
          ],
        },
        files: [
          {
            expand: true,
            cwd: "src",
            src: ["**"],
            dest: "",
          },
        ],
      },
    },
  });

  grunt.registerTask("dev", function () {
    console.log("Development mode ...");
    console.log(`${pkg.name}-${pkg.version}`);
  });

  grunt.registerTask("prod", function () {
    console.log("Production mode ...");
    console.log(`${pkg.name}-${pkg.version}`);
  });

  grunt.registerTask("default", ["dev", "prod"]);
};
