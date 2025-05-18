function a0_0x476b() {
    var _0x2b9dae = [
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'forEach',
        'log'
    ];
    a0_0x476b = function () {
        return _0x2b9dae;
    };
    return a0_0x476b();
}
var a0_0x35464c = a0_0x4b04;
var input = require('fs')['readFileSync'](a0_0x35464c(0x0), a0_0x35464c(0x1));
var Arr = input[a0_0x35464c(0x2)]()[a0_0x35464c(0x3)]('\x0a');
function a0_0x4b04(XfWqCE, key) {
    var stringArray = a0_0x476b();
    a0_0x4b04 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4b04(XfWqCE, key);
}
Arr[a0_0x35464c(0x4)](function (v) {
    var _0x18e812 = a0_0x4b04;
    var a = v[_0x18e812(0x3)]('\x20')[0x0] - 0x0;
    var b = v[_0x18e812(0x3)]('\x20')[0x1] - 0x0;
    console[_0x18e812(0x5)](a + b);
});