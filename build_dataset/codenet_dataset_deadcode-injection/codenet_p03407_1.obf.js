function a0_0x2dc9(uPSFLg, key) {
    var stringArray = a0_0x505e();
    a0_0x2dc9 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2dc9(uPSFLg, key);
}
var a0_0x257f79 = a0_0x2dc9;
function Main(s) {
    var _0x5266f7 = a0_0x2dc9;
    s = s['split']('\x20')['map'](a => parseInt(a));
    console['log'](s[0x0] + s[0x1] >= s[0x2] ? _0x5266f7(0x0) : 'No');
}
function a0_0x505e() {
    var _0xe06a50 = [
        'Yes',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim'
    ];
    a0_0x505e = function () {
        return _0xe06a50;
    };
    return a0_0x505e();
}
Main(require('fs')[a0_0x257f79(0x1)](a0_0x257f79(0x2), a0_0x257f79(0x3))[a0_0x257f79(0x4)]());