var a0_0x25eb1c = a0_0x65cf;
function a0_0x65cf(hTDsZN, key) {
    var stringArray = a0_0x3f69();
    a0_0x65cf = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x65cf(hTDsZN, key);
}
var input = require('fs')['readFileSync'](a0_0x25eb1c(0x0), a0_0x25eb1c(0x1));
var [a, b, c] = input[a0_0x25eb1c(0x2)]()[a0_0x25eb1c(0x3)]('\x20')[a0_0x25eb1c(0x4)](Number);
function a0_0x3f69() {
    var _0x2d3952 = [
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'map',
        'log',
        'min',
        'max'
    ];
    a0_0x3f69 = function () {
        return _0x2d3952;
    };
    return a0_0x3f69();
}
console[a0_0x25eb1c(0x5)](Math[a0_0x25eb1c(0x6)](a, b, c) + '\x20' + Math[a0_0x25eb1c(0x7)](a, b, c));