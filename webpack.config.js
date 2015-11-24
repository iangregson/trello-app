// webpack.config.js
module.exports = {
  entry: './public/modules.js',
  output: {
  	path: __dirname + "/public/build/",
    filename: 'bundle.js'   
  }
};