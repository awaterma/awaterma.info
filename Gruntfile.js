var module;
module.exports = function (grunt) {
"use strict";

grunt.initConfig({
  pkg: grunt.file.readJSON('package.json'),
  clean: ['build', 'dist'],
  jshint: {
    files: ['gruntfile.js', 'app/js/*.js', 'test/**/*.js'],
    options: {
      globals: {
        jQuery: true,
        console: true,
        module: true,
        document: true
      }
    }
  },
  copy: {
    main: {
      files: [
          {src: ['components/bootstrap/bootstrap/**'], dest: 'build/', cwd: 'app', expand: true},
          {src: ['components/jquery/**'], dest: 'build/', cwd: 'app', expand: true},
          {src: ['components/bootswatch/img/**'], dest: 'build/', cwd: 'app', expand: true},
          {src: ['components/bootswatch/cerulean/**'], dest: 'build/', cwd: 'app', expand: true},
          {src: ['css/**'], dest: 'build/', cwd: 'app', expand: true },
          {src: ['img/**'], dest: 'build/', cwd: 'app', expand: true },
          {src: ['js/**'], dest: 'build/', cwd: 'app', expand: true },
          {src: ['*.html'], dest: 'build/', cwd:'app', filter: 'isFile', expand: true }
      ]
    }
  },
  compress: {
    main: {
      options: {
         archive: 'dist/awaterma.zip'
      },
      files: [
        {expand: true, cwd: 'build', src: ['**']}]
    }
   }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-contrib-compress');
  grunt.registerTask('default', ['clean', 'jshint', 'copy','compress']);
  grunt.registerTask('lint',['clean','jshint']);
};
