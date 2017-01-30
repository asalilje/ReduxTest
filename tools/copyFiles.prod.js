import copyFiles from './copyFiles';

const files = [
    { from: "./src/index.html", to: "./dist/index.html" },
    { from: "./mockapi/", to: "./dist/"}
];

copyFiles(files);
