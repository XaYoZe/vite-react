const path  = require('path');
const fs = require('fs');
console.log(path.resolve(__dirname, '../index1.html'))
/** @type {import('vite').UserConfig} */
module.exports = (param) => {
  console.log(param)
  let projPath = path.resolve(__dirname, '../src', param.proj);
  let dir = fs.readdirSync(path.join(projPath, 'pages'));
  let pages = dir.filter(item => /\.html$/.test(item)).map(fileName => [fileName, path.join(projPath, 'pages' , fileName)])
  if (!pages.length) {
    throw 'pages下没有html文件存在'
  }
  return {
    cacheDir: 'node_modules/.cache/vite' && false,
    build: {
      outDir: path.resolve(__dirname, '../dist'),
      target: ['chrome58', 'firefox57', 'safari11', 'edge16'],
      rollupOptions: {
        input: Object.fromEntries(pages)
      }
    },
  };
}