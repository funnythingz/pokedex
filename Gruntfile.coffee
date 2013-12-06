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

    ts:
      base:
        src: ['src/**/*.ts', 'tests/**/*.ts']
        options:
          sourceMap: false

    watch:
      ts:
        files: ['src/**/*.ts', 'tests/**/*.ts']
        tasks: ['ts', 'concat', 'clean']
        options:
          atBegin: true

    clean: ['src/**/*.js', 'tests/**/*.js', 'tscommand.tmp.txt']

  })

  grunt.loadNpmTasks('grunt-ts')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-clean')

  grunt.registerTask('default', ['ts', 'concat', 'clean'])
