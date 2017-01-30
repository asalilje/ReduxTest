module.exports = {
    module: {
        loaders: [
            {
                test: /\.(css|less)$/,
                loader: "style!css?modules&importLoaders=1&localIdentName=loanCommitment_[local]!less"
            }
        ]
    }
};