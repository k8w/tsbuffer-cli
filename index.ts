#!/usr/bin/env node

import * as glob from 'glob';
import 'colors';
import minimist from 'minimist';

const i18n = require('./i18n/zh-cn');
const version = require('./package.json').version;
const args = minimist(process.argv);

showLogo();
console.log(i18n.welcome.replace('${version}', version));
console.log('-----------------------------------------------------------------------------');

if (args.h || args.help) {
    showHelp();
}

function showLogo() {
    console.log(`
████████╗███████╗██████╗ ██╗   ██╗███████╗███████╗███████╗██████╗ 
╚══██╔══╝██╔════╝██╔══██╗██║   ██║██╔════╝██╔════╝██╔════╝██╔══██╗
   ██║   ███████╗██████╔╝██║   ██║█████╗  █████╗  █████╗  ██████╔╝
   ██║   ╚════██║██╔══██╗██║   ██║██╔══╝  ██╔══╝  ██╔══╝  ██╔══██╗
   ██║   ███████║██████╔╝╚██████╔╝██║     ██║     ███████╗██║  ██║
   ╚═╝   ╚══════╝╚═════╝  ╚═════╝ ╚═╝     ╚═╝     ╚══════╝╚═╝  ╚═╝
`.yellow);
}

function showHelp() {
    console.log(i18n.help);
}