const path = require('path');

module.exports = {
  context: path.join(__dirname, '/src'),

  entry: {
    javascript: './js/index'
  },

  output: {
    filename: 'bundle.js',
    path: path.join(__dirname, '/dist'),
  },

  resolve: {
    alias: {
      react: path.join(__dirname, 'node_modules', 'react')
    },
    extensions: ['.js', '.jsx']
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel-loader'],
      },
      {
        test: /\.html$/,
        loader: 'file?name=[name].[ext]',
      },
      {
        test: /\.less$/,
        include: [path.resolve(__dirname, 'src')],
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'less-loader',
          }
        ]
      },
    ],
  },
};

//.less files can't have -w on them, need to configure webpack to handle
//INSTRUCTIONS:
//install correct loaders
//change webpack.config.js to test for less files and pipe through loaders
//remove .css link inside public
//import less file directly into JS App
//ponder existence
//??
//profit

//Q: Why go through all the loaders? Just for --watch?
//No. "less": "lessc src/css/style.less dist/css/style.css" used to exist in package.json
//but is no longer needed because webpack compiles now
