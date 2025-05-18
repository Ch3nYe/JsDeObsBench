var a0_0x123b1a = a0_0x58c8;
var input = require('fs')[a0_0x123b1a(0x0)](a0_0x123b1a(0x1), a0_0x123b1a(0x2));
var arr = input[a0_0x123b1a(0x3)]()[a0_0x123b1a(0x4)]('');
var x = '';
function a0_0x58c8(jbOzLa, key) {
    var stringArray = a0_0x427d();
    a0_0x58c8 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x58c8(jbOzLa, key);
}
arr['forEach'](function (v) {
    if (v == '0')
        x += 'w';
    if (v == '1')
        x += '';
    if (v == '2')
        x += 'k';
    if (v == '3')
        x += 's';
    if (v == '4')
        x += 't';
    if (v == '5')
        x += 'n';
    if (v == '6')
        x += 'h';
    if (v == '7')
        x += 'm';
    if (v == '8')
        x += 'y';
    if (v == '9')
        x += 'r';
    if (v == 'T')
        x += 'a';
    if (v == 'L')
        x += 'i';
    if (v == 'U')
        x += 'u';
    if (v == 'R')
        x += 'e';
    if (v == 'D')
        x += 'o';
});
function a0_0x427d() {
    var _0x5335c3 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'replace'
    ];
    a0_0x427d = function () {
        return _0x5335c3;
    };
    return a0_0x427d();
}
x = x[a0_0x123b1a(0x5)](/wu/g, 'nn');
console['log'](x);