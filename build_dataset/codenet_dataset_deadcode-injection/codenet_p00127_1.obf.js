var a0_0x2f0793 = a0_0x1f01;
var table = {};
table[0xb] = 'a';
table[0xc] = 'b';
table[0xd] = 'c';
table[0xe] = 'd';
table[0xf] = 'e';
function a0_0x1f01(CahgUC, key) {
    var stringArray = a0_0x167d();
    a0_0x1f01 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1f01(CahgUC, key);
}
table[0x15] = 'f';
table[0x16] = 'g';
table[0x17] = 'h';
table[0x18] = 'i';
table[0x19] = 'j';
table[0x1f] = 'k';
table[0x20] = 'l';
table[0x21] = 'm';
table[0x22] = 'n';
table[0x23] = 'o';
table[0x29] = 'p';
table[0x2a] = 'q';
table[0x2b] = 'r';
table[0x2c] = 's';
table[0x2d] = 't';
table[0x33] = 'u';
table[0x34] = 'v';
table[0x35] = 'w';
table[0x36] = 'x';
function a0_0x167d() {
    var _0x27a09d = [
        'readFileSync',
        '/dev/stdin',
        'replace',
        'split',
        'forEach',
        'hasOwnProperty',
        'match',
        'log'
    ];
    a0_0x167d = function () {
        return _0x27a09d;
    };
    return a0_0x167d();
}
table[0x37] = 'y';
table[0x3d] = 'z';
table[0x3e] = '.';
table[0x3f] = '?';
table[0x40] = '!';
table[0x41] = '\x20';
var input = require('fs')[a0_0x2f0793(0x0)](a0_0x2f0793(0x1), 'utf8');
var Arr = input[a0_0x2f0793(0x2)](/\n$/, '')[a0_0x2f0793(0x3)]('\x0a');
Arr[a0_0x2f0793(0x4)](function (str) {
    var _0x4ac79b = a0_0x1f01;
    str = str[_0x4ac79b(0x2)](/\d\d/g, function (s) {
        var _0x10fc1c = a0_0x1f01;
        if (table[_0x10fc1c(0x5)](s))
            s = table[s];
        return s;
    });
    if (str[_0x4ac79b(0x6)](/\d/))
        str = 'NA';
    console[_0x4ac79b(0x7)](str);
});