var a0_0x160c11 = a0_0x4b86;
function a0_0x4b86(VAqyUo, key) {
    var stringArray = a0_0x3167();
    a0_0x4b86 = function (index, key) {
        index = index - 0x115;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4b86(VAqyUo, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x57dfb7 = a0_0x4b86;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x57dfb7(0x11f)) / 0x1 * (-parseInt(_0x57dfb7(0x11d)) / 0x2) + parseInt(_0x57dfb7(0x124)) / 0x3 * (parseInt(_0x57dfb7(0x118)) / 0x4) + parseInt(_0x57dfb7(0x128)) / 0x5 + parseInt(_0x57dfb7(0x127)) / 0x6 * (parseInt(_0x57dfb7(0x11e)) / 0x7) + parseInt(_0x57dfb7(0x116)) / 0x8 * (parseInt(_0x57dfb7(0x125)) / 0x9) + parseInt(_0x57dfb7(0x11b)) / 0xa * (parseInt(_0x57dfb7(0x119)) / 0xb) + -parseInt(_0x57dfb7(0x11a)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3167, 0xbab8e));
var input = require('fs')[a0_0x160c11(0x115)](a0_0x160c11(0x121), a0_0x160c11(0x11c));
var arr = input[a0_0x160c11(0x126)]()[a0_0x160c11(0x120)]('\x0a');
var n = arr[a0_0x160c11(0x117)]() - 0x0;
var a = arr[a0_0x160c11(0x117)]()['split']('\x20')['map'](Number);
var q = arr[a0_0x160c11(0x117)]() - 0x0;
for (var i = 0x0; i < q; i++) {
    var [b, e, t] = arr[i][a0_0x160c11(0x120)]('\x20')[a0_0x160c11(0x129)](Number);
    var k = e - b;
    for (var j = 0x0; j < k; j++) {
        [a[b + j], a[t + j]] = [
            a[t + j],
            a[b + j]
        ];
    }
}
console[a0_0x160c11(0x122)](a[a0_0x160c11(0x123)]('\x20'));
function a0_0x3167() {
    var _0x2d74c2 = [
        '6VCIpYK',
        '864245BqFyld',
        'map',
        'readFileSync',
        '16yAEkbi',
        'shift',
        '615460uRbGHZ',
        '253SZgHLc',
        '17761380cAwHDX',
        '282870GgywDI',
        'utf8',
        '53386NyoqQO',
        '6953247GoZpbv',
        '3AlwXeS',
        'split',
        '/dev/stdin',
        'log',
        'join',
        '3zbXqFe',
        '873963snZcLI',
        'trim'
    ];
    a0_0x3167 = function () {
        return _0x2d74c2;
    };
    return a0_0x3167();
}