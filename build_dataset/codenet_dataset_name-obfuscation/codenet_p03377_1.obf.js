inp = require('fs')['readFileSync']('/dev/stdin', 'utf8')['split']('\x0a');
l = inp['shift']()['split']('\x20');
A = l[0x0] * 0x1;
B = l[0x1] * 0x1;
X = l[0x2] * 0x1;
console['log'](A + B > X && A < X ? 'YES' : 'NO');