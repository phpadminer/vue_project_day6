let HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    entry: './src/main.js',
    output: {
        filename: 'bundle.js'
    },
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            {test:/\.css$/,use:['style-loader','css-loader']},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            {test:/\.(gif|png|jpg)$/,use:'url-loader?limit=8912'},

        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'src/index.html',
            filename:'test.html'
        })
    ]
};