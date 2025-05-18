function a0_0x43de(toMLws, key) {
    var stringArray = a0_0xb1bf();
    a0_0x43de = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x43de(toMLws, key);
}
var a0_0x2697b2 = a0_0x43de;
var input = require('fs')[a0_0x2697b2(0x0)](a0_0x2697b2(0x1), a0_0x2697b2(0x2));
var arr = input[a0_0x2697b2(0x3)]()[a0_0x2697b2(0x4)]('\x0a');
var n = arr[a0_0x2697b2(0x5)]() - 0x0;
var a = arr['shift']()[a0_0x2697b2(0x4)]('\x20')[a0_0x2697b2(0x6)](Number);
var cnt = 0x0;
for (var i = 0x0; i < n - 0x1; i++) {
    if (a[i] < a[i + 0x1])
        cnt++;
}
console[a0_0x2697b2(0x7)](cnt);
function a0_0xb1bf() {
    var _0x2a71d0 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'map',
        'log'
    ];
    a0_0xb1bf = function () {
        return _0x2a71d0;
    };
    return a0_0xb1bf();
}