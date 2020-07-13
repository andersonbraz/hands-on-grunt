module.exports = function(grunt){
    /*
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json"),
        build: {
            src: "",
            dest: ""
        }
    });
    */
    grunt.registerTask("run", function(){
        console.log("Running...");
    });

    grunt.registerTask("sleep", function(){
        console.log("Sleeping...");
    });

};