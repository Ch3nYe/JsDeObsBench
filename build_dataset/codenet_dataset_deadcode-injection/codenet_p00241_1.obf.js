var a0_0x51a291 = a0_0x1371;
var input = require('fs')['readFileSync'](a0_0x51a291(0x0), a0_0x51a291(0x1));
var Arr = input[a0_0x51a291(0x2)]()[a0_0x51a291(0x3)]('\x0a');
function a0_0x270e() {
    var _0x3f2a5f = [
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'shift',
        'map'
    ];
    a0_0x270e = function () {
        return _0x3f2a5f;
    };
    return a0_0x270e();
}
function a0_0x1371(uMfLiw, key) {
    var stringArray = a0_0x270e();
    a0_0x1371 = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1371(uMfLiw, key);
}
while (!![]) {
    var N = Arr[a0_0x51a291(0x4)]() - 0x0;
    if (N == 0x0)
        break;
    for (var I = 0x0; I < N; I++) {
        var A = Arr['shift']()[a0_0x51a291(0x3)]('\x20')[a0_0x51a291(0x5)](Number);
        var x1 = A[0x0];
        var y1 = A[0x1];
        var z1 = A[0x2];
        var w1 = A[0x3];
        var x2 = A[0x4];
        var y2 = A[0x5];
        var z2 = A[0x6];
        var w2 = A[0x7];
        var a = x1 * x2;
        var i = x1 * y2;
        var j = x1 * z2;
        var k = x1 * w2;
        i += y1 * x2;
        a -= y1 * y2;
        k += y1 * z2;
        j -= y1 * w2;
        j += z1 * x2;
        k -= z1 * y2;
        a -= z1 * z2;
        i += z1 * w2;
        k += w1 * x2;
        j += w1 * y2;
        i -= w1 * z2;
        a -= w1 * w2;
        console['log'](a + '\x20' + i + '\x20' + j + '\x20' + k);
    }
}