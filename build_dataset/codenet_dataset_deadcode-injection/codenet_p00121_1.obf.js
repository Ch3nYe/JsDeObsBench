var a0_0x443644 = a0_0x3191;
function a0_0x3191(avAirH, key) {
    var stringArray = a0_0x3004();
    a0_0x3191 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3191(avAirH, key);
}
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x443644(0x0));
function a0_0x3004() {
    var _0x318e66 = [
        'utf8',
        'trim',
        'split',
        'forEach',
        'map',
        'length',
        'shift',
        'join',
        '01234567',
        'indexOf',
        'floor',
        'slice',
        'hasOwnProperty'
    ];
    a0_0x3004 = function () {
        return _0x318e66;
    };
    return a0_0x3004();
}
var Arr = input[a0_0x443644(0x1)]()[a0_0x443644(0x2)]('\x0a');
var dy = [
    -0x1,
    0x0,
    0x0,
    0x1
];
var dx = [
    0x0,
    -0x1,
    0x1,
    0x0
];
Arr[a0_0x443644(0x3)](function (v, I) {
    var _0x23d9ba = a0_0x3191;
    var V = v[_0x23d9ba(0x2)]('\x20')[_0x23d9ba(0x4)](Number);
    var obj = {};
    var P = [[
            V,
            0x0
        ]];
    while (P[_0x23d9ba(0x5)] > 0x0) {
        var A = P[_0x23d9ba(0x6)]();
        var arr = A[0x0];
        var cnt = A[0x1];
        if (arr[_0x23d9ba(0x7)]('') == _0x23d9ba(0x8)) {
            console['log'](cnt);
            break;
        }
        var index = arr[_0x23d9ba(0x9)](0x0);
        var y = Math[_0x23d9ba(0xa)](index / 0x4);
        var x = index % 0x4;
        var yx = [
            arr[_0x23d9ba(0xb)](0x0, 0x4),
            arr[_0x23d9ba(0xb)](0x4, 0x8)
        ];
        for (var i = 0x0; i < 0x4; i++) {
            var yy = y + dy[i];
            var xx = x + dx[i];
            if (yy < 0x0 || xx < 0x0 || yy >= 0x2 || xx >= 0x4)
                continue;
            yx[y][x] = yx[yy][xx];
            var card = yx[yy][xx];
            yx[yy][xx] = 0x0;
            var YX = yx[0x0]['concat'](yx[0x1]);
            var str = YX['join']('');
            if (obj[_0x23d9ba(0xc)](str) == ![]) {
                obj[str] = !![];
                P['push']([
                    YX,
                    cnt + 0x1
                ]);
            }
            yx[yy][xx] = card;
            yx[y][x] = 0x0;
        }
    }
});