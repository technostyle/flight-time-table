module.exports = {
  entry: "./app/index.jsx",
  devtool: "#sourcemap",
  mode: "development",
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          "style-loader",
          { loader: "css-loader", options: { modules: true } }
        ]
      },
      {
        test: /\.jsx$/,
        exclude: /(node_modules)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"]
          }
        }
      }
    ]
  },
  devServer: {
    contentBase: "dist"
  },
  resolve: {
    modules: ["app", "node_modules"],
    extensions: [".js", ".jsx"]
  }
};
