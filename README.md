# Hands-on Grunt

Hands-on with Grunt - Grunt é um executor de tarefas Javascript.

[EXAMPLES](https://www.youtube.com/playlist?list=PL4cUxeGkcC9j85fkVyCzCMJDfteLtrl_y)

## Step 01

Criando o diretório do seu projeto.

```shell
mkdir hands-on-grunt
```

## Step 02

Iniciando o seu projeto Node.js

```shell
npm init -y
```

## Step 03

Instalando as dependências de desenvolvimento.

```shell
npm install angular --save-dev
npm install grunt --save-dev
npm install grunt-contrib-connect --save-dev
npm install grunt-contrib-concat --save-dev
npm install grunt-contrib-uglify --save-dev
npm install grunt-saas --save-dev
npm install grunt-war --save-dev
```

OU

```shell
npm install angular --save-dev
npm install grunt --save-dev
npm install grunt-http-server --save-dev
npm install grunt-contrib-concat --save-dev
npm install grunt-contrib-uglify --save-dev
npm install grunt-saas --save-dev
npm install grunt-war --save-dev
```

## Step 04

Iniciando o arquivo Gruntfile.js

```javascript
module.exports = function(grunt){
    
  const pkg = grunt.file.readJSON("package.json");

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
```

## Testing - Step 04

```shell
grunt dev
grunt prod
grunt
```

## Step 05

Incrementando um webserver usando o grunt-contrib-connect.

```javascript
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

```

## Testing - Step 05

```shell
grunt connect
```

## Step 07

Incrementando uma distribuição usando o grunt-war.

```javascript
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
          war_dist_folder: './dist',
          war_name: `${pkg.name}-${pkg.version}`,
          war_extras: [ 
            {
              filename: 'WEB-INF/weblogic.xml', 
              data: `<?xml version="1.0" encoding="UTF-8"?>\n<wls:weblogic-web-app xmlns:wls="http://xmlns.oracle.com/weblogic/weblogic-web-app" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://java.sun.com/xml/ns/javaee http://java.sun.com/xml/ns/javaee/web-app_3_0.xsd http://xmlns.oracle.com/weblogic/weblogic-web-app http://xmlns.oracle.com/weblogic/weblogic-web-app/1.9/weblogic-web-app.xsd">\n<wls:context-root>${pkg.name}</wls:context-root>\n</wls:weblogic-web-app>`
            }
          ]
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

```

## Testing - Step 07

```shell
grunt war
```

## Step 08

Incrementando uma distribuição usando o grunt-war com o webserver grunt-http-server.

```javascript
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
```

## Testing - Step 08

```shell
grunt http-server:dev
grunt war
```

## Step 09

```shell
```

## Step 10

```shell
```