var a0_0x4704fe = a0_0x5bbb;
(function (stringArrayFunction, comparisonValue) {
    var _0x234228 = a0_0x5bbb;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x234228(0xcb)) / 0x1 * (-parseInt(_0x234228(0xd0)) / 0x2) + -parseInt(_0x234228(0xd8)) / 0x3 + -parseInt(_0x234228(0xd2)) / 0x4 + -parseInt(_0x234228(0xd4)) / 0x5 + -parseInt(_0x234228(0xca)) / 0x6 * (parseInt(_0x234228(0xd9)) / 0x7) + -parseInt(_0x234228(0xd1)) / 0x8 * (parseInt(_0x234228(0xd6)) / 0x9) + parseInt(_0x234228(0xcd)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x51ba, 0x6d3b9));
var input = require('fs')['readFileSync'](a0_0x4704fe(0xce), a0_0x4704fe(0xcf));
var arr = input[a0_0x4704fe(0xcc)]('\x0a');
var nq = arr[0x0][a0_0x4704fe(0xcc)]('\x20')[a0_0x4704fe(0xd5)](Number);
var str = arr[0x1];
var a = [
    0x0,
    0x0
];
var cnt = 0x0;
function a0_0x51ba() {
    var _0x2a93d0 = [
        '168Jjqbba',
        '1291552qRVAYL',
        'push',
        '384255oiYmNA',
        'map',
        '369153NDiAGG',
        'join',
        '1617138CTrjKm',
        '5558049WWDasG',
        '6sdyXkB',
        '739994dqsxkl',
        'split',
        '23015720REIYVK',
        '/dev/stdin',
        'utf8',
        '2dgeLMC'
    ];
    a0_0x51ba = function () {
        return _0x2a93d0;
    };
    return a0_0x51ba();
}
for (var i = 0x1; i < str['length']; i++) {
    if (str[i] == 'C' && str[i - 0x1] == 'A')
        cnt++;
    a['push'](cnt);
}
var ans = [];
for (var i = 0x2, len = nq[0x1] + 0x2; i < len; i++) {
    var lr = arr[i]['split']('\x20');
    ans[a0_0x4704fe(0xd3)](a[lr[0x1] - 0x0] - a[lr[0x0] - 0x0]);
}
function a0_0x5bbb(yfrwyh, key) {
    var stringArray = a0_0x51ba();
    a0_0x5bbb = function (index, key) {
        index = index - 0xca;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5bbb(yfrwyh, key);
}
console['log'](ans[a0_0x4704fe(0xd7)]('\x0a'));