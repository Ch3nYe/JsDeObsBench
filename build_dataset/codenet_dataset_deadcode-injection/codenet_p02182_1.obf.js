var a0_0x1a8616 = a0_0x2e56;
var input = require('fs')[a0_0x1a8616(0x0)](a0_0x1a8616(0x1), a0_0x1a8616(0x2));
var arr = input['trim']()[a0_0x1a8616(0x3)]('\x0a');
function a0_0x2e56(KLivyZ, key) {
    var stringArray = a0_0x5ba5();
    a0_0x2e56 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2e56(KLivyZ, key);
}
var [n, m] = arr[a0_0x1a8616(0x4)]()[a0_0x1a8616(0x3)]('\x20')[a0_0x1a8616(0x5)](Number);
var cnt = 0x0;
for (var i = 0x0; i < n; i++) {
    var s = arr[i];
    var t = arr[i + n];
    for (var j = 0x0; j < m; j++) {
        if (s[j] != t[j])
            cnt++;
    }
}
function a0_0x5ba5() {
    var _0x561565 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'shift',
        'map',
        'log'
    ];
    a0_0x5ba5 = function () {
        return _0x561565;
    };
    return a0_0x5ba5();
}
console[a0_0x1a8616(0x6)](cnt);