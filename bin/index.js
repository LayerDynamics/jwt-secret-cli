#!/usr/bin/env node

/* global process, console */

// bin/index.js

const { program } = require('commander');
const generateSecret = require('../lib/generateSecret');
const packageJson = require('../package.json');

program
    .name('jwt-secret-cli')
    .description('CLI tool to generate secure JWT secrets')
    .version(packageJson.version)
    .option('-l, --length <number>', 'Length of the secret', '64')
    .option('-f, --format <type>', 'Format of the secret (hex/base64)', 'hex')
    .parse(process.argv);

const options = program.opts();

try {
    const length = parseInt(options.length, 10);
    if (isNaN(length) || length <= 0) {
        throw new Error('Length must be a positive integer');
    }

    let secret;
    if (options.format === 'base64') {
        secret = require('crypto').randomBytes(length).toString('base64');
    } else {
        secret = generateSecret(length);
    }

    // eslint-disable-next-line no-console
    console.log(secret);
} catch (error) {
    // eslint-disable-next-line no-console
    console.error(`Error: ${error.message}`);
    process.exit(1);
}
