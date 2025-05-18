function bomb(_0x413940, _0x4bf629) {
    if (yx[_0x413940][_0x4bf629] == 0x1)
        return;
    else if (yx[_0x413940][_0x4bf629] == 0x2) {
        var _0x4978e0 = _0x413940 + 0x2;
        var _0x233a48 = _0x4bf629;
        if (_0x4978e0 >= h) {
            cnt++;
            return;
        }
        bomb(_0x4978e0, _0x233a48);
    } else if (yx[_0x413940][_0x4bf629] == 0x0) {
        var _0x28e324 = [
            -0x1,
            0x0,
            0x1
        ];
        for (var _0x12a622 = 0x0; _0x12a622 < _0x28e324['length']; _0x12a622++) {
            var _0x4978e0 = _0x413940 + 0x1;
            var _0x233a48 = _0x4bf629 + _0x28e324[_0x12a622];
            if (_0x233a48 < 0x0 || _0x233a48 >= w)
                continue;
            if (_0x4978e0 >= h) {
                cnt++;
                return;
            }
            if (yx[_0x4978e0][_0x233a48] == 0x2 && _0x28e324[_0x12a622] != 0x0)
                continue;
            bomb(_0x4978e0, _0x233a48);
        }
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var wh = arr['shift']()['split']('\x20')['map'](Number);
    var w = wh[0x0];
    var h = wh[0x1];
    if (w == 0x0 && h == 0x0)
        break;
    var yx = [];
    for (var i = 0x0; i < h; i++)
        yx['push'](arr['shift']()['split']('\x20')['map'](Number));
    var cnt = 0x0;
    for (var i = 0x0; i < w; i++) {
        bomb(0x0, i);
    }
    console['log'](cnt);
}