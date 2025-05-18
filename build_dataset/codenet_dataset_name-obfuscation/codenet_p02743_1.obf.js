inp = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a');
l = inp['shift']()['split']('\x20');
a = l['shift']() * 0x1;
b = l['shift']() * 0x1;
c = l['shift']() * 0x1;
console['log'](Math['sqrt'](a) + Math['sqrt'](b) < Math['sqrt'](c) ? 'Yes' : 'No');