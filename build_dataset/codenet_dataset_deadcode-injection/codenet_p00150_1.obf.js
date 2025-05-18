var a0_0x1801c6 = a0_0x245c;
function prime(max) {
    var _0x3c2fd8 = a0_0x245c;
    var arr = [];
    for (var i = 0x0; i <= max; i++)
        arr[i] = i;
    arr[0x0] = ![];
    arr[0x1] = ![];
    var sqrt = Math[_0x3c2fd8(0x0)](Math[_0x3c2fd8(0x1)](max));
    for (var i = 0x2; i <= sqrt; i++) {
        if (arr[i] == ![])
            continue;
        for (var j = i + i; j <= max; j += i) {
            arr[j] = ![];
        }
    }
    var result = [];
    for (var i = 0x0; i <= max; i++) {
        if (arr[i] !== ![])
            result['push'](arr[i]);
    }
    return result;
}
var p = prime(0xf423f);
function a0_0x245c(kXDiey, key) {
    var stringArray = a0_0x2578();
    a0_0x245c = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x245c(kXDiey, key);
}
var input = require('fs')[a0_0x1801c6(0x2)]('/dev/stdin', a0_0x1801c6(0x3));
var Arr = input['trim']()[a0_0x1801c6(0x4)]('\x0a')['map'](Number);
for (var i = 0x0; i < Arr['length']; i++) {
    var a = Arr[i];
    if (a == 0x0)
        break;
    var twin = '';
    for (var j = 0x1; j < p['length']; j++) {
        if (p[j] > a)
            break;
        if (p[j] - p[j - 0x1] == 0x2)
            twin = p[j - 0x1] + '\x20' + p[j];
    }
    console[a0_0x1801c6(0x5)](twin);
}
function a0_0x2578() {
    var _0x54ecae = [
        'floor',
        'sqrt',
        'readFileSync',
        'utf8',
        'split',
        'log'
    ];
    a0_0x2578 = function () {
        return _0x54ecae;
    };
    return a0_0x2578();
}