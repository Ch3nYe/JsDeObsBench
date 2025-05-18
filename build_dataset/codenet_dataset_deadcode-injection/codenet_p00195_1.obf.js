var a0_0x110199 = a0_0x5dda;
var input = require('fs')[a0_0x110199(0x0)](a0_0x110199(0x1), 'utf8');
var Arr = input[a0_0x110199(0x2)]()[a0_0x110199(0x3)]('\x0a');
function a0_0x444a() {
    var _0xdacc2 = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'split',
        'length',
        '0\x200',
        'reduce',
        'indexOf',
        'log',
        'map'
    ];
    a0_0x444a = function () {
        return _0xdacc2;
    };
    return a0_0x444a();
}
var abc = [];
function a0_0x5dda(sFWXsB, key) {
    var stringArray = a0_0x444a();
    a0_0x5dda = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5dda(sFWXsB, key);
}
for (var i = 0x0; i < Arr[a0_0x110199(0x4)]; i++) {
    if (abc[a0_0x110199(0x4)] == 0x0 && Arr[i] == a0_0x110199(0x5))
        break;
    if (abc[a0_0x110199(0x4)] == 0x4) {
        var max = abc[a0_0x110199(0x6)](function (a, b) {
            return Math['max'](a, b);
        });
        var ABC = 'ABCD'[a0_0x110199(0x3)]('');
        var str = ABC[abc[a0_0x110199(0x7)](max)];
        console[a0_0x110199(0x8)](str + '\x20' + max);
        abc = [];
    } else {
        var arr = Arr[i][a0_0x110199(0x3)]('\x20')[a0_0x110199(0x9)](Number);
        abc['push'](arr[0x0] + arr[0x1]);
    }
}