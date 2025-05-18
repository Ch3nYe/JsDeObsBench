var a0_0x1f15c0 = a0_0x1198;
var input = require('fs')['readFileSync'](a0_0x1f15c0(0x0), a0_0x1f15c0(0x1));
function a0_0x553a() {
    var _0x1176d1 = [
        '/dev/stdin',
        'utf8',
        'split',
        'shift',
        'abs',
        'safe',
        'warning',
        'log'
    ];
    a0_0x553a = function () {
        return _0x1176d1;
    };
    return a0_0x553a();
}
var Arr = input['replace'](/\n$/, '')[a0_0x1f15c0(0x2)]('\x0a');
var n = Arr[a0_0x1f15c0(0x3)]() - 0x0;
function a0_0x1198(UhfFjP, key) {
    var stringArray = a0_0x553a();
    a0_0x1198 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1198(UhfFjP, key);
}
for (var I = 0x0; I < n; I++) {
    var arr = Arr[I][a0_0x1f15c0(0x2)](':');
    var h = parseInt(arr[0x0], 0xa);
    var m = parseInt(arr[0x1], 0xa);
    var H = h * (0x168 / 0xc) + m * (0x168 / 0xc / 0x3c);
    var M = m * (0x168 / 0x3c);
    var hm = Math[a0_0x1f15c0(0x4)](H - M);
    var ans;
    if (hm >= 0x0 && hm < 0x1e)
        ans = 'alert';
    else if (hm >= 0x5a && hm <= 0xb4)
        ans = a0_0x1f15c0(0x5);
    else
        ans = a0_0x1f15c0(0x6);
    console[a0_0x1f15c0(0x7)](ans);
}