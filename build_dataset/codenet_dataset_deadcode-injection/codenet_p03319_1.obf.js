var a0_0x1b6a54 = a0_0x226f;
function Main(input) {
    var _0x421f74 = a0_0x226f;
    var NKA = input['split']('\x0a');
    var NK = NKA[0x0][_0x421f74(0x0)]('\x20');
    var N = parseInt(NK[0x0], 0xa);
    var K = parseInt(NK[0x1], 0xa);
    var A = NKA[0x1][_0x421f74(0x0)]('\x20')[_0x421f74(0x1)](v => parseInt(v, 0xa));
    var minPoint = A['indexOf'](0x1);
    var left = Math[_0x421f74(0x2)](minPoint / (K - 0x1));
    var right = Math[_0x421f74(0x2)]((N - minPoint - 0x1) / (K - 0x1));
    console[_0x421f74(0x3)](left + right);
}
function a0_0x226f(IJbIQL, key) {
    var stringArray = a0_0x3cf9();
    a0_0x226f = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x226f(IJbIQL, key);
}
function a0_0x3cf9() {
    var _0x42d409 = [
        'split',
        'map',
        'ceil',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3cf9 = function () {
        return _0x42d409;
    };
    return a0_0x3cf9();
}
Main(require('fs')[a0_0x1b6a54(0x4)](a0_0x1b6a54(0x5), a0_0x1b6a54(0x6)));