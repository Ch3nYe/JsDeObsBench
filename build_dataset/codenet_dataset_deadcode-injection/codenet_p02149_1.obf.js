var a0_0x5dc02d = a0_0x1d84;
var input = require('fs')['readFileSync'](a0_0x5dc02d(0x0), 'utf8');
var arr = input[a0_0x5dc02d(0x1)]()[a0_0x5dc02d(0x2)]('\x20')['map'](Number);
function a0_0x1d84(xvhMmS, key) {
    var stringArray = a0_0x4c92();
    a0_0x1d84 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1d84(xvhMmS, key);
}
var max = Math['max'](...arr);
console[a0_0x5dc02d(0x3)]([
    'A',
    'B',
    'C'
][arr['indexOf'](max)]);
function a0_0x4c92() {
    var _0x1ece48 = [
        '/dev/stdin',
        'trim',
        'split',
        'log'
    ];
    a0_0x4c92 = function () {
        return _0x1ece48;
    };
    return a0_0x4c92();
}