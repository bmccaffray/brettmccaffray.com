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
			dev: {
				src: 'build/'
			},
			design: {
				expand: true,
				cwd: 'build/',
				src: ['*.html', 'css/*.css', 'css/*.scss']
			}
		},
		copy: {
			design: {
				expand: true,
				cwd: '',
				src: ['*.html', 'css/*.css'],
				dest: 'build/',
				filter: 'isFile'
			}
		},
		sass: {
			build: {
				files: {
					'build/style.css': 'css/*.scss'
				}
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
				files: ['server.js', '*.html', 'css/*.scss'],
				tasks: ['build:design']
			}
		}
	});

	grunt.registerTask('build:design', ['clean:design', 'copy:design', 'express:design', 'watch:design']);
};