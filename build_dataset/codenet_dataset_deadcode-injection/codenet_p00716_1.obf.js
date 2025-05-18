var a0_0x238e78 = a0_0x577a;
function a0_0x577a(IbPDNY, key) {
    var stringArray = a0_0x4926();
    a0_0x577a = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x577a(IbPDNY, key);
}
function a0_0x4926() {
    var _0x311588 = [
        '/dev/stdin',
        'trim',
        'split',
        'shift',
        'push',
        'log',
        'max',
        'apply'
    ];
    a0_0x4926 = function () {
        return _0x311588;
    };
    return a0_0x4926();
}
function F1(m, b, c) {
    var sum = 0x0;
    for (var i = 0x0; i < Y; i++) {
        sum += Math['floor'](m * b);
        m -= c;
    }
    return m + sum;
}
function F2(m, b, c) {
    for (var i = 0x0; i < Y; i++) {
        m += Math['floor'](m * b) - c;
    }
    return m;
}
var input = require('fs')['readFileSync'](a0_0x238e78(0x0), 'utf8');
var Arr = input[a0_0x238e78(0x1)]()[a0_0x238e78(0x2)]('\x0a');
var M = Arr[a0_0x238e78(0x3)]() - 0x0;
for (var i = 0x0; i < M; i++) {
    var money = Arr[a0_0x238e78(0x3)]() - 0x0;
    var Y = Arr['shift']() - 0x0;
    var N = Arr[a0_0x238e78(0x3)]() - 0x0;
    var arr = [];
    for (var j = 0x0; j < N; j++) {
        var D = Arr[a0_0x238e78(0x3)]()[a0_0x238e78(0x2)]('\x20')['map'](Number);
        if (D[0x0] == 0x0)
            arr[a0_0x238e78(0x4)](F1(money, D[0x1], D[0x2]));
        if (D[0x0] == 0x1)
            arr[a0_0x238e78(0x4)](F2(money, D[0x1], D[0x2]));
    }
    console[a0_0x238e78(0x5)](Math[a0_0x238e78(0x6)][a0_0x238e78(0x7)](null, arr));
}