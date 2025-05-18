var a0_0x20d073 = a0_0x2612;
(function (stringArrayFunction, comparisonValue) {
    var _0x5840dc = a0_0x2612;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x5840dc(0x1f3)) / 0x1 * (parseInt(_0x5840dc(0x1fa)) / 0x2) + parseInt(_0x5840dc(0x1f0)) / 0x3 * (parseInt(_0x5840dc(0x1f4)) / 0x4) + -parseInt(_0x5840dc(0x200)) / 0x5 * (-parseInt(_0x5840dc(0x1f9)) / 0x6) + -parseInt(_0x5840dc(0x1fe)) / 0x7 * (parseInt(_0x5840dc(0x1ff)) / 0x8) + -parseInt(_0x5840dc(0x1f1)) / 0x9 * (-parseInt(_0x5840dc(0x1f6)) / 0xa) + parseInt(_0x5840dc(0x1fd)) / 0xb * (parseInt(_0x5840dc(0x1f2)) / 0xc) + parseInt(_0x5840dc(0x1f8)) / 0xd;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2750, 0x66257));
var input = require('fs')[a0_0x20d073(0x203)](a0_0x20d073(0x1fb), a0_0x20d073(0x1f7));
var arr = input['trim']()['split']('\x0a');
var n = arr[a0_0x20d073(0x1f5)]() - 0x0;
var p = arr[a0_0x20d073(0x1f5)]()[a0_0x20d073(0x202)]('\x20')[a0_0x20d073(0x201)](Number);
var ans = 0x0;
function a0_0x2612(JiRDxp, key) {
    var stringArray = a0_0x2750();
    a0_0x2612 = function (index, key) {
        index = index - 0x1f0;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2612(JiRDxp, key);
}
for (var i = 0x1; i <= 0x64; i++) {
    var cnt = 0x0;
    p[a0_0x20d073(0x1fc)](v => {
        if (v >= i)
            cnt++;
    });
    if (cnt >= i)
        ans = i;
}
function a0_0x2750() {
    var _0x1059cc = [
        '403672xuDQkj',
        '181705SBnLmG',
        'map',
        'split',
        'readFileSync',
        '1626oLNEkm',
        '57195MuBjUN',
        '4164XWMqkt',
        '678728zbIdKq',
        '4504WHnNwl',
        'shift',
        '150HaZcWn',
        'utf8',
        '1835678zazABR',
        '6MfmORF',
        '2lBcRvy',
        '/dev/stdin',
        'forEach',
        '8382lvFQSb',
        '7BrpXhS'
    ];
    a0_0x2750 = function () {
        return _0x1059cc;
    };
    return a0_0x2750();
}
console['log'](ans);