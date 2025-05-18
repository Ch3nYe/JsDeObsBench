var a0_0x11dc0f = a0_0x34e7;
function a0_0x34e7(qEIKSw, key) {
    var stringArray = a0_0x1d74();
    a0_0x34e7 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x34e7(qEIKSw, key);
}
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x11dc0f(0x0));
function a0_0x1d74() {
    var _0x2aeefa = [
        'utf8',
        'trim',
        'split',
        'shift',
        'map',
        'Unknown',
        'length',
        'join',
        'log'
    ];
    a0_0x1d74 = function () {
        return _0x2aeefa;
    };
    return a0_0x1d74();
}
var arr = input[a0_0x11dc0f(0x1)]()[a0_0x11dc0f(0x2)]('\x0a');
while (!![]) {
    var [n, q] = arr[a0_0x11dc0f(0x3)]()['split']('\x20')[a0_0x11dc0f(0x4)](Number);
    if (n == 0x0 && q == 0x0)
        break;
    var g = [];
    for (var i = 0x0; i < n; i++) {
        var [e, ey, wy] = arr['shift']()['split']('\x20');
        [ey, wy] = [
            ey - 0x0,
            wy - 0x0
        ];
        g['push']([
            e,
            wy - ey,
            wy
        ]);
    }
    for (var i = 0x0; i < q; i++) {
        var n = arr['shift']() - 0x0;
        var ans = a0_0x11dc0f(0x5);
        for (var j = 0x0; j < g[a0_0x11dc0f(0x6)]; j++) {
            var a = g[j][0x1];
            var b = g[j][0x2];
            if (a < n && n <= b) {
                ans = [
                    g[j][0x0],
                    n - a
                ][a0_0x11dc0f(0x7)]('\x20');
            }
        }
        console[a0_0x11dc0f(0x8)](ans);
    }
}