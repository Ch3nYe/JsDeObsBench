var a0_0x4358bb = a0_0x52ef;
var input = require('fs')[a0_0x4358bb(0x0)](a0_0x4358bb(0x1), a0_0x4358bb(0x2));
var arr = input[a0_0x4358bb(0x3)]()[a0_0x4358bb(0x4)]('\x0a');
function a0_0x52ef(aHCtLI, key) {
    var stringArray = a0_0x118b();
    a0_0x52ef = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x52ef(aHCtLI, key);
}
var a = arr[0x0];
var b = arr[0x1];
var len = b[a0_0x4358bb(0x5)] - 0x1;
var reg = new RegExp(b, 'g');
var ans = [];
function a0_0x118b() {
    var _0x30feb7 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'length',
        'test',
        'lastIndex',
        'push',
        'log',
        'join'
    ];
    a0_0x118b = function () {
        return _0x30feb7;
    };
    return a0_0x118b();
}
while (reg[a0_0x4358bb(0x6)](a)) {
    reg[a0_0x4358bb(0x7)] -= len;
    ans[a0_0x4358bb(0x8)](reg[a0_0x4358bb(0x7)] - 0x1);
}
if (ans[a0_0x4358bb(0x5)] != 0x0)
    console[a0_0x4358bb(0x9)](ans[a0_0x4358bb(0xa)]('\x0a'));