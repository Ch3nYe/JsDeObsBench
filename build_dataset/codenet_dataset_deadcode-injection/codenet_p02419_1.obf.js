'use strict';
var a0_0x23b49c = a0_0x44b9;
function a0_0x44b9(VSCQwY, key) {
    var stringArray = a0_0x4c2f();
    a0_0x44b9 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x44b9(VSCQwY, key);
}
function a0_0x4c2f() {
    var _0x4eeb23 = [
        'toString',
        'split',
        'filter',
        'length',
        'toLowerCase',
        'join',
        'END_OF_TEXT',
        'trim',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4c2f = function () {
        return _0x4eeb23;
    };
    return a0_0x4c2f();
}
(function (stdin) {
    var _0x5bf66c = a0_0x44b9;
    var lines = stdin[_0x5bf66c(0x0)]()[_0x5bf66c(0x1)]('\x0a');
    var result = function (word, data) {
        var _0x5982ec = a0_0x44b9;
        return data[_0x5982ec(0x2)](function (v) {
            return v === word;
        })[_0x5982ec(0x3)];
    }(lines['shift']()[_0x5bf66c(0x4)](), lines[_0x5bf66c(0x5)]('')[_0x5bf66c(0x1)](_0x5bf66c(0x6))[0x0][_0x5bf66c(0x4)]()[_0x5bf66c(0x7)]()[_0x5bf66c(0x1)]('\x20'));
    console[_0x5bf66c(0x8)](result);
}(require('fs')[a0_0x23b49c(0x9)](a0_0x23b49c(0xa), a0_0x23b49c(0xb))));