function a0_0x2d86(EqSQFf, key) {
    var stringArray = a0_0x4809();
    a0_0x2d86 = function (index, key) {
        index = index - 0x1df;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2d86(EqSQFf, key);
}
var a0_0x17a422 = a0_0x2d86;
function a0_0x4809() {
    var _0x1e1cb4 = [
        '4362147qYXGfG',
        '/dev/stdin',
        '303216lJtGUL',
        '1059LhYCRP',
        'map',
        '10AIzxCn',
        '46wQHecE',
        '67428hINfRF',
        'shift',
        '131581lLwtnc',
        'log',
        '8548410mcuyZc',
        '1514586ChcHnq',
        'split',
        '42QMzGYF'
    ];
    a0_0x4809 = function () {
        return _0x1e1cb4;
    };
    return a0_0x4809();
}
(function (stringArrayFunction, comparisonValue) {
    var _0x237f85 = a0_0x2d86;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x237f85(0x1eb)) / 0x1 + -parseInt(_0x237f85(0x1e8)) / 0x2 * (-parseInt(_0x237f85(0x1e5)) / 0x3) + parseInt(_0x237f85(0x1e9)) / 0x4 + parseInt(_0x237f85(0x1e7)) / 0x5 * (parseInt(_0x237f85(0x1df)) / 0x6) + -parseInt(_0x237f85(0x1e1)) / 0x7 * (-parseInt(_0x237f85(0x1e4)) / 0x8) + parseInt(_0x237f85(0x1e2)) / 0x9 + -parseInt(_0x237f85(0x1ed)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4809, 0x3e617));
var input = require('fs')['readFileSync'](a0_0x17a422(0x1e3), 'utf8');
var Arr = input['trim']()[a0_0x17a422(0x1e0)]('\x0a');
while (!![]) {
    var N = Arr[a0_0x17a422(0x1ea)]() - 0x0;
    if (N == 0x0)
        break;
    for (var I = 0x0; I < N; I++) {
        var A = Arr[a0_0x17a422(0x1ea)]()[a0_0x17a422(0x1e0)]('\x20')[a0_0x17a422(0x1e6)](Number);
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
        console[a0_0x17a422(0x1ec)](a + '\x20' + i + '\x20' + j + '\x20' + k);
    }
}