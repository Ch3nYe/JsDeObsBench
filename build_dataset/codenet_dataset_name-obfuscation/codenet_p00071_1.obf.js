function bomb(_0x448196, _0x3bb846) {
    var _0x3696a6 = [
        -0x1,
        0x1,
        0x0,
        0x0
    ];
    var _0x20b5eb = [
        0x0,
        0x0,
        -0x1,
        0x1
    ];
    for (var _0x80ecb9 = 0x0; _0x80ecb9 < 0x4; _0x80ecb9++) {
        for (var _0x4d663b = 0x1; _0x4d663b <= 0x3; _0x4d663b++) {
            var _0x461d80 = _0x448196 + _0x20b5eb[_0x80ecb9] * _0x4d663b;
            var _0x35d776 = _0x3bb846 + _0x3696a6[_0x80ecb9] * _0x4d663b;
            if (_0x461d80 < 0x0 || _0x461d80 >= 0x8 || _0x35d776 < 0x0 || _0x35d776 >= 0x8)
                continue;
            if (yx[_0x461d80][_0x35d776] == 0x1) {
                yx[_0x461d80][_0x35d776] = 0x0;
                bomb(_0x461d80, _0x35d776);
            }
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
var AL = Arr['shift']();
for (var i = 0x0; i < AL; i++) {
    Arr['shift']();
    var yx = [];
    for (var j = 0x0; j < 0x8; j++) {
        var line = Arr['shift']()['split']('')['map'](Number);
        yx['push'](line);
    }
    var X = Arr['shift']() - 0x0 - 0x1;
    var Y = Arr['shift']() - 0x0 - 0x1;
    if (yx[Y][X] == 0x1) {
        yx[Y][X] = 0x0;
        bomb(Y, X);
    }
    console['log']('Data\x20' + (i + 0x1) + ':');
    for (var j = 0x0; j < 0x8; j++)
        console['log'](yx[j]['join'](''));
}