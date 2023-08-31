const path = require('path');
const { program } = require('commander');
const vite = require('vite')
const buildConfig = require('./build.config.js');
const devConfig = require('./dev.config.js');
const commonConfig = require('./common.config.js');
// const _  = require('lodash');

// program.option('-i, --isTest', '测试模式', false);
// program.option('-p, --proj <proj>', '启动项目名');

program.command('server')
  .option('-i, --isTest', '测试模式', false)
  .option('-p, --proj <proj>', '启动项目名')
  .action(async (arg) => {
    console.log('server', arg)
    const configCommon =  typeof commonConfig === 'function' ? commonConfig(arg) : commonConfig
    const configDev = await (typeof devConfig === 'function' ? devConfig(arg) : devConfig)
    let server = await vite.createServer(vite.mergeConfig(configCommon, configDev))
    await server.listen()  
    server.printUrls()
  });

program.command('build')
  .option('-i, --isTest', '测试模式', false)
  .option('-p, --proj <proj>', '启动项目名')
  .action(async (arg) => {
    console.log('build', arg)
    const configCommon =  typeof commonConfig === 'function' ? commonConfig(arg) : commonConfig
    const configBuild =  await (typeof buildConfig === 'function' ? buildConfig(arg) : buildConfig)
    vite.build(vite.mergeConfig(configCommon, configBuild))
  });
program.parse()
let options = program.opts();
console.log(options)