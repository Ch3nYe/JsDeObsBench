var a0_0x583282 = a0_0xed16;
function Main(input) {
    var _0x374cae = a0_0xed16;
    var cnt = 0x0;
    for (var i = 0x0; i < input[_0x374cae(0x0)]; i++) {
        if (parseInt(input[i]) != i % 0x2)
            cnt++;
    }
    console[_0x374cae(0x1)](parseInt(Math[_0x374cae(0x2)](cnt, input[_0x374cae(0x0)] - cnt)));
}
function a0_0xed16(aNiEzS, key) {
    var stringArray = a0_0x3719();
    a0_0xed16 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xed16(aNiEzS, key);
}
Main(require('fs')['readFileSync'](a0_0x583282(0x3), a0_0x583282(0x4)));
function a0_0x3719() {
    var _0x16cf81 = [
        'length',
        'log',
        'min',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3719 = function () {
        return _0x16cf81;
    };
    return a0_0x3719();
}