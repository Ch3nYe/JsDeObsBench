function a0_0x1e16() {
    var _0x3ed4fa = [
        'readFileSync',
        'utf8',
        'split',
        'shift',
        'size',
        'has',
        'log',
        'trim'
    ];
    a0_0x1e16 = function () {
        return _0x3ed4fa;
    };
    return a0_0x1e16();
}
var a0_0x4c30a2 = a0_0x5614;
var input = require('fs')[a0_0x4c30a2(0x0)]('/dev/stdin', a0_0x4c30a2(0x1));
var arr = input['trim']()[a0_0x4c30a2(0x2)]('\x0a');
var q = arr[a0_0x4c30a2(0x3)]() - 0x0;
var str = '';
var set = new Set();
for (var i = 0x0; i < q; i++) {
    var [a, b] = arr[i][a0_0x4c30a2(0x2)]('\x20');
    if (a == '0') {
        set['add'](b);
        str += set[a0_0x4c30a2(0x4)] + '\x0a';
    } else {
        str += (set[a0_0x4c30a2(0x5)](b) ? 0x1 : 0x0) + '\x0a';
    }
}
function a0_0x5614(xaYLCp, key) {
    var stringArray = a0_0x1e16();
    a0_0x5614 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5614(xaYLCp, key);
}
console[a0_0x4c30a2(0x6)](str[a0_0x4c30a2(0x7)]());