/*!
* Autovers Gruntfile
* @author Zoltan Benko
*/

'use strict';

/**
* Grunt Module
*/
module.exports = function(grunt) {
    /**
    * Configuration
    */
    grunt.initConfig({
        /**
        * Get package meta data
        */
        pkg: grunt.file.readJSON('package.json'),
        /**
         * Sass
         */
        sass: {
          dev: {
            options: {
              style: 'expanded'
            },
            files: {
              'assets/css/style.css': 'assets/css/scss/style.scss'
            }
          },
          dist: {
            options: {
              style: 'compressed'
            },
            files: {
              'assets/css/style.css': 'assets/css/scss/style.scss'
            }
          }
        },
        autoprefixer:{
          dist:{
            files:{
              'assets/css/style.css':'assets/css/style.css'
            }
          }
        },
        /**
        * Watch
        */
        watch: {
            sass: {
                files: 'assets/css/scss/*.scss',
                tasks: ['sass:dev', 'autoprefixer']
            }
        }
    });
    /**
     * Default task
     * Run `grunt` on the command line
     */
    grunt.registerTask('default', [
      'sass:dev',
      'watch'
    ]);
    /**
     * Load Grunt plugins
     */
    require('matchdep').filterDev('grunt-*').forEach(grunt.loadNpmTasks);
};