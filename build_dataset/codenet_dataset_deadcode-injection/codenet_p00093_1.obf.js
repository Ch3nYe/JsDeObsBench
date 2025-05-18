var a0_0x1d27b3 = a0_0x4885;
function a0_0x4885(PHfSiU, key) {
    var stringArray = a0_0xee8b();
    a0_0x4885 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x4885(PHfSiU, key);
}
process[a0_0x1d27b3(0x0)][a0_0x1d27b3(0x1)]();
process['stdin'][a0_0x1d27b3(0x2)](a0_0x1d27b3(0x3));
x = require('fs')[a0_0x1d27b3(0x4)](a0_0x1d27b3(0x5), a0_0x1d27b3(0x3))[a0_0x1d27b3(0x6)]()[a0_0x1d27b3(0x7)](/\s/);
function a0_0xee8b() {
    var _0x4ca161 = [
        'stdin',
        'resume',
        'setEncoding',
        'utf8',
        'readFileSync',
        '/dev/stdin',
        'trim',
        'split',
        'length',
        'log',
        'NA\x0a'
    ];
    a0_0xee8b = function () {
        return _0x4ca161;
    };
    return a0_0xee8b();
}
for (i = 0x0; i < x[a0_0x1d27b3(0x8)]; i += 0x2) {
    count = 0x0;
    y = x[i];
    if (y + x[i + 0x1] == 0x0)
        break;
    for (; y <= x[i + 0x1]; y++) {
        if (y % 0x190 == 0x0 || y % 0x4 == 0x0 && y % 0x64 != 0x0) {
            console[a0_0x1d27b3(0x9)](String(y)[a0_0x1d27b3(0x6)]());
            count++;
        }
    }
    if (i != 0x0 || i == x[a0_0x1d27b3(0x8)] - 0x1)
        console[a0_0x1d27b3(0x9)]();
    if (count == 0x0) {
        console[a0_0x1d27b3(0x9)](a0_0x1d27b3(0xa));
    }
}