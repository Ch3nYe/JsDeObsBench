var a0_0x57662b = a0_0x36ed;
function a0_0x36ed(jKBohM, key) {
    var stringArray = a0_0x20c3();
    a0_0x36ed = function (index, key) {
        index = index - 0x1c2;
        var value = stringArray[index];
        return value;
    };
    return a0_0x36ed(jKBohM, key);
}
function a0_0x20c3() {
    var _0x30af8a = [
        'utf8',
        '10LqEzos',
        'map',
        'length',
        'push',
        '54320sZqMGZ',
        'log',
        'shift',
        '220991pBnfcr',
        'readFileSync',
        '44dLAYxt',
        '48vurXGp',
        '6TooLLj',
        '/dev/stdin',
        '38937YZLydF',
        '794968pdBzBH',
        'trim',
        '334745DOREmw',
        'split',
        '3493827ADwhTo',
        '0\x200',
        '398618jVUxXI',
        'sort'
    ];
    a0_0x20c3 = function () {
        return _0x30af8a;
    };
    return a0_0x20c3();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x4f991c = a0_0x36ed;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x4f991c(0x1d6)) / 0x1 + parseInt(_0x4f991c(0x1c6)) / 0x2 + -parseInt(_0x4f991c(0x1c5)) / 0x3 * (parseInt(_0x4f991c(0x1d8)) / 0x4) + parseInt(_0x4f991c(0x1c8)) / 0x5 * (-parseInt(_0x4f991c(0x1c3)) / 0x6) + parseInt(_0x4f991c(0x1d3)) / 0x7 * (-parseInt(_0x4f991c(0x1c2)) / 0x8) + parseInt(_0x4f991c(0x1ca)) / 0x9 * (parseInt(_0x4f991c(0x1cf)) / 0xa) + -parseInt(_0x4f991c(0x1cc)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x20c3, 0x42734));
var input = require('fs')[a0_0x57662b(0x1d7)](a0_0x57662b(0x1c4), a0_0x57662b(0x1ce));
var Arr = input[a0_0x57662b(0x1c7)]()[a0_0x57662b(0x1c9)]('\x0a');
while (!![]) {
    var nm = Arr[a0_0x57662b(0x1d5)]();
    if (nm == a0_0x57662b(0x1cb))
        break;
    nm = nm[a0_0x57662b(0x1c9)]('\x20')[a0_0x57662b(0x1d0)](Number);
    var n = nm[0x0];
    var m = nm[0x1];
    var N = [];
    var M = [];
    for (var i = 0x0; i < n; i++)
        N[a0_0x57662b(0x1d2)](Arr[a0_0x57662b(0x1d5)]() - 0x0);
    for (var i = 0x0; i < m; i++)
        M[a0_0x57662b(0x1d2)](Arr[a0_0x57662b(0x1d5)]() - 0x0);
    var sumN = N['reduce'](function (a, b) {
        return a + b;
    });
    var sumM = M['reduce'](function (a, b) {
        return a + b;
    });
    var arr = [];
    for (var i = 0x0; i < n; i++) {
        for (var j = 0x0; j < m; j++) {
            var a = sumN - N[i] + M[j];
            var b = sumM + N[i] - M[j];
            if (a == b)
                arr[a0_0x57662b(0x1d2)]([
                    N[i] + M[j],
                    N[i],
                    M[j]
                ]);
        }
    }
    if (arr[a0_0x57662b(0x1d1)] == 0x0) {
        console[a0_0x57662b(0x1d4)](-0x1);
        continue;
    }
    arr[a0_0x57662b(0x1cd)](function (a, b) {
        return a[0x0] - b[0x0];
    });
    console['log'](arr[0x0][0x1] + '\x20' + arr[0x0][0x2]);
}