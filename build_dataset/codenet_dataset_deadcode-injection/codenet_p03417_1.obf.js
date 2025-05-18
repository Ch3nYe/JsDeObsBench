function a0_0x116c() {
    var _0x1154aa = [
        'split',
        'map',
        'floor',
        '0000',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x116c = function () {
        return _0x1154aa;
    };
    return a0_0x116c();
}
var a0_0xda5293 = a0_0x3760;
function a0_0x3760(WEMBOg, key) {
    var stringArray = a0_0x116c();
    a0_0x3760 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3760(WEMBOg, key);
}
function Main(input) {
    var _0x2d6425 = a0_0x3760;
    input = input[_0x2d6425(0x0)]('\x20')[_0x2d6425(0x1)](a => parseInt(a));
    var N = input[0x0];
    var M = input[0x1];
    var ans = 0x0;
    if (N === 0x1 && M === 0x1)
        ans = 0x1;
    else if (N === 0x1 || M === 0x1)
        ans = N + M - 0x3;
    else
        ans = (N - 0x2) * (M - 0x2);
    if (ans > 0x1ff973cafa8000) {
        ans = Math[_0x2d6425(0x2)]((N - 0x2) / 0x2710) * (M - 0x2);
        tmp = (N - 0x2) % 0x2710 * (M - 0x2);
        ans += Math[_0x2d6425(0x2)](tmp / 0x2710);
        tmp = (_0x2d6425(0x3) + tmp % 0x2710)['slice'](-0x4);
        ans += tmp;
    }
    console['log'](ans);
}
Main(require('fs')[a0_0xda5293(0x4)](a0_0xda5293(0x5), a0_0xda5293(0x6)));