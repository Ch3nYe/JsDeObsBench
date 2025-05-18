function bomb(_0x371b63, _0x2f1c28, _0x2aa73f) {
    if (_0x2aa73f == n) {
        min = Math['min'](min, Math['abs'](_0x371b63 - _0x2f1c28));
        return;
    }
    bomb(_0x371b63 + arr[_0x2aa73f], _0x2f1c28, _0x2aa73f + 0x1);
    bomb(_0x371b63, _0x2f1c28 + arr[_0x2aa73f], _0x2aa73f + 0x1);
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var arr = Arr['shift']()['split']('\x20')['map'](Number);
    var min = Infinity;
    bomb(0x0, 0x0, 0x0);
    console['log'](min);
}