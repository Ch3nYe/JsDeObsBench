var a0_0x55ba52 = a0_0x578c;
var input = require('fs')[a0_0x55ba52(0x0)]('/dev/stdin', a0_0x55ba52(0x1));
var arr = input['trim']()[a0_0x55ba52(0x2)]('\x0a');
while (!![]) {
    var n = arr[a0_0x55ba52(0x3)]() - 0x0;
    if (n == 0x0)
        break;
    var yx = [];
    for (var i = 0x0; i < n; i++)
        yx[a0_0x55ba52(0x4)](arr[a0_0x55ba52(0x3)]()[a0_0x55ba52(0x2)]('\x20')[a0_0x55ba52(0x5)](Number));
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
    yx[a0_0x55ba52(0x6)](function (v, i) {
        var _0x3ebc0 = a0_0x578c;
        var min = v[_0x3ebc0(0x7)](function (a, b) {
            var _0x57b084 = a0_0x578c;
            return Math[_0x57b084(0x8)](a, b);
        });
        hand[i][v[_0x3ebc0(0x9)](min)][0x0] = 0x1;
    });
    xy[a0_0x55ba52(0x6)](function (v, i) {
        var _0x48ac6c = a0_0x578c;
        var max = v[_0x48ac6c(0x7)](function (a, b) {
            var _0x12cc24 = a0_0x578c;
            return Math[_0x12cc24(0xa)](a, b);
        });
        hand[v[_0x48ac6c(0x9)](max)][i][0x1] = 0x1;
    });
    var ans = (function () {
        var _0x294a78 = a0_0x578c;
        for (var i = 0x0; i < n; i++) {
            if (_0x294a78(0xb) !== _0x294a78(0xc)) {
                for (var j = 0x0; j < n; j++) {
                    if (hand[i][j][0x0] == 0x1 && hand[i][j][0x1] == 0x1)
                        return yx[i][j];
                }
            } else {
                for (var i = 0x0; i < n; i++) {
                    for (var j = 0x0; j < n; j++) {
                        if (hand[i][j][0x0] == 0x1 && hand[i][j][0x1] == 0x1)
                            return yx[i][j];
                    }
                }
                return 0x0;
            }
        }
        return 0x0;
    }());
    console[a0_0x55ba52(0xd)](ans);
}
function a0_0x578c(UiXTAq, key) {
    var stringArray = a0_0x121e();
    a0_0x578c = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x578c(UiXTAq, key);
}
function a0_0x121e() {
    var _0x54c00f = [
        'readFileSync',
        'utf8',
        'split',
        'shift',
        'push',
        'map',
        'forEach',
        'reduce',
        'min',
        'indexOf',
        'max',
        'eeMFr',
        'HkDBl',
        'log'
    ];
    a0_0x121e = function () {
        return _0x54c00f;
    };
    return a0_0x121e();
}