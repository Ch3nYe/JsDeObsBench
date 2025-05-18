inp = require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a');
l = inp['shift']()['split']('\x20');
x = l[0x0];
y = l[0x1];
console['log'](x == y ? '=' : x['charCodeAt']() < y['charCodeAt']() ? '<' : '>');