var a0_0x1284aa = a0_0x45e2;
function a0_0x45e2(llWzSi, key) {
    var stringArray = a0_0x4aed();
    a0_0x45e2 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x45e2(llWzSi, key);
}
var input = require('fs')[a0_0x1284aa(0x0)]('/dev/stdin', a0_0x1284aa(0x1));
var arr = input['trim']()[a0_0x1284aa(0x2)]('\x0a');
var q = arr[a0_0x1284aa(0x3)]() - 0x0;
var str = '';
var set = new Map();
for (var i = 0x0; i < q; i++) {
    var [a, b] = arr[i][a0_0x1284aa(0x2)]('\x20');
    if (a == '0') {
        set[a0_0x1284aa(0x4)](b, 0x0);
        str += set[a0_0x1284aa(0x5)] + '\x0a';
    } else if (a == '1') {
        str += (set[a0_0x1284aa(0x6)](b) ? 0x1 : 0x0) + '\x0a';
    } else {
        set[a0_0x1284aa(0x7)](b);
    }
}
console[a0_0x1284aa(0x8)](str[a0_0x1284aa(0x9)]());
function a0_0x4aed() {
    var _0x4c4760 = [
        'readFileSync',
        'utf8',
        'split',
        'shift',
        'set',
        'size',
        'has',
        'delete',
        'log',
        'trim'
    ];
    a0_0x4aed = function () {
        return _0x4c4760;
    };
    return a0_0x4aed();
}