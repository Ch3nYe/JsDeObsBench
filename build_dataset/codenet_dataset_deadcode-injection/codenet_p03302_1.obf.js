var a0_0xe3581c = a0_0x3862;
function Main(s) {
    var _0x2fdf05 = a0_0x3862;
    s = s[_0x2fdf05(0x0)]('\x20')[_0x2fdf05(0x1)](a => +a);
    var ans = 'x';
    if (s[0x0] + s[0x1] === 0xf)
        ans = '+';
    if (s[0x0] * s[0x1] === 0xf)
        ans = '*';
    console['log'](ans);
}
function a0_0x2586() {
    var _0x4bcfb1 = [
        'split',
        'map',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2586 = function () {
        return _0x4bcfb1;
    };
    return a0_0x2586();
}
function a0_0x3862(QRlYRk, key) {
    var stringArray = a0_0x2586();
    a0_0x3862 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3862(QRlYRk, key);
}
Main(require('fs')['readFileSync'](a0_0xe3581c(0x2), a0_0xe3581c(0x3)));