function a0_0x4ccb(qIoavp, key) {
    var stringArray = a0_0x13e2();
    a0_0x4ccb = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4ccb(qIoavp, key);
}
var a0_0x3b8e8e = a0_0x4ccb;
var input = require('fs')[a0_0x3b8e8e(0x0)]('/dev/stdin', a0_0x3b8e8e(0x1));
var Arr = input[a0_0x3b8e8e(0x2)]()[a0_0x3b8e8e(0x3)]('\x0a');
while (!![]) {
    var v = Arr['shift']();
    if (v == '0\x200')
        break;
    var NQ = v['split']('\x20')[a0_0x3b8e8e(0x4)](Number);
    var arr = [];
    for (var i = 0x0; i < 0x32; i++)
        arr[i] = 0x0;
    for (var i = 0x0; i < NQ[0x0]; i++) {
        var day = Arr['shift']()[a0_0x3b8e8e(0x3)]('\x20')[a0_0x3b8e8e(0x4)](Number);
        var L = day[a0_0x3b8e8e(0x5)]();
        for (var j = 0x0; j < L; j++) {
            arr[day[j]]++;
        }
    }
    var result = 0x0;
    var max = Math[a0_0x3b8e8e(0x6)]['apply'](null, arr);
    if (max >= NQ[0x1])
        NQ[0x1] = max;
    for (var i = 0x0; i < arr['length']; i++) {
        if (arr[i] >= NQ[0x1]) {
            result = i;
            break;
        }
    }
    console[a0_0x3b8e8e(0x7)](result);
}
function a0_0x13e2() {
    var _0x34222a = [
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'map',
        'shift',
        'max',
        'log'
    ];
    a0_0x13e2 = function () {
        return _0x34222a;
    };
    return a0_0x13e2();
}