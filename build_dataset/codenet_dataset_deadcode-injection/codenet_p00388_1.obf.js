var a0_0x73f4bc = a0_0x5949;
function a0_0x2f6c() {
    var _0x30b75a = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'map',
        'log'
    ];
    a0_0x2f6c = function () {
        return _0x30b75a;
    };
    return a0_0x2f6c();
}
function a0_0x5949(KwTiCF, key) {
    var stringArray = a0_0x2f6c();
    a0_0x5949 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5949(KwTiCF, key);
}
var input = require('fs')[a0_0x73f4bc(0x0)](a0_0x73f4bc(0x1), a0_0x73f4bc(0x2));
var [h, a, b] = input[a0_0x73f4bc(0x3)]()[a0_0x73f4bc(0x4)]('\x20')[a0_0x73f4bc(0x5)](Number);
var cnt = 0x0;
for (var i = a; i <= b; i++) {
    if (h % i == 0x0)
        cnt++;
}
console[a0_0x73f4bc(0x6)](cnt);