function a0_0x7581(LtEHdi, key) {
    var stringArray = a0_0x1a18();
    a0_0x7581 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x7581(LtEHdi, key);
}
var a0_0x312cf3 = a0_0x7581;
var input = require('fs')[a0_0x312cf3(0x0)]('/dev/stdin', a0_0x312cf3(0x1));
var Arr = input[a0_0x312cf3(0x2)]()[a0_0x312cf3(0x3)]('\x0a')['map'](Number);
var L = Arr[a0_0x312cf3(0x4)]();
for (var i = 0x0; i < L; i++) {
    console[a0_0x312cf3(0x5)](a0_0x312cf3(0x6) + (i + 0x1) + ':');
    var v = Arr[i];
    for (var j = 0x0; j < 0xa; j++) {
        v = a0_0x312cf3(0x7) + v * v;
        v = v[a0_0x312cf3(0x8)](-0x6);
        v = v[a0_0x312cf3(0x8)](0x0, 0x4);
        v = parseInt(v, 0xa);
        console[a0_0x312cf3(0x5)](v);
    }
}
function a0_0x1a18() {
    var _0x5e9559 = [
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'shift',
        'log',
        'Case\x20',
        '000000',
        'slice'
    ];
    a0_0x1a18 = function () {
        return _0x5e9559;
    };
    return a0_0x1a18();
}