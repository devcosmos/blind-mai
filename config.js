module.exports = {
  startPath: "/index.html",
  vars: {
    version: "?v=1.0",
    style: {
      color: '#377dff',
    }
  },

  skipFilesFromBundle: {
    dist: [
    ],

    build: [
    ]
  },

  copyDependencies: {},

  buildFolder: "", // e.g. my-project

  replacePathsToCDN: {},

  directoryNames: {
    src: "./src",
    dist: "./dist",
    build: "./build"
  },

  fileNames: {
    dist: {
      css: "theme.min.css"
    },

    build: {
      css: "theme.min.css",
    }
  },

  fileTypes: "jpg|png|svg|mp4|webm|ogv|json",
}
