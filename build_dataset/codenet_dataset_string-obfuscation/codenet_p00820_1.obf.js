var a0_0x3d20fe = a0_0x3797;
(function (stringArrayFunction, comparisonValue) {
    var _0x453c9b = a0_0x3797;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x453c9b(0xdf)) / 0x1 + parseInt(_0x453c9b(0xd7)) / 0x2 * (-parseInt(_0x453c9b(0xd9)) / 0x3) + -parseInt(_0x453c9b(0xe4)) / 0x4 * (parseInt(_0x453c9b(0xe2)) / 0x5) + parseInt(_0x453c9b(0xdc)) / 0x6 * (parseInt(_0x453c9b(0xe5)) / 0x7) + parseInt(_0x453c9b(0xe6)) / 0x8 * (-parseInt(_0x453c9b(0xda)) / 0x9) + -parseInt(_0x453c9b(0xe1)) / 0xa + parseInt(_0x453c9b(0xde)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x327e, 0x5c9af));
function a0_0x3797(qRBKsP, key) {
    var stringArray = a0_0x327e();
    a0_0x3797 = function (index, key) {
        index = index - 0xd7;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3797(qRBKsP, key);
}
var input = require('fs')['readFileSync'](a0_0x3d20fe(0xdd), 'utf8');
var arr = input[a0_0x3d20fe(0xdb)]()[a0_0x3d20fe(0xe3)]('\x0a')['map'](Number);
arr[a0_0x3d20fe(0xd8)](function (v) {
    var _0x1f57df = a0_0x3d20fe;
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
    console[_0x1f57df(0xe0)](cnt);
});
function a0_0x327e() {
    var _0x433c1f = [
        '1860cqXJqY',
        'split',
        '296nWqnMT',
        '7mTIWrx',
        '8EJEXKO',
        '4UFgtRG',
        'some',
        '1096734xAQwBF',
        '3960279ZoKkNL',
        'trim',
        '3413490LtxDTS',
        '/dev/stdin',
        '7973735DMTSMN',
        '705020fSjhzg',
        'log',
        '4207940BFJKER'
    ];
    a0_0x327e = function () {
        return _0x433c1f;
    };
    return a0_0x327e();
}