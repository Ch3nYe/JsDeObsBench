var a0_0x5f59a3 = a0_0x3c8c;
function a0_0x2258() {
    var _0x4d95b1 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'trim',
        'split',
        'map',
        'some',
        'log'
    ];
    a0_0x2258 = function () {
        return _0x4d95b1;
    };
    return a0_0x2258();
}
var input = require('fs')[a0_0x5f59a3(0x0)](a0_0x5f59a3(0x1), a0_0x5f59a3(0x2));
var arr = input[a0_0x5f59a3(0x3)]()[a0_0x5f59a3(0x4)]('\x0a')[a0_0x5f59a3(0x5)](Number);
function a0_0x3c8c(XSFSva, key) {
    var stringArray = a0_0x2258();
    a0_0x3c8c = function (index, key) {
        index = index - 0x0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3c8c(XSFSva, key);
}
arr[a0_0x5f59a3(0x6)](function (v) {
    var _0x1cb1e3 = a0_0x3c8c;
    if (v == 0x0)
        return !![];
    var cnt = 0x0;
    for (var a = 0x1; a <= 0xb5; a++) {
        var A = a * a;
        if (v < A)
            break;
        if (A == v)
            cnt++;
        for (var b = a; b <= 0xb5; b++) {
            var B = A + b * b;
            if (v < B)
                break;
            if (B == v)
                cnt++;
            for (var c = b; c <= 0xb5; c++) {
                var C = B + c * c;
                if (v < C)
                    break;
                if (C == v)
                    cnt++;
                for (var d = c; d <= 0xb5; d++) {
                    var D = C + d * d;
                    if (v < D)
                        break;
                    if (D == v)
                        cnt++;
                }
            }
        }
    }
    console[_0x1cb1e3(0x7)](cnt);
});