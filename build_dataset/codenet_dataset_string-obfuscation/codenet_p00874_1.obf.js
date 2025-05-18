var a0_0x5cf7d0 = a0_0x415b;
(function (stringArrayFunction, comparisonValue) {
    var _0x1bbf5b = a0_0x415b;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x1bbf5b(0x183)) / 0x1 + parseInt(_0x1bbf5b(0x189)) / 0x2 + -parseInt(_0x1bbf5b(0x17d)) / 0x3 + -parseInt(_0x1bbf5b(0x18c)) / 0x4 * (-parseInt(_0x1bbf5b(0x187)) / 0x5) + parseInt(_0x1bbf5b(0x182)) / 0x6 + parseInt(_0x1bbf5b(0x18a)) / 0x7 * (-parseInt(_0x1bbf5b(0x184)) / 0x8) + -parseInt(_0x1bbf5b(0x18b)) / 0x9 * (-parseInt(_0x1bbf5b(0x17c)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x449a, 0x74ba1));
function a0_0x415b(HanENt, key) {
    var stringArray = a0_0x449a();
    a0_0x415b = function (index, key) {
        index = index - 0x17a;
        var value = stringArray[index];
        return value;
    };
    return a0_0x415b(HanENt, key);
}
function a0_0x449a() {
    var _0x954dd6 = [
        '85ftVHvD',
        'forEach',
        '1216878TPZhBo',
        '14EkIYtT',
        '613071SRLVCm',
        '45648HBfbGX',
        'trim',
        'reduce',
        '10qCSUKT',
        '2452320QcMzZj',
        '0\x200',
        'split',
        'map',
        'shift',
        '4278204ttWrZW',
        '181145eJvEEo',
        '1876752QpMmXh',
        '/dev/stdin',
        'log'
    ];
    a0_0x449a = function () {
        return _0x954dd6;
    };
    return a0_0x449a();
}
var input = require('fs')['readFileSync'](a0_0x5cf7d0(0x185), 'utf8');
var arr = input[a0_0x5cf7d0(0x17a)]()[a0_0x5cf7d0(0x17f)]('\x0a');
while (!![]) {
    var wd = arr['shift']();
    if (wd == a0_0x5cf7d0(0x17e))
        break;
    var W = arr['shift']()[a0_0x5cf7d0(0x17f)]('\x20')[a0_0x5cf7d0(0x180)](Number);
    var D = arr[a0_0x5cf7d0(0x181)]()[a0_0x5cf7d0(0x17f)]('\x20')[a0_0x5cf7d0(0x180)](Number);
    var sum = W[a0_0x5cf7d0(0x17b)](function (a, b) {
        return a + b;
    });
    D[a0_0x5cf7d0(0x188)](function (v) {
        var index = W['indexOf'](v);
        if (index != -0x1)
            W[index] = '';
        else
            sum += v;
    });
    console[a0_0x5cf7d0(0x186)](sum);
}