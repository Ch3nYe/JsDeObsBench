var a0_0x22f0b0 = a0_0x4abd;
var input = require('fs')['readFileSync']('/dev/stdin', a0_0x22f0b0(0x0));
var arr = input[a0_0x22f0b0(0x1)]()['split']('\x0a');
function a0_0x4abd(iIySVC, key) {
    var stringArray = a0_0x1f04();
    a0_0x4abd = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4abd(iIySVC, key);
}
var [n, d] = arr['shift']()['split']('\x20')['map'](Number);
var p = arr[a0_0x22f0b0(0x2)]()[a0_0x22f0b0(0x3)]('\x20')[a0_0x22f0b0(0x4)](Number);
var sum = 0x0;
p[a0_0x22f0b0(0x5)](v => {
    var _0x189985 = a0_0x4abd;
    sum += Math[_0x189985(0x6)](0x0, v - d);
});
function a0_0x1f04() {
    var _0x2ca5d2 = [
        'utf8',
        'trim',
        'shift',
        'split',
        'map',
        'forEach',
        'max',
        'log',
        'kusoge'
    ];
    a0_0x1f04 = function () {
        return _0x2ca5d2;
    };
    return a0_0x1f04();
}
console[a0_0x22f0b0(0x7)](sum == 0x0 ? a0_0x22f0b0(0x8) : sum);