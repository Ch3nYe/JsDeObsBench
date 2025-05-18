var a0_0x49274a = a0_0x2006;
var input = require('fs')[a0_0x49274a(0x0)]('/dev/stdin', a0_0x49274a(0x1));
var arr = input[a0_0x49274a(0x2)]()[a0_0x49274a(0x3)]('\x20')['map'](Number);
var [a, b, c, d] = arr[a0_0x49274a(0x4)]((a, b) => b - a);
console[a0_0x49274a(0x5)](Math[a0_0x49274a(0x6)](a + d - (b + c)));
function a0_0x2006(FmxnqT, key) {
    var stringArray = a0_0x59e8();
    a0_0x2006 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2006(FmxnqT, key);
}
function a0_0x59e8() {
    var _0x238f2f = [
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'sort',
        'log',
        'abs'
    ];
    a0_0x59e8 = function () {
        return _0x238f2f;
    };
    return a0_0x59e8();
}