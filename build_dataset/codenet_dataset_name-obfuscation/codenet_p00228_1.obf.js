var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a')['map'](Number);
var SEG = [
    [
        0x1,
        0x1,
        0x1,
        0x1,
        0x1,
        0x1,
        0x0
    ]['reverse'](),
    [
        0x0,
        0x1,
        0x1,
        0x0,
        0x0,
        0x0,
        0x0
    ]['reverse'](),
    [
        0x1,
        0x1,
        0x0,
        0x1,
        0x1,
        0x0,
        0x1
    ]['reverse'](),
    [
        0x1,
        0x1,
        0x1,
        0x1,
        0x0,
        0x0,
        0x1
    ]['reverse'](),
    [
        0x0,
        0x1,
        0x1,
        0x0,
        0x0,
        0x1,
        0x1
    ]['reverse'](),
    [
        0x1,
        0x0,
        0x1,
        0x1,
        0x0,
        0x1,
        0x1
    ]['reverse'](),
    [
        0x1,
        0x0,
        0x1,
        0x1,
        0x1,
        0x1,
        0x1
    ]['reverse'](),
    [
        0x1,
        0x1,
        0x1,
        0x0,
        0x0,
        0x1,
        0x0
    ]['reverse'](),
    [
        0x1,
        0x1,
        0x1,
        0x1,
        0x1,
        0x1,
        0x1
    ]['reverse'](),
    [
        0x1,
        0x1,
        0x1,
        0x1,
        0x0,
        0x1,
        0x1
    ]['reverse']()
];
var n = Arr[0x0];
var seg = [];
for (var i = 0x1; i < Arr['length']; i++) {
    if (n == 0x0) {
        if (i == 0x0)
            continue;
        var arr = [
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0,
            0x0
        ];
        seg['forEach'](function (_0x519ad7) {
            var _0x4ff8e1 = SEG[_0x519ad7];
            var _0x390d33 = '';
            for (var _0x1a6017 = 0x0; _0x1a6017 < 0x7; _0x1a6017++) {
                _0x390d33 += _0x4ff8e1[_0x1a6017] == arr[_0x1a6017] ? '0' : '1';
            }
            console['log'](_0x390d33);
            arr = _0x4ff8e1['slice']();
        });
        if (Arr[i] == -0x1)
            break;
        seg = [];
        n = Arr[i];
    } else {
        n--;
        seg['push'](Arr[i]);
    }
}