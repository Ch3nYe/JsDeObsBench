var a0_0x3de134 = a0_0x2ef6;
var input = require('fs')[a0_0x3de134(0x0)](a0_0x3de134(0x1), a0_0x3de134(0x2));
function a0_0x2ef6(GIqHDA, key) {
    var stringArray = a0_0x4589();
    a0_0x2ef6 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2ef6(GIqHDA, key);
}
var str = input[a0_0x3de134(0x3)]();
var a = ![];
var ans = '';
function a0_0x4589() {
    var _0x1c2ef1 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'length',
        'log'
    ];
    a0_0x4589 = function () {
        return _0x1c2ef1;
    };
    return a0_0x4589();
}
for (var i = 0x0; i < str[a0_0x3de134(0x4)]; i++) {
    if (str[i] == 'A')
        a = !![];
    if (str[i] == 'Z' && a == !![]) {
        a = ![];
        ans += 'AZ';
    }
}
if (ans == '')
    ans = -0x1;
console[a0_0x3de134(0x5)](ans);