var a0_0x4d0c9a = a0_0x2a4f;
function a0_0x2a4f(mXIPwr, key) {
    var stringArray = a0_0x1137();
    a0_0x2a4f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2a4f(mXIPwr, key);
}
var input = require('fs')[a0_0x4d0c9a(0x0)]('/dev/stdin', a0_0x4d0c9a(0x1));
var [a, b] = input['trim']()[a0_0x4d0c9a(0x2)]('\x20')[a0_0x4d0c9a(0x3)](Number);
function a0_0x1137() {
    var _0x11593b = [
        'readFileSync',
        'utf8',
        'split',
        'map'
    ];
    a0_0x1137 = function () {
        return _0x11593b;
    };
    return a0_0x1137();
}
console['log'](Math['ceil'](b / a));