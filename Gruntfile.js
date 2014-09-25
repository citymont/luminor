/*
     * grunt-init
     * https://gruntjs.com/
     *
     * Copyright (c) 2014 "Cowboy" Ben Alman, contributors
     * Licensed under the MIT license.
     */

    'use strict';

    module.exports = function(grunt) {

      // Project configuration.
      grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
          dist: {
            src: ['node_modules/normalize.css/normalize.css'],
            dest: 'assets/less/base.less'
          }
        },

        jshint: {
          all: [
            'Gruntfile.js',
            'assets/js/*.js',
          ],
          options: {
            globals: {
              jQuery: true,
              console: false,
              module: true
            }
          }
        },

        uglify: {
          dist: {
            files: {
              'assets/js/main.min.js': ['assets/js/main.js']
            }
          }
        },

        recess: {
          options: {
            compile: true,
            banner: '<%= banner %>'
          },
          main: {
            src: ['assets/less/main.less'],
            dest: 'assets/css/main.css'
          },
          min: {
            options: {
              compress: true
            },
            src: ['assets/less/main.less'],
            dest: 'assets/css/main.min.css'
          }
        },


        watch: {
          js: {
            files: ['assets/js/main.js'],
            tasks: ['uglify:dist'],
            options: {
              livereload: true,
            }
          },
          less: { 
            files: ['assets/less/*.less'],
            tasks: ['concat','recess'],
            options: {
              livereload: true,
            }
          }
        }
      });

      // These plugins provide necessary tasks.
      grunt.loadNpmTasks('grunt-contrib-concat');
      grunt.loadNpmTasks('grunt-contrib-jshint');
      grunt.loadNpmTasks('grunt-contrib-uglify');
      grunt.loadNpmTasks('grunt-contrib-watch');
      grunt.loadNpmTasks('grunt-recess');

      // By default, lint and run all tests.
      grunt.registerTask('default', ['concat','uglify','recess']);

    };
