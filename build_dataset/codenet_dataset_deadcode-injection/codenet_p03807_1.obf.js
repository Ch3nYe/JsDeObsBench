var a0_0x226efd = a0_0x1c46;
function Main(input) {
    var _0x3b9385 = a0_0x1c46;
    input = input[_0x3b9385(0x0)]('\x0a');
    var arr = input[0x1][_0x3b9385(0x0)]('\x20')[_0x3b9385(0x1)](Number);
    var m = 0x0;
    var n = 0x0;
    for (var i = 0x0; i < arr[_0x3b9385(0x2)]; i++) {
        if (arr[i] % 0x2 == 0x0)
            m++;
        else
            n++;
    }
    console[_0x3b9385(0x3)](n % 0x2 == 0x0 && (n / 0x2 + m) % 0x2 == 0x0 ? _0x3b9385(0x4) : 'NO');
}
Main(require('fs')[a0_0x226efd(0x5)](a0_0x226efd(0x6), a0_0x226efd(0x7))[a0_0x226efd(0x8)]());
function a0_0x1c46(NvdPPB, key) {
    var stringArray = a0_0x1350();
    a0_0x1c46 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1c46(NvdPPB, key);
}
function a0_0x1350() {
    var _0x550e59 = [
        'split',
        'map',
        'length',
        'log',
        'YES',
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim'
    ];
    a0_0x1350 = function () {
        return _0x550e59;
    };
    return a0_0x1350();
}