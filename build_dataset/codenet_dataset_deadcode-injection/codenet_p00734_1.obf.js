function a0_0x2fe9(FPaHuo, key) {
    var stringArray = a0_0x5bad();
    a0_0x2fe9 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2fe9(FPaHuo, key);
}
var a0_0x678911 = a0_0x2fe9;
var input = require('fs')[a0_0x678911(0x0)](a0_0x678911(0x1), 'utf8');
var Arr = input[a0_0x678911(0x2)]()['split']('\x0a');
function a0_0x5bad() {
    var _0x125b97 = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        '0\x200',
        'map',
        'push',
        'reduce',
        'length',
        'log',
        'sort'
    ];
    a0_0x5bad = function () {
        return _0x125b97;
    };
    return a0_0x5bad();
}
while (!![]) {
    var nm = Arr['shift']();
    if (nm == a0_0x678911(0x3))
        break;
    nm = nm['split']('\x20')[a0_0x678911(0x4)](Number);
    var n = nm[0x0];
    var m = nm[0x1];
    var N = [];
    var M = [];
    for (var i = 0x0; i < n; i++)
        N[a0_0x678911(0x5)](Arr['shift']() - 0x0);
    for (var i = 0x0; i < m; i++)
        M['push'](Arr['shift']() - 0x0);
    var sumN = N[a0_0x678911(0x6)](function (a, b) {
        return a + b;
    });
    var sumM = M[a0_0x678911(0x6)](function (a, b) {
        return a + b;
    });
    var arr = [];
    for (var i = 0x0; i < n; i++) {
        for (var j = 0x0; j < m; j++) {
            var a = sumN - N[i] + M[j];
            var b = sumM + N[i] - M[j];
            if (a == b)
                arr[a0_0x678911(0x5)]([
                    N[i] + M[j],
                    N[i],
                    M[j]
                ]);
        }
    }
    if (arr[a0_0x678911(0x7)] == 0x0) {
        console[a0_0x678911(0x8)](-0x1);
        continue;
    }
    arr[a0_0x678911(0x9)](function (a, b) {
        return a[0x0] - b[0x0];
    });
    console[a0_0x678911(0x8)](arr[0x0][0x1] + '\x20' + arr[0x0][0x2]);
}