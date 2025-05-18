function count(y, x) {
    var VDewAd = {
        'RrNpq': function (x, y) {
            return x < y;
        },
        'rGUmk': function (x, y) {
            return x + y;
        },
        'jXeyb': function (x, y) {
            return x * y;
        },
        'VVBhN': function (x, y) {
            return x + y;
        },
        'jWGWq': function (x, y) {
            return x * y;
        },
        'ZXVQh': function (x, y) {
            return x < y;
        },
        'eDoMC': function (x, y) {
            return x < y;
        },
        'xediH': function (x, y) {
            return x >= y;
        },
        'YyZGC': function (x, y) {
            return x >= y;
        },
        'kHjiJ': function (x, y) {
            return x != y;
        }
    };
    var dy = [
        0x0,
        0x1,
        0x1,
        0x1
    ];
    var dx = [
        0x1,
        -0x1,
        0x0,
        0x1
    ];
    var max = 0x1;
    for (var i = 0x0; VDewAd['RrNpq'](i, 0x4); i++) {
        var cnt = 0x1;
        for (var j = 0x1; j <= n; j++) {
            var yy = VDewAd['rGUmk'](y, VDewAd['jXeyb'](dy[i], j));
            var xx = VDewAd['VVBhN'](x, VDewAd['jWGWq'](dx[i], j));
            if (VDewAd['ZXVQh'](yy, 0x0) || VDewAd['eDoMC'](xx, 0x0) || VDewAd['xediH'](yy, n) || VDewAd['YyZGC'](xx, n))
                break;
            if (VDewAd['kHjiJ'](yx[yy][xx], 0x1))
                break;
            cnt++;
        }
        max = Math['max'](max, cnt);
        cnt = 0x1;
    }
    return max;
}
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var Arr = input['trim']()['split']('\x0a');
while (!![]) {
    var n = Arr['shift']() - 0x0;
    if (n == 0x0)
        break;
    var yx = [];
    for (var i = 0x0; i < n; i++) {
        yx[i] = Arr['shift']()['split']('')['map'](Number);
    }
    var max = 0x0;
    for (var i = 0x0; i < n; i++) {
        for (var j = 0x0; j < n; j++) {
            if (yx[i][j] == 0x1)
                max = Math['max'](max, count(i, j));
        }
    }
    console['log'](max);
}