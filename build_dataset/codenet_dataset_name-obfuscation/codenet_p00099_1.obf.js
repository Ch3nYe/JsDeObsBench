var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
var nq = arr['shift']()['split']('\x20')['map'](Number);
var player = [];
var maxValue = 0x0;
var maxId = 0x0;
for (var i = 0x0; i < nq[0x0]; i++)
    player[i] = 0x0;
arr['forEach'](function (_0x320439) {
    var _0x2bc130 = _0x320439['split']('\x20')['map'](Number);
    var _0x2bbaba = _0x2bc130[0x0] - 0x1;
    var _0x2448d2 = _0x2bc130[0x1];
    player[_0x2bbaba] += _0x2448d2;
    if (_0x2bbaba == maxId && _0x2448d2 >= 0x0)
        maxValue += _0x2448d2;
    else if (maxValue == player[_0x2bbaba] && maxId > _0x2bbaba)
        maxId = _0x2bbaba;
    else if (maxValue < player[_0x2bbaba]) {
        maxValue = player[_0x2bbaba];
        maxId = _0x2bbaba;
    } else if (_0x2bbaba == maxId && _0x2448d2 < 0x0) {
        var _0x52d94a = -0x1 * Infinity;
        player['forEach'](function (_0xa5a4bd, _0xc49981) {
            if (_0x52d94a < _0xa5a4bd) {
                _0x52d94a = _0xa5a4bd;
                maxValue = _0xa5a4bd;
                maxId = _0xc49981;
            }
        });
    }
    console['log'](maxId + 0x1 + '\x20' + maxValue);
});