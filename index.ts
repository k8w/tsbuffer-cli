#!/usr/bin/env node

import * as glob from 'glob';
import 'colors';
import minimist from 'minimist';

const i18n = require('./i18n/zh-cn');
const version = require('./package.json').version;
const args = minimist(process.argv);

// Help
if (args.h || args.help) {
    showHelp();
}
// Proto
// Encode
// Decode
// Validate
// Show
// Error
else {
    console.log(i18n.errCmd.red);
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
    showLogo();
    console.log(i18n.welcome.replace('${version}', version));
    console.log('-----------------------------------------------------------------------------');
    console.log(i18n.help);
}