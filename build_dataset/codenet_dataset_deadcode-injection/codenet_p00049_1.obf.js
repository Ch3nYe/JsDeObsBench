var a0_0x3ec03d = a0_0x58a3;
for (w = x = y = z = 0x0, i = require('fs')[a0_0x3ec03d(0x0)](a0_0x3ec03d(0x1), 'utf8')[a0_0x3ec03d(0x2)](/\s|,/), c = j = -0x1; c = i[j += 0x2]; n = '\x0a')
    c == 'A' ? w++ : c == 'B' ? x++ : c == 'O' ? z++ : y++;
console[a0_0x3ec03d(0x3)](w + n + x + n + y + n + z);
function a0_0x58a3(ZNSVCr, key) {
    var stringArray = a0_0x217b();
    a0_0x58a3 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x58a3(ZNSVCr, key);
}
function a0_0x217b() {
    var _0x3a342a = [
        'readFileSync',
        '/dev/stdin',
        'split',
        'log'
    ];
    a0_0x217b = function () {
        return _0x3a342a;
    };
    return a0_0x217b();
}