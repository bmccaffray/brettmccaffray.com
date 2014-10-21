'use strict';

module.exports = function(grunt){
	grunt.loadNpmTasks('grunt-contrib-clean');
	grunt.loadNpmTasks('grunt-contrib-copy');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-htmlmin');
	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-express-server');
	grunt.loadNpmTasks('grunt-browserify');

	grunt.initConfig({
		clean: {
			design: {
				expand: true,
				cwd: 'build/',
				src: ['*.html', 'css/*.css', 'images/*']
			},
			dist: {
				src: 'build/'
			}
		},
		copy: {
			design: {
				expand: true,
				cwd: '',
				src: ['*.html', 'css/*.css', 'images/*'],
				dest: 'build/',
				filter: 'isFile'
			},
			dist: {
				expand: true,
				cwd: '',
				src: ['images/*'],
				dest: 'build/',
				filter: 'isFile'
			}
		},
		// jshint: {
		// 	all: allJavaScriptFilePaths,
		// 	options: {
		// 		jshintrc: true
		// 	}
		// },
		sass: {
			build: {
				files: {
					'css/style.css': 'css/*.scss'
				}
			}
		},
		htmlmin: {
			dist: {
				options: {
					removeComments: true,
					collapseWhitespace: true
				},
				files: [{
					expand: true,
					cwd: '',
					src: ['*.html'],
					dest: 'build/'
				}]
			}
		},
		cssmin: {
			dist: {
				options: {
					keepSpecialComments: 0
				},
				files: [{
					expand: true,
					cwd: 'css/',
					src: ['*.css'],
					dest: 'build/css/'
				}]
			}
		},
		express: {
			dev: {
				options: {
					script: 'server.js'
				}
			},
			design: {
				options: {
					script: 'server.js'
				}
			}
		},
		watch: {
			design: {
				files: ['server.js', '*.html', 'css/*.scss', 'images/*', 'Gruntfile.js'],
				tasks: ['build:design']
			}
		}
	});

	grunt.registerTask('build:design', ['clean:design', 'sass:build', 'copy:design']);
	grunt.registerTask('design', ['build:design', 'express:design', 'watch:design']);
	grunt.registerTask('build:dist', ['clean:dist', 'sass:build', 'htmlmin:dist', 'cssmin:dist', 'copy:dist']);
};