module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          extension: [".tsx", ".ts", ".js", ".json"]
        },
      ],
      "react-native-reanimated/plugin",
    ],
  };
};
