const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production', // Modo de produção
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
    clean: true, // Limpa a pasta dist antes de cada build
  },
  module: {
    rules: [
      {
        test: /\.scss$/, // Regra para arquivos SCSS
        use: [
          MiniCssExtractPlugin.loader, // Extrai o CSS para um arquivo separado
          'css-loader',   // Interpreta @import e url()
          'sass-loader',  // Compila SCSS para CSS
        ],
      },
    ],
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: 'styles.css', // Nome do arquivo CSS gerado
    }),
    new HtmlWebpackPlugin({
      template: './dist/index.html', // Modelo do arquivo HTML
      filename: 'index.html', // Nome do arquivo HTML gerado
    }),
  ],
};
