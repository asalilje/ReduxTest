import copyFiles from './copyFiles';

const devFiles = [
    { from: "./src/index.html", to: "./dist/index.html" },
    { from: "./mockapi/", to: "./dist/"}
];

copyFiles(devFiles);
