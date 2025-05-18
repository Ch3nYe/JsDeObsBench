var a0_0x478fed = a0_0x1364;
inp = require('fs')[a0_0x478fed(0x0)](a0_0x478fed(0x1), a0_0x478fed(0x2))[a0_0x478fed(0x3)]('\x0a');
function a0_0x1364(XGTuiX, key) {
    var stringArray = a0_0x42a1();
    a0_0x1364 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1364(XGTuiX, key);
}
l = inp['shift']()[a0_0x478fed(0x3)]('\x20');
function a0_0x42a1() {
    var _0x43965c = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'log',
        'charCodeAt'
    ];
    a0_0x42a1 = function () {
        return _0x43965c;
    };
    return a0_0x42a1();
}
x = l[0x0];
y = l[0x1];
console[a0_0x478fed(0x4)](x == y ? '=' : x[a0_0x478fed(0x5)]() < y[a0_0x478fed(0x5)]() ? '<' : '>');