var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var [m, f, b] = input['trim']()['split']('\x20')['map'](Number);
if (m >= b)
    console['log'](0x0);
else if (m + f < b)
    console['log']('NA');
else
    console['log'](b - m);