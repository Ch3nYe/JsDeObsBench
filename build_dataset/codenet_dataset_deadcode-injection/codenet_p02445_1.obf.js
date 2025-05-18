var a0_0x3854db = a0_0x3161;
function a0_0x3161(QWRtpV, key) {
    var stringArray = a0_0x243d();
    a0_0x3161 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3161(QWRtpV, key);
}
var input = require('fs')[a0_0x3854db(0x0)](a0_0x3854db(0x1), a0_0x3854db(0x2));
var arr = input[a0_0x3854db(0x3)]()['split']('\x0a');
var n = arr[a0_0x3854db(0x4)]() - 0x0;
var a = arr[a0_0x3854db(0x4)]()[a0_0x3854db(0x5)]('\x20')[a0_0x3854db(0x6)](Number);
var q = arr[a0_0x3854db(0x4)]() - 0x0;
for (var i = 0x0; i < q; i++) {
    var [b, e, t] = arr[i][a0_0x3854db(0x5)]('\x20')[a0_0x3854db(0x6)](Number);
    var k = e - b;
    for (var j = 0x0; j < k; j++) {
        [a[b + j], a[t + j]] = [
            a[t + j],
            a[b + j]
        ];
    }
}
console[a0_0x3854db(0x7)](a[a0_0x3854db(0x8)]('\x20'));
function a0_0x243d() {
    var _0x35aac0 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'shift',
        'split',
        'map',
        'log',
        'join'
    ];
    a0_0x243d = function () {
        return _0x35aac0;
    };
    return a0_0x243d();
}