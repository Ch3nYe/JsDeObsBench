var a0_0x37632d = a0_0x5647;
function a0_0x7f95() {
    var _0x140d89 = [
        'readFileSync',
        '/dev/stdin',
        'replace',
        'CAC',
        'split',
        'forEach',
        'length',
        'log',
        'slice',
        'egg',
        'chicken'
    ];
    a0_0x7f95 = function () {
        return _0x140d89;
    };
    return a0_0x7f95();
}
var input = require('fs')[a0_0x37632d(0x0)](a0_0x37632d(0x1), 'utf8');
function a0_0x5647(sCbpBq, key) {
    var stringArray = a0_0x7f95();
    a0_0x5647 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5647(sCbpBq, key);
}
var str = input[a0_0x37632d(0x2)](/egg/g, 'E')[a0_0x37632d(0x2)](/chicken/g, 'C');
var ary = str[a0_0x37632d(0x2)](/EE/g, 'EAE')[a0_0x37632d(0x2)](/CC/g, a0_0x37632d(0x3))[a0_0x37632d(0x4)]('A');
var ans = '';
ary[a0_0x37632d(0x5)](function (v) {
    var _0x15d001 = a0_0x5647;
    if (ans[_0x15d001(0x6)] < v[_0x15d001(0x6)])
        ans = v;
});
console[a0_0x37632d(0x7)](ans[a0_0x37632d(0x8)](-0x1) == 'E' ? a0_0x37632d(0x9) : a0_0x37632d(0xa));