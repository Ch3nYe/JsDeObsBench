var a0_0x51f354 = a0_0x2e7d;
function a0_0x5503() {
    var _0x41722e = [
        '5027885XZJsER',
        '650DEMTVC',
        'indexOf',
        'max',
        'utf8',
        '120015jMGjZz',
        'split',
        'readFileSync',
        '670584YXFWUl',
        'forEach',
        '2mRHWbx',
        '6091158YPxgpQ',
        '97966NgwIRw',
        'min',
        '102185IZqQQL',
        '272QUBzMI',
        '4OpZKpP',
        'push',
        '6493095zjUviD',
        'shift',
        'reduce'
    ];
    a0_0x5503 = function () {
        return _0x41722e;
    };
    return a0_0x5503();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x469b58 = a0_0x2e7d;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x469b58(0x1ef)) / 0x1 + parseInt(_0x469b58(0x1eb)) / 0x2 * (parseInt(_0x469b58(0x1e9)) / 0x3) + -parseInt(_0x469b58(0x1f1)) / 0x4 * (-parseInt(_0x469b58(0x1f6)) / 0x5) + -parseInt(_0x469b58(0x1ec)) / 0x6 + -parseInt(_0x469b58(0x1fb)) / 0x7 * (-parseInt(_0x469b58(0x1f0)) / 0x8) + -parseInt(_0x469b58(0x1f3)) / 0x9 + -parseInt(_0x469b58(0x1f7)) / 0xa * (-parseInt(_0x469b58(0x1ed)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5503, 0xb8aee));
var input = require('fs')[a0_0x51f354(0x1e8)]('/dev/stdin', a0_0x51f354(0x1fa));
function a0_0x2e7d(liprqY, key) {
    var stringArray = a0_0x5503();
    a0_0x2e7d = function (index, key) {
        index = index - 0x1e8;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2e7d(liprqY, key);
}
var arr = input['trim']()[a0_0x51f354(0x1fc)]('\x0a');
while (!![]) {
    var n = arr[a0_0x51f354(0x1f4)]() - 0x0;
    if (n == 0x0)
        break;
    var yx = [];
    for (var i = 0x0; i < n; i++)
        yx[a0_0x51f354(0x1f2)](arr[a0_0x51f354(0x1f4)]()[a0_0x51f354(0x1fc)]('\x20')['map'](Number));
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
    yx[a0_0x51f354(0x1ea)](function (v, i) {
        var _0x4ac7a5 = a0_0x51f354;
        var min = v['reduce'](function (a, b) {
            var _0x187b9d = a0_0x2e7d;
            return Math[_0x187b9d(0x1ee)](a, b);
        });
        hand[i][v[_0x4ac7a5(0x1f8)](min)][0x0] = 0x1;
    });
    xy[a0_0x51f354(0x1ea)](function (v, i) {
        var _0x3d87c8 = a0_0x51f354;
        var max = v[_0x3d87c8(0x1f5)](function (a, b) {
            var _0x4876e6 = _0x3d87c8;
            return Math[_0x4876e6(0x1f9)](a, b);
        });
        hand[v[_0x3d87c8(0x1f8)](max)][i][0x1] = 0x1;
    });
    var ans = (function () {
        for (var i = 0x0; i < n; i++) {
            for (var j = 0x0; j < n; j++) {
                if (hand[i][j][0x0] == 0x1 && hand[i][j][0x1] == 0x1)
                    return yx[i][j];
            }
        }
        return 0x0;
    }());
    console['log'](ans);
}