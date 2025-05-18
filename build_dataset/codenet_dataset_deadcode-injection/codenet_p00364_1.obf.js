function a0_0x15a0(jhepAP, key) {
    var stringArray = a0_0x3acb();
    a0_0x15a0 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x15a0(jhepAP, key);
}
var a0_0xc26200 = a0_0x15a0;
var input = require('fs')[a0_0xc26200(0x0)](a0_0xc26200(0x1), a0_0xc26200(0x2));
var arr = input[a0_0xc26200(0x3)]()[a0_0xc26200(0x4)]('\x0a');
arr = arr['map'](v => v[a0_0xc26200(0x4)]('\x20')[a0_0xc26200(0x5)](Number));
var [n, t] = arr[a0_0xc26200(0x6)]();
var max = 0x0;
arr[a0_0xc26200(0x7)](v => {
    max = Math['max'](max, v[0x1] / v[0x0]);
});
function a0_0x3acb() {
    var _0x56c96f = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'map',
        'shift',
        'forEach',
        'log'
    ];
    a0_0x3acb = function () {
        return _0x56c96f;
    };
    return a0_0x3acb();
}
console[a0_0xc26200(0x8)]((max * t)['toFixed'](0x6));