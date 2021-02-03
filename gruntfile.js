module.exports = function (grunt) {
  grunt.initConfig({
    penthouse: {
      desktop: {
        outfile: "./assets/styles/critical-desktop.css",
        css: "./assets/styles/all.css",
        url: "https://localhost:8000",
        width: 1200,
        height: 900,
        skipErrors: false,
      },
    },
  });

  grunt.loadNpmTasks("grunt-penthouse");

  grunt.registerTask("default", ["penthouse"]);
};
