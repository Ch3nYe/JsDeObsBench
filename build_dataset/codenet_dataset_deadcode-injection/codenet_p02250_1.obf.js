function a0_0x1c17(CsjnGM, key) {
    var stringArray = a0_0x4a3c();
    a0_0x1c17 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1c17(CsjnGM, key);
}
var a0_0x59aa4f = a0_0x1c17;
var input = require('fs')[a0_0x59aa4f(0x0)](a0_0x59aa4f(0x1), a0_0x59aa4f(0x2));
var arr = input['trim']()[a0_0x59aa4f(0x3)]('\x0a');
var str = arr[0x0];
var n = arr[0x1] - 0x0 + 0x2;
var ans = '';
for (var i = 0x2; i < n; i++) {
    ans += (str[a0_0x59aa4f(0x4)](arr[i]) ? 0x1 : 0x0) + '\x0a';
}
console[a0_0x59aa4f(0x5)](ans[a0_0x59aa4f(0x6)]());
function a0_0x4a3c() {
    var _0x35d477 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'includes',
        'log',
        'trim'
    ];
    a0_0x4a3c = function () {
        return _0x35d477;
    };
    return a0_0x4a3c();
}