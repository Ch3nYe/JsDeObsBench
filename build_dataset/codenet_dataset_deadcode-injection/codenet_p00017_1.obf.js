var a0_0xe27fed = a0_0x3a96;
var input = require('fs')['readFileSync']('/dev/stdin', a0_0xe27fed(0x0));
function a0_0x3a96(nYluLb, key) {
    var stringArray = a0_0x268b();
    a0_0x3a96 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3a96(nYluLb, key);
}
var strA = input[a0_0xe27fed(0x1)]();
var abc = a0_0xe27fed(0x2)['split']('');
for (var i = 0x0; i < 0x1a; i++) {
    var strB = strA[a0_0xe27fed(0x3)](/[a-z]/g, function (s) {
        var _0x34eec2 = a0_0x3a96;
        return abc[(abc[_0x34eec2(0x4)](s) + i) % 0x1a];
    });
    if (strB[a0_0xe27fed(0x5)](/the|this|that/))
        break;
}
function a0_0x268b() {
    var _0x33eba8 = [
        'utf8',
        'trim',
        'abcdefghijklmnopqrstuvwxyz',
        'replace',
        'indexOf',
        'match',
        'log'
    ];
    a0_0x268b = function () {
        return _0x33eba8;
    };
    return a0_0x268b();
}
console[a0_0xe27fed(0x6)](strB);