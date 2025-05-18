var a0_0x4f1554 = a0_0x1f4d;
function a0_0x5ac3() {
    var _0x4174aa = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'log',
        'Yay!'
    ];
    a0_0x5ac3 = function () {
        return _0x4174aa;
    };
    return a0_0x5ac3();
}
fs = require('fs');
l = fs[a0_0x4f1554(0x0)](a0_0x4f1554(0x1), a0_0x4f1554(0x2))['split']('\x0a');
x = [];
for (i = 0x0; i < 0x6; i++) {
    x['push'](parseInt(l[i]));
}
function a0_0x1f4d(Kqqrpj, key) {
    var stringArray = a0_0x5ac3();
    a0_0x1f4d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1f4d(Kqqrpj, key);
}
if (x[0x4] - x[0x0] <= x[0x5]) {
    console[a0_0x4f1554(0x3)](a0_0x4f1554(0x4));
} else {
    console[a0_0x4f1554(0x3)](':(');
}