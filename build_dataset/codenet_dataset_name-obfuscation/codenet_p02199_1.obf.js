var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var [a, b] = arr['shift']()['split']('\x20')['map'](Number);
var [p, q, r] = arr['shift']()['split']('\x20')['map'](Number);
var hanareta = b * p;
var tikaduita = (b - a) * q;
var d = hanareta - tikaduita;
console['log']((d / (q + r) + b)['toFixed'](0xc));