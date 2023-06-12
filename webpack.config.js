const path = require('path')
const HTMLWebpacklPlugin = require('html-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {

    entry : './src/index.js',

    output: {
        path: path.join(__dirname, '/dist'),
        filename: 'bundle.js',
        publicPath: '/eko/',
    },
    
    devServer: {
        headers: { 
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept"
        }
     },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html'
        })
    ],

    module: {
        rules: [
            {
                test: /.js$/,
                exclude:/node_modules/,
                use: {
                    loader: "babel-loader",
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react']
                    }
                }
            },
            {
                test: /\.(css)$/,
                use: ['style-loader','css-loader']
            }, 
            {
                test: /\.(png|svg|jpg|jpeg|gif|glb|bin|gltf)$/i,
                type: 'asset/resource',
                generator: {
                   filename: 'images/[name][ext]'
                }
              },
        ]
    },
    



}