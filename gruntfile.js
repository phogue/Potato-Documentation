/*
 * Assemble, assemble-examples-markdown
 * https://github.com/assemble/assemble-examples-markdown
 * Copyright (c) 2013 Jon Schlinkert
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        assemble: {
            options: {
                flatten: true,
                helpers: 'src/helpers/helper-*.js',
                assets: 'dest/assets',
                layoutdir: 'src/templates/layouts',
                partials: ['src/templates/partials/*.hbs', './*.md'],
                plugins: ['assemble-contrib-anchors']
            },
            html1: {
                options: {
                    layout: 'default.hbs'
                },
                files: {
                    'dest/': ['src/templates/pages/*.hbs']
                }
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: 'src/static/',
                src: '**',
                dest: 'dest/',
                filter: 'isFile'
            }
        },
        // Before generating any new files,
        // remove any previously-created files.
        clean: {
            example: ['dest/**']
        }
    });

    // Load npm plugins to provide necessary tasks.
    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('assemble-contrib-anchors');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-copy');


    // Default tasks to be run.
    grunt.registerTask('default', ['assemble', 'copy']);
};

