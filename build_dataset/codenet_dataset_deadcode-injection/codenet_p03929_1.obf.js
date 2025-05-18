var a0_0x59272f = a0_0x34b0;
function Main(input) {
    var _0x4622ac = a0_0x34b0;
    input = input[_0x4622ac(0x0)]('\x20');
    var valN = input[0x0];
    var valK = input[0x1];
    if (valN < 0x3) {
        console[_0x4622ac(0x1)]('0');
        return;
    }
    var count = 0x0;
    for (var i = 0x0; i + 0x2 < valN; i++) {
        for (var j = 0x0; j < 0x5; j++) {
            if ((i * 0x3f + j * 0x9 + 0x51) % 0xb == valK) {
                count++;
            }
        }
    }
    console[_0x4622ac(0x1)](count);
}
Main(require('fs')[a0_0x59272f(0x2)](a0_0x59272f(0x3), a0_0x59272f(0x4)));
function a0_0x34b0(IFXofM, key) {
    var stringArray = a0_0x1f53();
    a0_0x34b0 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x34b0(IFXofM, key);
}
function a0_0x1f53() {
    var _0x31c819 = [
        'split',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x1f53 = function () {
        return _0x31c819;
    };
    return a0_0x1f53();
}