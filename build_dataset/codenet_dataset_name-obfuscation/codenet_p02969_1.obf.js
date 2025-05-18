'use strict';
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var r = parseInt(input, 0xa);
console['log'](0x3 * r * r);