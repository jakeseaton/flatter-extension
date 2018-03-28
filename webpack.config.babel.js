import path from 'path'

export default {
    entry: {
        content: './content.js',
        background: './background.js',
        popup: './popup.js',
        options: './options.js',
    },
    mode:"development",
    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'build'),
        publicPath: "build/"
    }
}