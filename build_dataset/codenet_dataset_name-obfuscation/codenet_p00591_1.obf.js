var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var yx = [];
    for (var i = 0x0; i < n; i++)
        yx['push'](arr['shift']()['split']('\x20')['map'](Number));
    var xy = [];
    var hand = [];
    for (var i = 0x0; i < n; i++) {
        xy[i] = [];
        hand[i] = [];
        for (var j = 0x0; j < n; j++) {
            xy[i][j] = yx[j][i];
            hand[i][j] = [
                0x0,
                0x0
            ];
        }
    }
    yx['forEach'](function (_0x1b08dd, _0x4ddd7d) {
        var _0x8c4774 = _0x1b08dd['reduce'](function (_0x46d9ab, _0x6753b3) {
            return Math['min'](_0x46d9ab, _0x6753b3);
        });
        hand[_0x4ddd7d][_0x1b08dd['indexOf'](_0x8c4774)][0x0] = 0x1;
    });
    xy['forEach'](function (_0x2b5440, _0x4e6532) {
        var _0x1da235 = _0x2b5440['reduce'](function (_0xceb445, _0x5a0f2e) {
            return Math['max'](_0xceb445, _0x5a0f2e);
        });
        hand[_0x2b5440['indexOf'](_0x1da235)][_0x4e6532][0x1] = 0x1;
    });
    var ans = (function () {
        for (var _0x4c1a22 = 0x0; _0x4c1a22 < n; _0x4c1a22++) {
            for (var _0x5a4e83 = 0x0; _0x5a4e83 < n; _0x5a4e83++) {
                if (hand[_0x4c1a22][_0x5a4e83][0x0] == 0x1 && hand[_0x4c1a22][_0x5a4e83][0x1] == 0x1)
                    return yx[_0x4c1a22][_0x5a4e83];
            }
        }
        return 0x0;
    }());
    console['log'](ans);
}