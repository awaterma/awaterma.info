module.exports = function(grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    clean: ['dist'],
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
            {src: ['*.html'], dest: 'dist/', cwd:'app', filter: 'isFile', expand: true },
            {src: ['js/**'], dest: 'dist/', cwd: 'app', expand: true },
            {src: ['css/**'], dest: 'dist/', cwd: 'app', expand: true },
            {src: ['components/bootstrap/js/**'], dest: 'dist/', cwd: 'app', expand: true},
            {src: ['components/bootstrap/js/**'], dest: 'dist/', cwd: 'app', expand: true},
            {src: ['components/jquery/jquery.js'], dest: 'dist/', cwd: 'app', expand: true},
            {src: ['components/bootswatch/cerulean/bootstrap.min.css'], dest: 'dist/', cwd: 'app', expand: true}
        ]
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.registerTask('default', ['clean', 'jshint', 'copy']);
};