var a0_0x851348 = a0_0x33c3;
var input = require('fs')[a0_0x851348(0x0)](a0_0x851348(0x1), a0_0x851348(0x2));
var Arr = input[a0_0x851348(0x3)]()[a0_0x851348(0x4)]('\x0a');
var a = [
    0x0,
    0x0
];
var b = [
    0x0,
    0x0
];
var c = [
    0x0,
    0x0
];
var d = [
    0x0,
    0x0
];
for (var i = 0x0; i < Arr[a0_0x851348(0x5)]; i++) {
    var arr = Arr[i]['split']('\x20')[a0_0x851348(0x6)](Number);
    for (var j = 0x0; j < 0x2; j++) {
        if (arr[j] >= 1.1)
            a[j]++;
        else if (arr[j] >= 0.6)
            b[j]++;
        else if (arr[j] >= 0.2)
            c[j]++;
        else
            d[j]++;
    }
}
function a0_0x33c3(aHGNRT, key) {
    var stringArray = a0_0xe4e2();
    a0_0x33c3 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x33c3(aHGNRT, key);
}
console[a0_0x851348(0x7)](a[0x0] + '\x20' + a[0x1]);
console['log'](b[0x0] + '\x20' + b[0x1]);
console[a0_0x851348(0x7)](c[0x0] + '\x20' + c[0x1]);
function a0_0xe4e2() {
    var _0x14e986 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'length',
        'map',
        'log'
    ];
    a0_0xe4e2 = function () {
        return _0x14e986;
    };
    return a0_0xe4e2();
}
console[a0_0x851348(0x7)](d[0x0] + '\x20' + d[0x1]);