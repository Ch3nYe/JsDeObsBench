'use strict';
var a0_0x64b7a1 = a0_0x5bfc;
function a0_0x5bfc(EShGcP, key) {
    var stringArray = a0_0x2e43();
    a0_0x5bfc = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5bfc(EShGcP, key);
}
function a0_0x2e43() {
    var _0x3c477 = [
        'log',
        'toFixed',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2e43 = function () {
        return _0x3c477;
    };
    return a0_0x2e43();
}
function Main(input) {
    var _0x2d8da6 = a0_0x5bfc;
    input = input['split']('\x0a');
    var volume = input / 0x3 * input / 0x3 * input / 0x3;
    console[_0x2d8da6(0x0)](volume[_0x2d8da6(0x1)](0xc));
}
Main(require('fs')['readFileSync'](a0_0x64b7a1(0x2), a0_0x64b7a1(0x3)));