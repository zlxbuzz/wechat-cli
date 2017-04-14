var webpack = require('webpack')
var commonConfig=require("./webpack.common");
var merge=require("webpack-merge");
module.exports = merge.smart({},commonConfig,{})
