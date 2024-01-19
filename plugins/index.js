const { loadPlugins } = require("c://Users/Administrator/Desktop/app/huno");

module.exports = loadPlugins([
  () => {
    return {
      init() {
        console.log("test load plugin");
      },
    };
  },
]);
