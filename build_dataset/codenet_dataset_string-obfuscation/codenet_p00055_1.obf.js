var a0_0x1f960d = a0_0x446e;
(function (stringArrayFunction, comparisonValue) {
    var _0xc50bf6 = a0_0x446e;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0xc50bf6(0x1d9)) / 0x1 + parseInt(_0xc50bf6(0x1e3)) / 0x2 + parseInt(_0xc50bf6(0x1e1)) / 0x3 + -parseInt(_0xc50bf6(0x1dc)) / 0x4 * (-parseInt(_0xc50bf6(0x1e2)) / 0x5) + -parseInt(_0xc50bf6(0x1d6)) / 0x6 * (parseInt(_0xc50bf6(0x1d8)) / 0x7) + -parseInt(_0xc50bf6(0x1e0)) / 0x8 * (-parseInt(_0xc50bf6(0x1dd)) / 0x9) + parseInt(_0xc50bf6(0x1de)) / 0xa * (-parseInt(_0xc50bf6(0x1d7)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xe134, 0xaae22));
function a0_0xe134() {
    var _0x31596d = [
        'utf8',
        'forEach',
        '2132HPJCcR',
        '4149JcYXkm',
        '21410dsfQZl',
        'toFixed',
        '23536zlQyQC',
        '776226bLdMIP',
        '85ZqplrU',
        '1930898JNjxDu',
        'readFileSync',
        '/dev/stdin',
        'map',
        '750JXTcTD',
        '2035DbUsnc',
        '15316oapezB',
        '1219991kcdUEK'
    ];
    a0_0xe134 = function () {
        return _0x31596d;
    };
    return a0_0xe134();
}
function a0_0x446e(QNfVwg, key) {
    var stringArray = a0_0xe134();
    a0_0x446e = function (index, key) {
        index = index - 0x1d3;
        var value = stringArray[index];
        return value;
    };
    return a0_0x446e(QNfVwg, key);
}
var input = require('fs')[a0_0x1f960d(0x1d3)](a0_0x1f960d(0x1d4), a0_0x1f960d(0x1da));
var Arr = input['trim']()['split']('\x0a')[a0_0x1f960d(0x1d5)](Number);
Arr[a0_0x1f960d(0x1db)](function (v) {
    var _0x4eec2f = a0_0x1f960d;
    var arr = [
        0x0,
        v
    ];
    for (var i = 0x2; i <= 0xa; i++) {
        arr[i] = i % 0x2 == 0x0 ? arr[i - 0x1] * 0x2 : arr[i - 0x1] / 0x3;
    }
    var sum = arr['reduce'](function (a, b) {
        return a + b;
    });
    console['log'](sum[_0x4eec2f(0x1df)](0x8));
});