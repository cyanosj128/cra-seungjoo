const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const Dotenv = require('dotenv-webpack');

module.exports = (env) => {
  return {
    entry: './src/index.tsx',
    output: {
      path: path.join(__dirname, '/dist'),
      filename: 'bundle.js',
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'babel-loader',
          exclude: /node_modules/,
        },
      ],
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: './src/index.html',
      }),
      new Dotenv({
        path: `./.env${env && env.production ? '.production' : ''}`, // Use .env.production for production
      }),
    ],
    resolve: {
      extensions: ['.tsx', '.ts', '.js'],
    },
  };
};
