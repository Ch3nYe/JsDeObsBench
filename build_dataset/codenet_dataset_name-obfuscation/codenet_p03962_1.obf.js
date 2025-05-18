'use strict';
const lines = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('');
if (lines[0x0] === lines[0x1] && lines[0x1] === lines[0x2]) {
    console['log'](0x1);
}
if (lines[0x0] === lines[0x1] && lines[0x1] !== lines[0x2]) {
    console['log'](0x2);
}
if (lines[0x0] === lines[0x2] && lines[0x0] !== lines[0x1]) {
    console['log'](0x2);
}
if (lines[0x1] === lines[0x2] && lines[0x0] !== lines[0x1]) {
    console['log'](0x2);
}
if (lines[0x0] !== lines[0x1] && lines[0x1] !== lines[0x2] && lines[0x2] !== lines[0x0]) {
    console['log'](0x3);
}