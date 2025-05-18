var a0_0x5ac2de = a0_0x40ed;
var input = require('fs')[a0_0x5ac2de(0x0)](a0_0x5ac2de(0x1), a0_0x5ac2de(0x2));
var arr = input[a0_0x5ac2de(0x3)]()[a0_0x5ac2de(0x4)]('\x0a');
var n = arr[a0_0x5ac2de(0x5)]() - 0x0;
var a = arr[a0_0x5ac2de(0x5)]()['split']('\x20')[a0_0x5ac2de(0x6)](Number);
var m = arr[a0_0x5ac2de(0x5)]() - 0x0;
var b = arr['shift']()['split']('\x20')['map'](Number);
function a0_0x40ed(pHdmCG, key) {
    var stringArray = a0_0x2dc4();
    a0_0x40ed = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x40ed(pHdmCG, key);
}
var memo = 0x0;
function a0_0x2dc4() {
    var _0x1c04b7 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'map',
        'log'
    ];
    a0_0x2dc4 = function () {
        return _0x1c04b7;
    };
    return a0_0x2dc4();
}
var cnt = 0x0;
for (var i = 0x0; i < m; i++) {
    var num = b[i];
    for (var j = memo; j < n; j++) {
        memo = j;
        if (num == a[j]) {
            cnt++;
            break;
        }
    }
}
console[a0_0x5ac2de(0x7)](cnt == m ? 0x1 : 0x0);