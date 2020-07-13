module.exports = function(grunt){
    
    grunt.initConfig({
        pkg: grunt.file.readJSON("package.json")
    });

    grunt.registerTask("dev", function(){
        console.log("Development mode...");
    });

    grunt.registerTask("prod", function(){
        console.log("Production mode ...");
    });

};