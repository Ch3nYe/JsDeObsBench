var a0_0xbc2ec1 = a0_0x2a38;
function a0_0x2a38(bLzNaG, key) {
    var stringArray = a0_0x2626();
    a0_0x2a38 = function (index, key) {
        index = index - 0x15c;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2a38(bLzNaG, key);
}
(function (stringArrayFunction, comparisonValue) {
    var _0x6c6c89 = a0_0x2a38;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x6c6c89(0x15e)) / 0x1 + parseInt(_0x6c6c89(0x15d)) / 0x2 * (parseInt(_0x6c6c89(0x16c)) / 0x3) + -parseInt(_0x6c6c89(0x164)) / 0x4 * (-parseInt(_0x6c6c89(0x161)) / 0x5) + -parseInt(_0x6c6c89(0x168)) / 0x6 * (parseInt(_0x6c6c89(0x169)) / 0x7) + parseInt(_0x6c6c89(0x15c)) / 0x8 * (-parseInt(_0x6c6c89(0x16b)) / 0x9) + parseInt(_0x6c6c89(0x160)) / 0xa + parseInt(_0x6c6c89(0x16d)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2626, 0x246d3));
var input = require('fs')[a0_0xbc2ec1(0x165)](a0_0xbc2ec1(0x166), a0_0xbc2ec1(0x163));
var arr = input['trim']()['split']('\x0a');
var n = arr[a0_0xbc2ec1(0x162)]() - 0x0;
function a0_0x2626() {
    var _0x276cc9 = [
        'utf8',
        '88NcyxTH',
        'readFileSync',
        '/dev/stdin',
        'map',
        '317964VobRsB',
        '35grTaMC',
        'trim',
        '275067aoELnQ',
        '551505NkmYmw',
        '3946261ZNTcKP',
        '32olUNqd',
        '2NHxmmi',
        '288435igReam',
        'split',
        '758480MeILmT',
        '46915vQyfRg',
        'shift'
    ];
    a0_0x2626 = function () {
        return _0x276cc9;
    };
    return a0_0x2626();
}
var a = arr[a0_0xbc2ec1(0x162)]()[a0_0xbc2ec1(0x15f)]('\x20')['map'](Number);
var q = arr[a0_0xbc2ec1(0x162)]() - 0x0;
var s = '';
for (var i = 0x0; i < q; i++) {
    var [b, e, k] = arr[i]['split']('\x20')[a0_0xbc2ec1(0x167)](Number);
    var cnt = 0x0;
    for (var j = b; j < e; j++) {
        if (a[j] == k)
            cnt++;
    }
    s += cnt + '\x0a';
}
console['log'](s[a0_0xbc2ec1(0x16a)]());