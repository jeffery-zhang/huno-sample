module.exports = (ctx) => {
  return {
    name: "plugin1",
    init() {
      console.log("this is plugin1");
      console.log(ctx.siteVariables);
    },
  };
};
