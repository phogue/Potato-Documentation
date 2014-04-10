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
                assets: 'bin/assets',
                layoutdir: 'src/templates/layouts',
                partials: ['src/templates/partials/*.hbs', './*.md']
            },
            html1: {
                options: {
                    layout: 'default.hbs'
                },
                files: {
                    'bin/': ['src/templates/pages/*.hbs']
                }
            },
            html2: {
                options: {
                    ext: '.html',
                    engine: 'handlebars',
                    layout: 'markdown-2.hbs'
                },
                files: {
                    'bin/': ['src/content/*.md']
                }
            },
            markdown: {
                options: {
                    ext: '.md',
                    engine: 'handlebars',
                    layout: 'markdown-1.hbs'
                },
                files: {
                    'bin/': ['src/content/*.md']
                }
            }
        },
        copy: {
            main: {
                expand: true,
                cwd: 'src/static/',
                src: '**',
                bin: 'bin/',
                filter: 'isFile'
            }
        },
        // Before generating any new files,
        // remove any previously-created files.
        clean: {
            example: ['bin/**']
        }
    });

    // Load npm plugins to provide necessary tasks.
    grunt.loadNpmTasks('assemble');
    grunt.loadNpmTasks('grunt-contrib-clean')
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default tasks to be run.
    grunt.registerTask('default', ['assemble', 'copy']);
};
