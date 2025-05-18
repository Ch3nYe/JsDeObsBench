var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var K = Arr['shift']() - 0x0;
    if (K == 0x0)
        break;
    var arr = Arr['shift']()['split']('\x20')['map'](Number);
    var sum = arr['reduce'](function (_0x2faa7c, _0x8d4aa5) {
        return _0x2faa7c + _0x8d4aa5;
    });
    console['log'](sum / (K - 0x1));
}