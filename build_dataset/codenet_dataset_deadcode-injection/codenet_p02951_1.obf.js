var a0_0x5c5880 = a0_0x59c1;
function Main(input) {
    var _0x4c9f8e = a0_0x59c1;
    var a, b, c;
    a = Number(input[_0x4c9f8e(0x0)]('\x0a')[0x0][_0x4c9f8e(0x0)]('\x20')[0x0]);
    b = Number(input[_0x4c9f8e(0x0)]('\x0a')[0x0][_0x4c9f8e(0x0)]('\x20')[0x1]);
    c = Number(input[_0x4c9f8e(0x0)]('\x0a')[0x0][_0x4c9f8e(0x0)]('\x20')[0x2]);
    console[_0x4c9f8e(0x1)](c - (a - b) > 0x0 ? c - (a - b) : 0x0);
}
Main(require('fs')[a0_0x5c5880(0x2)](a0_0x5c5880(0x3), a0_0x5c5880(0x4)));
function a0_0x59c1(myJFcR, key) {
    var stringArray = a0_0x33f2();
    a0_0x59c1 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x59c1(myJFcR, key);
}
function a0_0x33f2() {
    var _0xe9abd = [
        'split',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x33f2 = function () {
        return _0xe9abd;
    };
    return a0_0x33f2();
}