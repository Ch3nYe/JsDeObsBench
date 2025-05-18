var a0_0x48f2a9 = a0_0x3953;
function a0_0x3953(zBuVpX, key) {
    var stringArray = a0_0x3a17();
    a0_0x3953 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3953(zBuVpX, key);
}
function a0_0x3a17() {
    var _0x42a9f2 = [
        'abcdefghijklmnopqrstuvwxyz',
        'split',
        'readFileSync',
        '/dev/stdin',
        'trim',
        'shift',
        'map',
        'length',
        'join'
    ];
    a0_0x3a17 = function () {
        return _0x42a9f2;
    };
    return a0_0x3a17();
}
var objStr = {};
var objNum = {};
var abc = a0_0x48f2a9(0x0)[a0_0x48f2a9(0x1)]('');
abc['forEach'](function (v, i) {
    objStr[v] = i;
    objNum[i] = v;
});
var input = require('fs')[a0_0x48f2a9(0x2)](a0_0x48f2a9(0x3), 'utf8');
var Arr = input[a0_0x48f2a9(0x4)]()[a0_0x48f2a9(0x1)]('\x0a');
while (!![]) {
    var N = Arr[a0_0x48f2a9(0x5)]() - 0x0;
    if (N == 0x0)
        break;
    var str = Arr[a0_0x48f2a9(0x5)]();
    var AB = [];
    for (var i = 0x0; i < N; i++) {
        var ab = Arr[a0_0x48f2a9(0x5)]()[a0_0x48f2a9(0x1)]('\x20')[a0_0x48f2a9(0x6)](Number);
        AB['push'](ab);
    }
    AB['reverse']();
    var s = str[a0_0x48f2a9(0x1)]('');
    for (var i = 0x0; i < N; i++) {
        var ab = AB[i];
        var plus = ab[0x1] - ab[0x0];
        var m1 = s[ab[0x0] - 0x1];
        var m2 = s[ab[0x1] - 0x1];
        var n1 = objStr[m1] + plus;
        var n2 = objStr[m2] + plus;
        s[ab[0x0] - 0x1] = objNum[n2 % abc[a0_0x48f2a9(0x7)]];
        s[ab[0x1] - 0x1] = objNum[n1 % abc[a0_0x48f2a9(0x7)]];
    }
    console['log'](s[a0_0x48f2a9(0x8)](''));
}