function a0_0x5a27() {
    var _0x30905d = [
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'shift',
        'slice',
        'forEach',
        'length',
        'keys',
        'hasOwnProperty'
    ];
    a0_0x5a27 = function () {
        return _0x30905d;
    };
    return a0_0x5a27();
}
var a0_0x52e4f2 = a0_0x5eef;
var input = require('fs')[a0_0x52e4f2(0x0)]('/dev/stdin', a0_0x52e4f2(0x1));
function a0_0x5eef(DcgJxr, key) {
    var stringArray = a0_0x5a27();
    a0_0x5eef = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5eef(DcgJxr, key);
}
var Arr = input[a0_0x52e4f2(0x2)]()[a0_0x52e4f2(0x3)]('\x0a');
while (!![]) {
    var n = Arr[a0_0x52e4f2(0x4)]() - 0x0;
    if (n == 0x0)
        break;
    var first = Arr[a0_0x52e4f2(0x4)]()['split'](':');
    first = first[0x1][a0_0x52e4f2(0x5)](0x0, -0x1)[a0_0x52e4f2(0x3)](',');
    var F = {};
    first[a0_0x52e4f2(0x6)](function (v) {
        F[v] = !![];
    });
    var obj = {};
    for (var i = 0x0; i < n - 0x1; i++) {
        var arr = Arr['shift']()[a0_0x52e4f2(0x3)](':');
        obj[arr[0x0]] = arr[0x1][a0_0x52e4f2(0x5)](0x0, -0x1)['split'](',');
    }
    var L = 0x0;
    while (!![]) {
        if (L == Object['keys'](F)[a0_0x52e4f2(0x7)])
            break;
        L = Object[a0_0x52e4f2(0x8)](F)['length'];
        for (var k in F) {
            if (obj[a0_0x52e4f2(0x9)](k) && F[k]) {
                obj[k][a0_0x52e4f2(0x6)](function (v) {
                    F[v] = !![];
                });
                F[k] = ![];
            }
        }
    }
    var cnt = 0x0;
    for (var k in F)
        if (obj['hasOwnProperty'](k) == ![])
            cnt++;
    console['log'](cnt);
}