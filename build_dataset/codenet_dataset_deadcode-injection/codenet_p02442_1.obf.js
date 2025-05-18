var a0_0x4cb20e = a0_0x59d7;
var input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
var arr = input['trim']()[a0_0x4cb20e(0x0)]('\x0a');
var n = arr[a0_0x4cb20e(0x1)]() - 0x0;
function a0_0x59d7(mBPVNV, key) {
    var stringArray = a0_0x49da();
    a0_0x59d7 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x59d7(mBPVNV, key);
}
var a = arr['shift']()[a0_0x4cb20e(0x0)]('\x20')[a0_0x4cb20e(0x2)](Number);
var m = arr[a0_0x4cb20e(0x1)]() - 0x0;
var b = arr['shift']()[a0_0x4cb20e(0x0)]('\x20')[a0_0x4cb20e(0x2)](Number);
for (var i = 0x0; i < m; i++) {
    if (a[a0_0x4cb20e(0x3)] - 0x1 < i || b[i] > a[i]) {
        console[a0_0x4cb20e(0x4)](0x1);
        break;
    } else if (b[i] < a[i]) {
        console['log'](0x0);
        break;
    }
}
if (i == m)
    console[a0_0x4cb20e(0x4)](0x0);
function a0_0x49da() {
    var _0x8a7301 = [
        'split',
        'shift',
        'map',
        'length',
        'log'
    ];
    a0_0x49da = function () {
        return _0x8a7301;
    };
    return a0_0x49da();
}