#!/usr/bin/env node

const yargs = require('yargs');
const fs = require('fs');
const getStdin = require('get-stdin');
const escomplex = require('./index');
const defaultParserOptions = require('./config').parserOptions

const argv = yargs
  .option('input-file', {
    describe: 'File to read source code from',
    type: 'string'
  })
  .option('json', {
    describe: 'Output result in JSON format',
    type: 'boolean'
  })
  .help()
  .argv;

async function main() {
  try {
    let sourceCode;
    if (argv.inputFile) {
      sourceCode = fs.readFileSync(argv.inputFile, 'utf8');
    } else {
      sourceCode = await getStdin();
    }
    defaultParserOptions.sourceType = 'module';
    const result = escomplex.analyse(sourceCode, defaultParserOptions);
    if (argv.json) {
      console.log(JSON.stringify(result, null, 2));
    } else {
      console.log(result);
    }
  } catch (error) {
    console.error('Error analysing source code:', error);
  }
}

main();