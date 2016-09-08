#!/usr/bin/env node

'use strict';

// Modules
const meow = require('meow');
const toFingerprint = require('string-fingerprint');

const cli = meow(`
  Usage
    $ stringFingerprint "<input>"
`);

const inputString = cli.input.join(' ').trim();

console.log(toFingerprint(inputString));
