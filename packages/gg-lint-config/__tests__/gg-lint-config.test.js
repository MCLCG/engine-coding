'use strict';

const ggLintConfig = require('..');
const assert = require('assert').strict;

assert.strictEqual(ggLintConfig(), 'Hello from ggLintConfig');
console.info('ggLintConfig tests passed');
