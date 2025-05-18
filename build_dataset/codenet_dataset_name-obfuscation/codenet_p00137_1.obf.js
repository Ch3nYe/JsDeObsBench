var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a')['map'](Number);
var L = Arr['shift']();
for (var i = 0x0; i < L; i++) {
    console['log']('Case\x20' + (i + 0x1) + ':');
    var v = Arr[i];
    for (var j = 0x0; j < 0xa; j++) {
        v = '000000' + v * v;
        v = v['slice'](-0x6);
        v = v['slice'](0x0, 0x4);
        v = parseInt(v, 0xa);
        console['log'](v);
    }
}