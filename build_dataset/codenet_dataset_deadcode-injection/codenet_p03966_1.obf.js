var a0_0x5c04ec = a0_0xdd9d;
function a0_0x472d() {
    var _0x5ea186 = [
        'split',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x472d = function () {
        return _0x5ea186;
    };
    return a0_0x472d();
}
function a0_0xdd9d(exdCTR, key) {
    var stringArray = a0_0x472d();
    a0_0xdd9d = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0xdd9d(exdCTR, key);
}
function Main(input) {
    var _0x428728 = a0_0xdd9d;
    TT = 0x0;
    AA = 0x0;
    input = input[_0x428728(0x0)]('\x0a');
    N = input[0x0];
    for (i = 0x1; i <= N; i++) {
        tmp = input[i][_0x428728(0x0)]('\x20');
        T = tmp[0x0] * 0x1;
        A = tmp[0x1] * 0x1;
        if (TT <= T && AA <= A) {
            TT = T;
            AA = A;
        } else {
            ratioT = TT / T;
            ratioA = AA / A;
            ratio = Math['ceil'](Math['max'](ratioT, ratioA));
            TT = T * ratio;
            AA = A * ratio;
        }
    }
    console[_0x428728(0x1)](TT + AA);
}
Main(require('fs')[a0_0x5c04ec(0x2)]('/dev/stdin', a0_0x5c04ec(0x3)));