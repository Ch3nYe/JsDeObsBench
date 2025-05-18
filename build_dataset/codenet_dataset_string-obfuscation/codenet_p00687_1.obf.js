var a0_0x38cbc5 = a0_0x1646;
(function (stringArrayFunction, comparisonValue) {
    var _0x55aabc = a0_0x1646;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x55aabc(0x1e2)) / 0x1 + parseInt(_0x55aabc(0x1e4)) / 0x2 + parseInt(_0x55aabc(0x1ea)) / 0x3 * (-parseInt(_0x55aabc(0x1f0)) / 0x4) + parseInt(_0x55aabc(0x1ec)) / 0x5 + -parseInt(_0x55aabc(0x1f2)) / 0x6 + -parseInt(_0x55aabc(0x1e9)) / 0x7 * (parseInt(_0x55aabc(0x1e6)) / 0x8) + parseInt(_0x55aabc(0x1e3)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x164e, 0x2a063));
function a0_0x164e() {
    var _0x48934a = [
        '135FjmYBj',
        '0\x200\x200',
        '1388410KZkolh',
        'trim',
        'readFileSync',
        'log',
        '14076kmMzbo',
        'split',
        '861786dNPWDg',
        'map',
        '274702SbFoSe',
        '5265351uBrXwN',
        '156766PSPekL',
        'utf8',
        '8VKKEjO',
        'forEach',
        '/dev/stdin',
        '1345995IqeRqi'
    ];
    a0_0x164e = function () {
        return _0x48934a;
    };
    return a0_0x164e();
}
var input = require('fs')[a0_0x38cbc5(0x1ee)](a0_0x38cbc5(0x1e8), a0_0x38cbc5(0x1e5));
var arr = input[a0_0x38cbc5(0x1ed)]()['split']('\x0a');
function a0_0x1646(yliTxm, key) {
    var stringArray = a0_0x164e();
    a0_0x1646 = function (index, key) {
        index = index - 0x1e1;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1646(yliTxm, key);
}
while (!![]) {
    var nab = arr['shift']();
    if (nab == a0_0x38cbc5(0x1eb))
        break;
    nab = nab[a0_0x38cbc5(0x1f1)]('\x20')[a0_0x38cbc5(0x1e1)](Number);
    var n = nab[0x0];
    var ab = [
        nab[0x1],
        nab[0x2]
    ];
    var dp = [];
    for (var i = 0x0; i <= n; i++)
        dp[i] = ![];
    dp[0x0] = !![];
    for (var i = 0x0; i < ab['length']; i++) {
        for (var j = 0x0; j <= n; j++) {
            if (dp[j])
                dp[j + ab[i]] = !![];
        }
    }
    var cnt = 0x0;
    dp[a0_0x38cbc5(0x1e7)](function (v) {
        if (v == ![])
            cnt++;
    });
    console[a0_0x38cbc5(0x1ef)](cnt);
}