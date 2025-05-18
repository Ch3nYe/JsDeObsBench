'use strict';
var a0_0x57e435 = a0_0x54f1;
function a0_0x54f1(OFjezH, key) {
    var stringArray = a0_0x118c();
    a0_0x54f1 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x54f1(OFjezH, key);
}
function a0_0x118c() {
    var _0x2dd5b9 = [
        'split',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x118c = function () {
        return _0x2dd5b9;
    };
    return a0_0x118c();
}
function Main(input) {
    var _0x115ba4 = a0_0x54f1;
    input = input[_0x115ba4(0x0)]('\x0a');
    var input0 = input[0x0][_0x115ba4(0x0)]('\x20');
    var N = parseInt(input0[0x0]);
    var T = parseInt(input0[0x1]);
    var t = input[0x1][_0x115ba4(0x0)]('\x20');
    for (var i = 0x0; i < N; i++) {
        t[i] = parseInt(t[i]);
    }
    var count = 0x0;
    var t_i;
    for (var i = 0x1; i < N; i++) {
        t_i = t[i] - t[i - 0x1];
        if (t_i < T) {
            count += t_i;
        } else {
            count += T;
        }
    }
    console[_0x115ba4(0x1)](count + T);
}
Main(require('fs')[a0_0x57e435(0x2)](a0_0x57e435(0x3), a0_0x57e435(0x4)));