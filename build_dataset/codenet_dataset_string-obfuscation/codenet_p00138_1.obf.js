var a0_0x9d5e77 = a0_0x5b89;
(function (stringArrayFunction, comparisonValue) {
    var _0x14e93b = a0_0x5b89;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x14e93b(0x1a2)) / 0x1 + parseInt(_0x14e93b(0x194)) / 0x2 * (parseInt(_0x14e93b(0x1a7)) / 0x3) + -parseInt(_0x14e93b(0x193)) / 0x4 * (parseInt(_0x14e93b(0x1a9)) / 0x5) + parseInt(_0x14e93b(0x19a)) / 0x6 + parseInt(_0x14e93b(0x1a5)) / 0x7 * (parseInt(_0x14e93b(0x1a4)) / 0x8) + parseInt(_0x14e93b(0x195)) / 0x9 * (-parseInt(_0x14e93b(0x19b)) / 0xa) + -parseInt(_0x14e93b(0x199)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4673, 0x5a733));
var input = require('fs')[a0_0x9d5e77(0x1a6)](a0_0x9d5e77(0x19e), a0_0x9d5e77(0x19c));
var Arr = input[a0_0x9d5e77(0x198)]()[a0_0x9d5e77(0x1a0)]('\x0a');
var abc = [
    [],
    [],
    []
];
var obj = {};
function a0_0x5b89(xOpXHb, key) {
    var stringArray = a0_0x4673();
    a0_0x5b89 = function (index, key) {
        index = index - 0x193;
        var value = stringArray[index];
        return value;
    };
    return a0_0x5b89(xOpXHb, key);
}
for (var i = 0x0; i < Arr[a0_0x9d5e77(0x19d)]; i++) {
    var arr = Arr[i][a0_0x9d5e77(0x1a0)]('\x20')[a0_0x9d5e77(0x1a1)](Number);
    abc[Math[a0_0x9d5e77(0x1a8)](i / 0x8)]['push'](arr[0x1]);
    obj[arr[0x1]] = arr[0x0];
}
for (var i = 0x0; i < 0x3; i++)
    abc[i][a0_0x9d5e77(0x197)](function (a, b) {
        return a - b;
    });
function a0_0x4673() {
    var _0x169597 = [
        'push',
        'sort',
        'trim',
        '10480745lYASKJ',
        '3655422XZVmio',
        '1420OgUseX',
        'utf8',
        'length',
        '/dev/stdin',
        'log',
        'split',
        'map',
        '97319CbNoyF',
        'toFixed',
        '5730664XonaXy',
        '7CLWQQG',
        'readFileSync',
        '373362aWdcfB',
        'floor',
        '5RZGjDi',
        '93532FaJkef',
        '4rLbnaZ',
        '8271uVUKSF'
    ];
    a0_0x4673 = function () {
        return _0x169597;
    };
    return a0_0x4673();
}
console['log'](obj[abc[0x0][0x0]] + '\x20' + abc[0x0][0x0]['toFixed'](0x2));
console['log'](obj[abc[0x0][0x1]] + '\x20' + abc[0x0][0x1][a0_0x9d5e77(0x1a3)](0x2));
console[a0_0x9d5e77(0x19f)](obj[abc[0x1][0x0]] + '\x20' + abc[0x1][0x0][a0_0x9d5e77(0x1a3)](0x2));
console['log'](obj[abc[0x1][0x1]] + '\x20' + abc[0x1][0x1][a0_0x9d5e77(0x1a3)](0x2));
console[a0_0x9d5e77(0x19f)](obj[abc[0x2][0x0]] + '\x20' + abc[0x2][0x0][a0_0x9d5e77(0x1a3)](0x2));
console[a0_0x9d5e77(0x19f)](obj[abc[0x2][0x1]] + '\x20' + abc[0x2][0x1][a0_0x9d5e77(0x1a3)](0x2));
var d = [];
for (var i = 0x0; i < 0x3; i++)
    d[a0_0x9d5e77(0x196)](abc[i][0x2]);
d[a0_0x9d5e77(0x197)](function (a, b) {
    return a - b;
});
console[a0_0x9d5e77(0x19f)](obj[d[0x0]] + '\x20' + d[0x0]['toFixed'](0x2));
console[a0_0x9d5e77(0x19f)](obj[d[0x1]] + '\x20' + d[0x1][a0_0x9d5e77(0x1a3)](0x2));