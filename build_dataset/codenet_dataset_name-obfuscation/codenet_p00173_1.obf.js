var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
for (var i = 0x0; i < Arr['length']; i++) {
    var arr = Arr[i]['split']('\x20');
    var a = arr[0x1] - 0x0 + (arr[0x2] - 0x0);
    var b = (arr[0x1] - 0x0) * 0xc8 + (arr[0x2] - 0x0) * 0x12c;
    console['log'](arr[0x0] + '\x20' + a + '\x20' + b);
}