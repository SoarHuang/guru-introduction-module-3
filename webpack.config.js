const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');

module.exports = {

    // The files to bundle into the dist. Here we are only using one JS file and
    // our styles.
    entry: [
        './src/app/main.js'
    ],

    output: {
        // The dist path must be an absolute path
        path: path.resolve('./dist'),
        filename: '[name].js'
    },

    // Resolve gives us the ability to shorten our paths when importing and
    // requiring. You can alias your commonly used paths to make them easier to
    // read.
    resolve: {
        extensions: ['.js', '.jsx', '.scss', '.json'],
        alias: {
            // This allows us to import glow easily from our Sass
            // EG: @import "~glow/base"
            glow: path.resolve('./node_modules/@meldcx/glow'),
            styles: path.resolve('./src/styles')
        },
        modules: ['node_modules']
    },


    module: {
        // These rules tell webpack what to run on what files.
        // EG: run the sass-loader on all files ending with .scss
        // EG: run the image optimiser on all files ending with .png or .jpg
        rules: [
            {
                // Run on all files ending with .scss
                test: /.scss$/,
                loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
            }
        ]
    },

    // This plugin creates an index.html page with all the bundled resources in
    // it automatically. Once you've run `yarn build`, look at the
    // ./dist/index.html for more information
    plugins: [new HTMLWebpackPlugin({
        title: 'MeldCX Guru - Introduction - Getting started with Webpack'
    })]
}
