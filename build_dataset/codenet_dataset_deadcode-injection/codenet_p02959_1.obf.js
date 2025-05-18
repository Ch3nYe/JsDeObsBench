var a0_0x564fec = a0_0x11c0;
function a0_0x5b54() {
    var _0x59e3be = [
        'split',
        'map',
        'min',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x5b54 = function () {
        return _0x59e3be;
    };
    return a0_0x5b54();
}
function a0_0x11c0(ahXCVw, key) {
    var stringArray = a0_0x5b54();
    a0_0x11c0 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x11c0(ahXCVw, key);
}
function Main(input) {
    var _0x5392e0 = a0_0x11c0;
    input = input[_0x5392e0(0x0)]('\x0a');
    var n = parseInt(input[0x0], 0xa);
    var a = input[0x1][_0x5392e0(0x0)]('\x20');
    a = a[_0x5392e0(0x1)](str => parseInt(str, 0xa));
    var b = input[0x2][_0x5392e0(0x0)]('\x20');
    b = b['map'](str => parseInt(str, 0xa));
    var count = 0x0;
    for (var i = 0x0; i < n; i++) {
        var atarget = a[i] + a[i + 0x1];
        var rest = atarget - b[i];
        if (rest < 0x0) {
            count += atarget;
            a[i + 0x1] = 0x0;
        } else {
            count += b[i];
            a[i + 0x1] = Math[_0x5392e0(0x2)](rest, a[i + 0x1]);
        }
    }
    console[_0x5392e0(0x3)](count);
}
Main(require('fs')[a0_0x564fec(0x4)](a0_0x564fec(0x5), a0_0x564fec(0x6)));