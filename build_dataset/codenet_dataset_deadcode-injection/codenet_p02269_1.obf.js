function a0_0x46fd() {
    var _0x441ad4 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'shift',
        'split',
        'find',
        'log',
        'hasOwnProperty',
        'yes'
    ];
    a0_0x46fd = function () {
        return _0x441ad4;
    };
    return a0_0x46fd();
}
var a0_0x1d902c = a0_0x2a19;
var input = require('fs')[a0_0x1d902c(0x0)](a0_0x1d902c(0x1), a0_0x1d902c(0x2));
var Arr = input[a0_0x1d902c(0x3)]()['split']('\x0a');
Arr[a0_0x1d902c(0x4)]();
var obj = {};
function a0_0x2a19(fahSul, key) {
    var stringArray = a0_0x46fd();
    a0_0x2a19 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2a19(fahSul, key);
}
Arr['forEach'](function (v) {
    var _0x9a4ee = a0_0x2a19;
    var arr = v[_0x9a4ee(0x5)]('\x20');
    if (arr[0x0] == 'insert')
        obj[arr[0x1]] = !![];
    if (arr[0x0] == _0x9a4ee(0x6))
        console[_0x9a4ee(0x7)](obj[_0x9a4ee(0x8)](arr[0x1]) ? _0x9a4ee(0x9) : 'no');
});