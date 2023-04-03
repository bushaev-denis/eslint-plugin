module.exports = {
  rules: require("./rules").default,
  configs: {
    base: require("./configs/base"),
    react: require("./configs/react"),
    nextjs: require("./configs/nextjs"),
    electron: require("./configs/electron"),
  },
};
