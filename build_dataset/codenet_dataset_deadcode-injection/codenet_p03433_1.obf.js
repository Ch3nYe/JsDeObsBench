function a0_0x205d(OCfneC, key) {
    var stringArray = a0_0x20a1();
    a0_0x205d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x205d(OCfneC, key);
}
var a0_0x36a7b1 = a0_0x205d;
function main(input) {
    var _0x222c65 = a0_0x205d;
    var line = input[_0x222c65(0x0)]('\x0a')['map'](n => parseInt(n, 0xa));
    while (line[0x0] > 0x1f4) {
        line[0x0] -= 0x1f4;
    }
    line[0x0] <= line[0x1] ? console[_0x222c65(0x1)](_0x222c65(0x2)) : console['log']('No');
}
main(require('fs')['readFileSync'](a0_0x36a7b1(0x3), a0_0x36a7b1(0x4)));
function a0_0x20a1() {
    var _0x11ae5e = [
        'split',
        'log',
        'Yes',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x20a1 = function () {
        return _0x11ae5e;
    };
    return a0_0x20a1();
}