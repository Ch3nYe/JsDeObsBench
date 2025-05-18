var a0_0x213768 = a0_0x3d3d;
var input = require('fs')[a0_0x213768(0x0)]('/dev/stdin', 'utf8');
function a0_0x3d3d(QvjZiM, key) {
    var stringArray = a0_0x4f66();
    a0_0x3d3d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3d3d(QvjZiM, key);
}
var Arr = input[a0_0x213768(0x1)]()[a0_0x213768(0x2)]('\x0a');
function a0_0x4f66() {
    var _0xb6d06f = [
        'readFileSync',
        'trim',
        'split',
        'shift',
        'map',
        'join',
        'sort'
    ];
    a0_0x4f66 = function () {
        return _0xb6d06f;
    };
    return a0_0x4f66();
}
var AL = Arr[a0_0x213768(0x3)]();
for (var i = 0x0; i < AL; i++) {
    var arr = Arr[i][a0_0x213768(0x2)]('')[a0_0x213768(0x4)](Number);
    arr['sort'](function (a, b) {
        return b - a;
    });
    var a = arr[a0_0x213768(0x5)]('');
    arr[a0_0x213768(0x6)](function (a, b) {
        return a - b;
    });
    var b = arr[a0_0x213768(0x5)]('');
    console['log'](parseInt(a) - parseInt(b));
}