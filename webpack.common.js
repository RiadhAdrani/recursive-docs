const path = require("path");

module.exports = {
    entry: "./src/index.js",
    output: {
        filename: "main.js",
        path: path.resolve(__dirname, "dist"),
    },
    module: {
        rules: [
            { test: /\.html$/, use: ["html-loader"] },
            {
                test: /\.svg|png|jpg|gif|md$/,
                use: [
                    {
                        loader: "file-loader",
                        options: {
                            esModule: false,
                            name: "[name].[ext]",
                            outputPath: "assets",
                        },
                    },
                ],
                type: "javascript/auto",
            },
        ],
    },
};
