const input = require('fs')['readFileSync']('/dev/stdin', 'utf8')['split'](/\n/);
let num = input[0x1]['split']('\x20')['map'](Number);
num['reverse']();
console['log'](num['join']('\x20'));