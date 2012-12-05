/*global module:false, console:false*/
module.exports = function(grunt) {
  'use strict';
  var dev = '../src/';
  var prod = '../dist/';
  var css = dev + 'css/';
  var images = dev + 'images/';
  var js = dev + 'js/';
  var sass = dev + 'sass/';


  // Project configuration.
  grunt.initConfig({
    lint: {
      files: ['grunt.js', js + 'main.js']
    },
    concat: {
      dist: {
        src: [js + 'main.js'],
        dest: js + 'site.min.js'
      }
    },
    min: {
      dist: {
        src: ['<config:concat.dist.dest>'],
        dest: js + 'site.min.js'
      }
    },
    compass: {
      dev: {
        src: sass,
        dest: css,
        outputstyle: 'expanded',
        linecomments: true
      },
      prod: {
        src: prod + 'sass',
        dest: prod + 'css',
        outputstyle: 'compressed',
        linecomments: false,
        forcecompile: true
      }
    },
    watch: {
      files: '<config:lint.files>',
      tasks: 'lint'
    },
    jshint: {
      options: {
        curly: true,
        eqeqeq: true,
        immed: true,
        latedef: true,
        newcap: true,
        noarg: true,
        sub: true,
        undef: true,
        boss: true,
        eqnull: true,
        browser: true
      },
      globals: {}
    }
  });

  // Default task.
  grunt.registerTask('default', 'lint concat min');

  // plugin tasks
  grunt.loadNpmTasks('grunt-compass');

};
