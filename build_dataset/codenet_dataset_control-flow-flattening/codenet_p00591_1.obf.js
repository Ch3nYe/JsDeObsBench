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
    yx['forEach'](function (v, i) {
        var min = v['reduce'](function (a, b) {
            return Math['min'](a, b);
        });
        hand[i][v['indexOf'](min)][0x0] = 0x1;
    });
    xy['forEach'](function (v, i) {
        var max = v['reduce'](function (a, b) {
            return Math['max'](a, b);
        });
        hand[v['indexOf'](max)][i][0x1] = 0x1;
    });
    var ans = (function () {
        var bleGIn = {
            'Yqbhx': function (x, y) {
                return x < y;
            },
            'Kniuy': function (x, y) {
                return x == y;
            },
            'DMkVb': function (x, y) {
                return x == y;
            }
        };
        for (var i = 0x0; i < n; i++) {
            for (var j = 0x0; bleGIn['Yqbhx'](j, n); j++) {
                if (bleGIn['Kniuy'](hand[i][j][0x0], 0x1) && bleGIn['DMkVb'](hand[i][j][0x1], 0x1))
                    return yx[i][j];
            }
        }
        return 0x0;
    }());
    console['log'](ans);
}