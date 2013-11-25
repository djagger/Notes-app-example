#global module:false#
module.exports = (grunt) ->
	"use strict"
	grunt.initConfig
		# здесь будут <del>драконы</del> задачи
		coffee:
			dev:
				expand: true
				cwd: 'src'
				src: ['*.coffee']
				dest: 'js'
				ext: '.js'

			options:
				sourceMap: true


		watch:
			coffee:
				files: "src/**/*.coffee"
				tasks: "coffee"

	# Подключаем плагины
	grunt.loadNpmTasks "grunt-contrib-coffee"
	grunt.loadNpmTasks "grunt-contrib-watch"

	# Определяем свои задачи
	grunt.registerTask "default", ["coffee", "watch"]