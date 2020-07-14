# Hands-on Grunt

Hands-on with Grunt - Grunt é um executor de tarefas Javascript.

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

## Step 04

Iniciando o arquivo Gruntfile.js

```javascript
module.exports = function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json")
    });
    grunt.registerTask("dev", function(){
        console.log("Development mode ...");
    });
    grunt.registerTask("prod", function(){
        console.log("Production mode ...");
    });
};
```

## Testing - Step 04

```shell
grunt dev
grunt prod
```

## Step 05

```javascript
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
```

## Testing - Step 05

```shell
grunt connect
```

## Step 06

```shell
```

## Step 06

```shell
```

## Step 06

```shell
```