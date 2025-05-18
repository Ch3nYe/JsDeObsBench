var a0_0x2e13cc = a0_0x19e1;
input = require('fs')[a0_0x2e13cc(0x0)](a0_0x2e13cc(0x1), a0_0x2e13cc(0x2));
lines = input[a0_0x2e13cc(0x3)]('\x0a');
function a0_0x2d18() {
    var _0x540554 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'floor',
        'log'
    ];
    a0_0x2d18 = function () {
        return _0x540554;
    };
    return a0_0x2d18();
}
N = lines['shift']() * 0x1;
ans = Math[a0_0x2e13cc(0x4)](N / 0xb) * 0x2;
m = N % 0xb;
function a0_0x19e1(XwTFEU, key) {
    var stringArray = a0_0x2d18();
    a0_0x19e1 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x19e1(XwTFEU, key);
}
if (m == 0x0) {
} else if (m <= 0x6) {
    ans += 0x1;
} else {
    ans += 0x2;
}
console[a0_0x2e13cc(0x5)](ans);