var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var NM = Arr['shift']();
    if (NM == '0\x200')
        break;
    var nm = NM['split']('\x20')['map'](Number);
    var m = nm[0x1];
    var arr = Arr['shift']()['split']('\x20')['map'](Number);
    arr['sort'](function (_0x21643a, _0x3de0a0) {
        return _0x3de0a0 - _0x21643a;
    });
    var sum = 0x0;
    for (var i = 0x0; i < arr['length']; i++) {
        if ((i + 0x1) % m != 0x0)
            sum += arr[i];
    }
    console['log'](sum);
}