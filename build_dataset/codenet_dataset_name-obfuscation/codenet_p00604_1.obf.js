var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    if (Arr['length'] == 0x0)
        break;
    var n = Arr['shift']();
    var arr = Arr['shift']()['split']('\x20')['map'](Number);
    arr['sort'](function (_0x1c12ea, _0x354ea7) {
        return _0x1c12ea - _0x354ea7;
    });
    var sum = 0x0;
    var time = 0x0;
    arr['forEach'](function (_0x46a2fc) {
        sum += _0x46a2fc + time;
        time += _0x46a2fc;
    });
    console['log'](sum);
}