var a0_0x440eae = a0_0x20b6;
(function (stringArrayFunction, comparisonValue) {
    var _0x5bd424 = a0_0x20b6;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x5bd424(0x11c)) / 0x1 + parseInt(_0x5bd424(0x119)) / 0x2 + parseInt(_0x5bd424(0x11f)) / 0x3 * (parseInt(_0x5bd424(0x125)) / 0x4) + -parseInt(_0x5bd424(0x118)) / 0x5 + -parseInt(_0x5bd424(0x11d)) / 0x6 + parseInt(_0x5bd424(0x122)) / 0x7 * (parseInt(_0x5bd424(0x120)) / 0x8) + parseInt(_0x5bd424(0x11a)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x9e32, 0x7dd65));
var a = [0x1];
for (var i = 0x1; i < 0x186a0; i++)
    a[i] = a[i - 0x1] + i + 0x1;
var b = [0x1];
function a0_0x9e32() {
    var _0x183411 = [
        'map',
        '24vnudtg',
        '8WhHMwN',
        'trim',
        '682857EQwMRn',
        'min',
        '/dev/stdin',
        '81988kgIffi',
        'log',
        'utf8',
        '3584635vYLykl',
        '1668240yoHfAn',
        '313578StvFCG',
        'readFileSync',
        '110722suUWzp',
        '53130FaEzma'
    ];
    a0_0x9e32 = function () {
        return _0x183411;
    };
    return a0_0x9e32();
}
var i = 0x1;
while (!![]) {
    b[i] = b[i - 0x1] + a[i];
    if (b[i] > 0x186a0)
        break;
    i++;
}
var dpA = [];
var dpB = [];
for (var i = 0x0; i < 0x186a0; i++)
    dpA[i] = Infinity;
function a0_0x20b6(QxTMjk, key) {
    var stringArray = a0_0x9e32();
    a0_0x20b6 = function (index, key) {
        index = index - 0x116;
        var value = stringArray[index];
        return value;
    };
    return a0_0x20b6(QxTMjk, key);
}
for (var i = 0x0; i < 0x186a0; i++)
    dpB[i] = Infinity;
dpA[0x0] = 0x0;
dpB[0x0] = 0x0;
for (var i = 0x0; i < 0x186a0; i++) {
    for (var j = 0x0; j < b['length']; j++) {
        if (i - b[j] >= 0x0)
            dpA[i] = Math[a0_0x440eae(0x123)](dpA[i - b[j]] + 0x1, dpA[i]);
        if (b[j] % 0x2 == 0x1 && i - b[j] >= 0x0)
            dpB[i] = Math[a0_0x440eae(0x123)](dpB[i - b[j]] + 0x1, dpB[i]);
    }
}
var input = require('fs')[a0_0x440eae(0x11b)](a0_0x440eae(0x124), a0_0x440eae(0x117));
var arr = input[a0_0x440eae(0x121)]()['split']('\x0a')[a0_0x440eae(0x11e)](Number);
while (!![]) {
    var n = arr['shift']();
    if (n == 0x0)
        break;
    console[a0_0x440eae(0x116)](dpA[n] + '\x20' + dpB[n]);
}