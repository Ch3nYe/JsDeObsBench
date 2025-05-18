var a0_0x4f373c = a0_0x2465;
(function (stringArrayFunction, comparisonValue) {
    var _0x228a2a = a0_0x2465;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x228a2a(0x1a2)) / 0x1 + -parseInt(_0x228a2a(0x1a3)) / 0x2 * (-parseInt(_0x228a2a(0x1a5)) / 0x3) + parseInt(_0x228a2a(0x1aa)) / 0x4 * (parseInt(_0x228a2a(0x19b)) / 0x5) + parseInt(_0x228a2a(0x1a7)) / 0x6 + parseInt(_0x228a2a(0x1a9)) / 0x7 + parseInt(_0x228a2a(0x1a4)) / 0x8 + -parseInt(_0x228a2a(0x1a8)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x588b, 0x33950));
var input = require('fs')[a0_0x4f373c(0x19f)](a0_0x4f373c(0x19a), a0_0x4f373c(0x1ab));
var arr = input[a0_0x4f373c(0x1a0)]()[a0_0x4f373c(0x19e)]('\x0a');
var n = arr[a0_0x4f373c(0x19d)]() - 0x0;
function a0_0x588b() {
    var _0x3ef403 = [
        'max',
        '324605ykpDuf',
        '353594grmOXd',
        '265808tdfsek',
        '6uxreLP',
        'map',
        '2180070ZvZyrK',
        '5724711ydvwuH',
        '2158184MqrdrB',
        '41268EhovGr',
        'utf8',
        'min',
        '/dev/stdin',
        '55GcqOsy',
        'log',
        'shift',
        'split',
        'readFileSync',
        'trim'
    ];
    a0_0x588b = function () {
        return _0x3ef403;
    };
    return a0_0x588b();
}
function a0_0x2465(MlWLQB, key) {
    var stringArray = a0_0x588b();
    a0_0x2465 = function (index, key) {
        index = index - 0x19a;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2465(MlWLQB, key);
}
var a = arr[a0_0x4f373c(0x19d)]()[a0_0x4f373c(0x19e)]('\x20')[a0_0x4f373c(0x1a6)](Number);
var q = arr[a0_0x4f373c(0x19d)]() - 0x0;
var s = '';
for (var i = 0x0; i < q; i++) {
    var [c, b, e] = arr[i][a0_0x4f373c(0x19e)]('\x20')['map'](Number);
    var m = a[b];
    if (c == 0x0) {
        for (var j = b; j < e; j++)
            m = Math[a0_0x4f373c(0x1ac)](m, a[j]);
    } else {
        for (var j = b; j < e; j++)
            m = Math[a0_0x4f373c(0x1a1)](m, a[j]);
    }
    s += m + '\x0a';
}
console[a0_0x4f373c(0x19c)](s[a0_0x4f373c(0x1a0)]());