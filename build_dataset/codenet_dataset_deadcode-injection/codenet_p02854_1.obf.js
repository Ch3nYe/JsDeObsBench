function a0_0x5ca3() {
    var _0x4e2721 = [
        'split',
        'log',
        'abs',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x5ca3 = function () {
        return _0x4e2721;
    };
    return a0_0x5ca3();
}
function a0_0x1a40(yoLvmQ, key) {
    var stringArray = a0_0x5ca3();
    a0_0x1a40 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1a40(yoLvmQ, key);
}
var a0_0x1a9390 = a0_0x1a40;
function Main(input) {
    var _0x467587 = a0_0x1a40;
    var N = parseInt(input[0x0], 0xa);
    var A = input[0x1][_0x467587(0x0)]('\x20');
    var total = 0x0;
    for (var i = 0x0; i < N; i++) {
        A[i] = parseInt(A[i], 0xa);
        total += A[i];
    }
    var result = 0x0;
    var mae = 0x0;
    var ato = 0x0;
    var target = 0x0;
    for (var i = 0x0; i < N; i++) {
        if (mae + A[i] < total / 0x2) {
            mae += A[i];
        } else if (mae + A[i] == total / 0x2) {
            console[_0x467587(0x1)]('%s', 0x0);
            return;
        } else {
            target = i;
            ato = total - mae - A[i];
            break;
        }
    }
    var diff = Math['abs'](ato - mae);
    var result = Math[_0x467587(0x2)](A[i] - diff);
    console[_0x467587(0x1)]('%s', result);
}
Main(require('fs')[a0_0x1a9390(0x3)](a0_0x1a9390(0x4), a0_0x1a9390(0x5))[a0_0x1a9390(0x0)]('\x0a'));