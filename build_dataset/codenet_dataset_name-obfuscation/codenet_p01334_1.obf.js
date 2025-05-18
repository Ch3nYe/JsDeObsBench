function bomb(_0x302532, _0x130163) {
    var _0x5cf629 = yx[_0x302532][_0x130163][0x1];
    var _0x3363f4 = yx[_0x302532][_0x130163][0x0];
    if (ring['hasOwnProperty'](_0x5cf629 + ',' + _0x3363f4)) {
        var _0x2d1fb2 = !![];
        for (var _0x4bb070 in ring) {
            if (obj['hasOwnProperty'](_0x4bb070))
                _0x2d1fb2 = ![];
            obj[_0x4bb070] = !![];
        }
        if (_0x2d1fb2)
            cnt++;
    } else {
        ring[_0x5cf629 + ',' + _0x3363f4] = !![];
        bomb(_0x5cf629, _0x3363f4);
    }
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var yx = [];
    for (var i = 0x0; i < n; i++) {
        var tile = arr['shift']()['split']('\x20')['map'](Number);
        var t = [];
        for (var j = 0x0; j < n; j++)
            t[j] = [
                tile['shift'](),
                tile['shift']()
            ];
        yx['push'](t);
    }
    var obj = {};
    var cnt = 0x0;
    for (var i = 0x0; i < n; i++) {
        for (var j = 0x0; j < n; j++) {
            if (obj['hasOwnProperty'](i + ',' + j))
                continue;
            var ring = {};
            ring[i + ',' + j] = !![];
            bomb(i, j);
        }
    }
    console['log'](cnt);
}