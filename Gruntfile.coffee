module.exports = (grunt)->
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json')

    concat:
      app:
        src: ['src/ddd/**/*.js']
        dest: 'build/pokedex.js'

      client:
        src: ['src/client/**/*.js']
        dest: 'meteor/client/client.js'

      server:
        src: ['src/server/**/*.js']
        dest: 'meteor/server/server.js'

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
        tasks: ['typescript', 'concat', 'clean', 'copy']
        options:
          atBegin: true

      html:
        files: ['template/**/*.html']
        tasks: ['clean', 'copy']
        options:
          atBegin: true

    clean: ['src/**/*.js', 'tests/**/*.js', 'meteor/template/**/*.html']

    copy:
      template:
        src:  'template/**/*'
        dest: 'meteor/'

      app:
        src:  'build/pokedex.js'
        dest: 'meteor/pokedex.js'

  })

  grunt.loadNpmTasks('grunt-typescript')
  grunt.loadNpmTasks('grunt-contrib-concat')
  grunt.loadNpmTasks('grunt-contrib-watch')
  grunt.loadNpmTasks('grunt-contrib-clean')
  grunt.loadNpmTasks('grunt-contrib-copy')

  grunt.registerTask('default', ['typescript', 'concat', 'clean', 'copy'])
