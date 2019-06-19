#!/usr/bin/env node

import * as glob from 'glob';
import 'colors';
import minimist from 'minimist';
import { TSBufferProtoGenerator } from 'tsbuffer-proto-generator';
import * as fs from "fs";

const i18n = require('./i18n/zh-cn');
const version = require('./package.json').version;
const args = minimist(process.argv);

// Help
if (args.h || args.help) {
    showLogo();
    console.log(i18n.welcome.replace('${version}', version).green);
    console.log('\n' + i18n.help);
    console.log('\n' + i18n.example);
}
// Proto
else if (args._.includes('proto')) {
    proto();
}
// Encode
// Decode
// Validate
// Show
// Error
// No Command
else if (args._.length === 2) {
    showLogo();
    console.log(i18n.welcome.replace('${version}', version).green);
    console.log('\n' + i18n.example);
    console.log('\n' + '键入 tsbuffer -h 查看更多帮助信息'.yellow);
}
else {
    console.log(i18n.errCmd.red);
}

function showLogo() {
    console.log(`
88888888888 .d8888b.  888888b.             .d888  .d888                 
    888    d88P  Y88b 888  "88b           d88P"  d88P"                  
    888    Y88b.      888  .88P           888    888                    
    888     "Y888b.   8888888K.  888  888 888888 888888 .d88b.  888d888 
    888        "Y88b. 888  "Y88b 888  888 888    888   d8P  Y8b 888P"   
    888          "888 888    888 888  888 888    888   88888888 888     
    888    Y88b  d88P 888   d88P Y88b 888 888    888   Y8b.     888     
    888     "Y8888P"  8888888P"   "Y88888 888    888    "Y8888  888
------------------------------------------------------------------------
`.green);
}

function showHelp() {
    showLogo();
    console.log(i18n.help);
    console.log(i18n.example);
}

async function proto() {
    let input: string | string[] | undefined = args.input || args.i;
    let output: string | undefined = args.output || args.o;
    let compatible: string | undefined = args.compatible || args.c;
    let ugly: boolean | undefined = args.ugly || args.u;

    if (!input) {
        console.log(i18n.missingFile.red);
        return;
    }

    let proto = await new TSBufferProtoGenerator().generate(input);
    let protoStr = args.u || args.ugly ? JSON.stringify(proto) : JSON.stringify(proto, null, 2);

    if (output) {
        fs.writeFileSync(output, protoStr);
        console.log(i18n.protoSucc.replace('${output}', output).green);
    }
    else {
        console.log(protoStr.green);
    }

}