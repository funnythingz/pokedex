module.exports = (grunt)->

    require('load-grunt-tasks')(grunt)

    grunt.registerTask('default', ['typescript', 'concat', 'clean'])

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json')

        concat:
            test:
                src: ['build/pokedex.js', 'tests/**/*.js']
                dest: 'build/pokedex-test.js'

            options:
                separator: ';'

        typescript:
            base:
                src: ['src/**/*.ts', 'tests/**/*.ts']
                dest: 'build/pokedex.js'
                options:
                    sourceMap: true

        watch:
            typescript:
                files: ['src/**/*.ts', 'tests/**/*.ts']
                tasks: ['typescript', 'concat', 'clean']
                options:
                    atBegin: true

        clean: ['src/**/*.js', 'tests/**/*.js']

    })
