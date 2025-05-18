var a0_0x46c6b2 = a0_0x5e1b;
var input = require('fs')[a0_0x46c6b2(0x0)](a0_0x46c6b2(0x1), 'utf8');
var [n, a, b, c] = input['trim']()[a0_0x46c6b2(0x2)]('\x20')[a0_0x46c6b2(0x3)](Number);
console[a0_0x46c6b2(0x4)](n - a - b + c);
function a0_0x5e1b(PwSCRa, key) {
    var stringArray = a0_0x4cc5();
    a0_0x5e1b = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5e1b(PwSCRa, key);
}
function a0_0x4cc5() {
    var _0x267564 = [
        'readFileSync',
        '/dev/stdin',
        'split',
        'map',
        'log'
    ];
    a0_0x4cc5 = function () {
        return _0x267564;
    };
    return a0_0x4cc5();
}