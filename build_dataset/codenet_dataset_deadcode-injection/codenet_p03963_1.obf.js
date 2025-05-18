var a0_0xdc3081 = a0_0x6261;
function a0_0x4778() {
    var _0xee6d69 = [
        'split',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4778 = function () {
        return _0xee6d69;
    };
    return a0_0x4778();
}
function a0_0x6261(HDtfbJ, key) {
    var stringArray = a0_0x4778();
    a0_0x6261 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x6261(HDtfbJ, key);
}
function Main(input) {
    var _0x16b747 = a0_0x6261;
    var input = input['split']('\x0a');
    var tmp = input[0x0][_0x16b747(0x0)]('\x20');
    var N = tmp[0x0];
    var K = tmp[0x1];
    var pattern = K;
    for (i = 0x1; i < N; i++) {
        pattern *= K - 0x1;
    }
    console[_0x16b747(0x1)](pattern);
}
Main(require('fs')[a0_0xdc3081(0x2)](a0_0xdc3081(0x3), a0_0xdc3081(0x4)));