const a0_0x214d9e = a0_0x3861;
function Main(input) {
    const _0x1932e7 = a0_0x3861;
    input = input[_0x1932e7(0x0)]('\x0a');
    const row1 = input[0x0][_0x1932e7(0x0)]('\x20');
    const N = parseInt(row1[0x0]);
    const M = parseInt(row1[0x1]);
    const K = parseInt(row1[0x2]);
    var S = parseInt(input[0x1], 0x2);
    var T = parseInt(input[0x2], 0x2);
    for (var i = 0x0; i < K; i++) {
        var sANDt = S & T;
        S = S + sANDt;
        T = T + sANDt;
    }
    const sBinary = toBinary(S);
    const tBinary = toBinary(T);
    console[_0x1932e7(0x1)](sBinary);
    console[_0x1932e7(0x1)](tBinary);
}
function toBinary(a) {
    var num = a, binary = '';
    while (num > 0x0) {
        binary = num % 0x2 + binary;
        num = Math['floor'](num / 0x2);
    }
    return binary;
}
function a0_0x56ed() {
    const _0x3ab6fc = [
        'split',
        'log',
        'readFileSync'
    ];
    a0_0x56ed = function () {
        return _0x3ab6fc;
    };
    return a0_0x56ed();
}
function a0_0x3861(sJRZpQ, key) {
    const stringArray = a0_0x56ed();
    a0_0x3861 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3861(sJRZpQ, key);
}
Main(require('fs')[a0_0x214d9e(0x2)]('/dev/stdin', 'utf8'));