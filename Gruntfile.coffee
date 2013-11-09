module.exports = (grunt)->
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    concat:
      app:
        src: ['src/**/*.js']
        dest: 'build/pokedex.js'

      options:
        separator: ';'

    typescript:
      base:
        src: ['src/**/*.ts']

    watch:
      ts:
        files: ['src/**/*.ts']
        tasks: ['typescript', 'concat', 'clean']
        options:
          atBegin: true

    clean: ['src/**/*.js']

  })

  grunt.loadNpmTasks('grunt-typescript')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-clean')

  grunt.registerTask('default', ['typescript', 'concat', 'clean'])
