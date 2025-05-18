function a0_0x38ff(nJIMui, key) {
    var stringArray = a0_0x2b3c();
    a0_0x38ff = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x38ff(nJIMui, key);
}
var a0_0x2b5d67 = a0_0x38ff;
function a0_0x2b3c() {
    var _0x3a121d = [
        'split',
        'length',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x2b3c = function () {
        return _0x3a121d;
    };
    return a0_0x2b3c();
}
function Main(input) {
    var _0x32eb58 = a0_0x38ff;
    var counter = function (str, seq) {
        var _0x3214f2 = a0_0x38ff;
        return str[_0x3214f2(0x0)](seq)[_0x3214f2(0x1)] - 0x1;
    };
    lines = input[_0x32eb58(0x0)]('\x0a');
    var s = lines[0x0];
    var bw = counter(s, 'BW');
    var wb = counter(s, 'WB');
    console[_0x32eb58(0x2)](bw + wb);
}
Main(require('fs')[a0_0x2b5d67(0x3)](a0_0x2b5d67(0x4), a0_0x2b5d67(0x5)));