function a0_0x3f26(LHdpnG, key) {
    var stringArray = a0_0xd6ed();
    a0_0x3f26 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3f26(LHdpnG, key);
}
function a0_0xd6ed() {
    var _0x2aac34 = [
        'map',
        'log',
        '/dev/stdin',
        'utf8',
        'trim',
        'split'
    ];
    a0_0xd6ed = function () {
        return _0x2aac34;
    };
    return a0_0xd6ed();
}
var a0_0x5bb5f4 = a0_0x3f26;
function Main(input) {
    var _0xbf4c20 = a0_0x3f26;
    var a = input[0x0]['split']('\x20')[_0xbf4c20(0x0)](v => v - 0x0);
    if (a[0x0] + a[0x1] == 0x0)
        console[_0xbf4c20(0x1)](0x0);
    else
        console['log'](~~(a[0x0] * (a[0x0] - 0x1) / 0x2 + a[0x1] * (a[0x1] - 0x1) / 0x2));
}
Main(require('fs')['readFileSync'](a0_0x5bb5f4(0x2), a0_0x5bb5f4(0x3))[a0_0x5bb5f4(0x4)]()[a0_0x5bb5f4(0x5)]('\x0a'));