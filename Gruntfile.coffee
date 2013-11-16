module.exports = (grunt)->
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    concat:
      app:
        src: ['src/ddd/**/*.js']
        dest: 'build/pokedex.js'

      test:
        src: ['build/pokedex.js', 'tests/**/*.js']
        dest: 'build/pokedex-test.js'

      options:
        separator: ';'

    typescript:
      base:
        src: ['src/**/*.ts', 'tests/**/*.ts']

    watch:
      ts:
        files: ['src/**/*.ts', 'tests/**/*.ts']
        tasks: ['typescript', 'concat', 'clean']
        options:
          atBegin: true

    clean: ['src/**/*.js', 'tests/**/*.js']

  })

  grunt.loadNpmTasks('grunt-typescript')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-clean')

  grunt.registerTask('default', ['typescript', 'concat', 'clean'])
