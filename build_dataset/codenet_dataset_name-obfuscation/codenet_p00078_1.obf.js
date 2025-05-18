function bomb(_0x5b7cfc, _0x5c33e7) {
    if (N == max)
        return;
    if (_0x5c33e7 < 0x0)
        _0x5c33e7 = n - 0x1;
    if (_0x5b7cfc < 0x0)
        _0x5b7cfc = n - 0x1;
    if (_0x5c33e7 >= n)
        _0x5c33e7 = 0x0;
    if (_0x5b7cfc >= n)
        _0x5b7cfc = 0x0;
    if (yx[_0x5b7cfc][_0x5c33e7] != -0x1) {
        bomb(_0x5b7cfc + 0x1, _0x5c33e7 - 0x1);
    } else {
        yx[_0x5b7cfc][_0x5c33e7] = ('\x20\x20\x20' + N)['slice'](-0x4);
        N++;
        bomb(_0x5b7cfc + 0x1, _0x5c33e7 + 0x1);
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a')['map'](Number);
for (var i = 0x0; i < Arr['length']; i++) {
    var n = Arr[i];
    var max = n * n + 0x1;
    if (n == 0x0)
        break;
    var yx = [];
    for (var j = 0x0; j < n; j++) {
        yx[j] = [];
        for (var k = 0x0; k < n; k++) {
            yx[j][k] = -0x1;
        }
    }
    var N = 0x1;
    bomb(Math['floor'](n / 0x2) + 0x1, Math['floor'](n / 0x2));
    console['log'](yx['join']('\x0a')['replace'](/\,/g, ''));
}