var a0_0x43665a = a0_0x281a;
function a0_0x281a(LXOVhp, key) {
    var stringArray = a0_0x2c71();
    a0_0x281a = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x281a(LXOVhp, key);
}
function a0_0x2c71() {
    var _0x10d8f3 = [
        'readFileSync',
        'split',
        'map',
        'log',
        'abs'
    ];
    a0_0x2c71 = function () {
        return _0x10d8f3;
    };
    return a0_0x2c71();
}
var input = require('fs')[a0_0x43665a(0x0)]('/dev/stdin', 'utf8');
var [a, b] = input['trim']()[a0_0x43665a(0x1)]('\x20')[a0_0x43665a(0x2)](Number);
console[a0_0x43665a(0x3)](Math[a0_0x43665a(0x4)](b - a));