var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
for (var i = 0x0; i < 0x4; i++) {
    var arr = Arr[i]['split']('\x20')['map'](Number);
    if (arr[0x0] == 0x1)
        console['log'](arr[0x1] * 0x1770);
    if (arr[0x0] == 0x2)
        console['log'](arr[0x1] * 0xfa0);
    if (arr[0x0] == 0x3)
        console['log'](arr[0x1] * 0xbb8);
    if (arr[0x0] == 0x4)
        console['log'](arr[0x1] * 0x7d0);
}