var config = {
    entry: './main.js',
    output: {
        path:'/',
        filename: 'index.js',
    },
    devServer: {
        inline: true,
        port: 8080,
    },
    module: {
        rules: [
          {
              test: /\.jsx?$/,
              exclude: /node_modules/,
              loaders: 'babel-loader',
              query: {
                  presets: ['es2015', 'react']
              }
          },
          {
              test: /\.css$/,
              exclude: /node_modules/,
              use: [
                {
                  loader: 'style-loader',
                },
                {
                  loader: 'css-loader',
                }
              ]
          }
        ]
    }
}

module.exports = config;
