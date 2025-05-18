var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var nww = [];
    for (var i = 0x0; i < n; i++)
        nww[i] = arr['shift']()['split']('\x20');
    nww = nww['map'](_0x13ea8b => [
        _0x13ea8b[0x0],
        _0x13ea8b[0x1] - 0x0,
        _0x13ea8b[0x2] - 0x0
    ]);
    var max = 0x0;
    var ans = [];
    var bomb = function (_0x3b7e1a, _0x41e5de, _0x42eda1, _0x1c4948) {
        if (_0x41e5de['length'] == 0x0) {
            if (max < _0x1c4948 / _0x42eda1) {
                ans = _0x3b7e1a;
                max = _0x1c4948 / _0x42eda1;
            }
            return;
        }
        _0x41e5de['forEach'](_0x3d9de5 => {
            if (_0x42eda1 <= nww[_0x3d9de5][0x2]) {
                var _0x36dafa = _0x3b7e1a['concat'](_0x3d9de5);
                var _0x20f38a = _0x41e5de['slice']()['filter'](_0x4caa8a => _0x3d9de5 != _0x4caa8a);
                var _0x26430a = _0x42eda1 + nww[_0x3d9de5][0x1];
                var _0x4f3581 = _0x1c4948 + nww[_0x3d9de5][0x1] * (_0x3b7e1a['length'] + 0x1);
                bomb(_0x36dafa, _0x20f38a, _0x26430a, _0x4f3581);
            }
        });
    };
    var bombArr = [];
    for (var i = 0x0; i < n; i++)
        bombArr['push'](i);
    bomb([], bombArr, 0x0, 0x0);
    console['log'](ans['map'](_0x300614 => nww[_0x300614][0x0])['reverse']()['join']('\x0a'));
}