module.exports = function(grunt) {

  grunt.initConfig({
    jasmine: {
      test: {
        src : 'src/**/*.js',
        options: {
          specs : 'specs/**/*spec.js'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-jasmine');

  grunt.registerTask('default', []);
  grunt.registerTask('test', ['jasmine']);
};
