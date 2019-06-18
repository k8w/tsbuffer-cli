#!/usr/bin/env node

import * as glob from 'glob';
import 'colors';
import minimist from 'minimist';
import { TSBufferSchemaGenerator } from 'tsbuffer-schema-generator';
import * as fs from "fs";

const i18n = require('./i18n/zh-cn');
const version = require('./package.json').version;
const args = minimist(process.argv);

// Help
if (args.h || args.help) {
    showHelp();
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

async function proto() {
    if (!args.file && !args.f) {
        console.log(i18n.missingFile.red)
    }

    let proto = await new TSBufferSchemaGenerator().generate(args.f || args.file as string | string[]);
    let protoStr = args.u || args.ugly ? JSON.stringify(proto) : JSON.stringify(proto, null, 2);

    let outPath: string | undefined = args.o || args.out;
    if (outPath) {
        fs.writeFileSync(outPath, protoStr);
    }
    else {
        console.log(protoStr.green);
    }

}