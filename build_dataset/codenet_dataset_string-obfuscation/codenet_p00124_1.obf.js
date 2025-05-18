function a0_0xdc42(LpqPFd, key) {
    var stringArray = a0_0x5153();
    a0_0xdc42 = function (index, key) {
        index = index - 0x136;
        var value = stringArray[index];
        return value;
    };
    return a0_0xdc42(LpqPFd, key);
}
function a0_0x5153() {
    var _0x37afdc = [
        '/dev/stdin',
        '1276ePykCw',
        '3080020SEZwli',
        'split',
        'shift',
        'floor',
        '904600DwahKJ',
        'push',
        'log',
        'forEach',
        '559594eYjbFF',
        '8935024FfNbtX',
        '30YfjLhp',
        '2922hwcRKf',
        'sort',
        '36UrSKRl',
        'trim',
        '1176175oorKea',
        'readFileSync',
        '127446bTmTqV'
    ];
    a0_0x5153 = function () {
        return _0x37afdc;
    };
    return a0_0x5153();
}
var a0_0x16edff = a0_0xdc42;
(function (stringArrayFunction, comparisonValue) {
    var _0x13d654 = a0_0xdc42;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x13d654(0x148)) / 0x1 + -parseInt(_0x13d654(0x13d)) / 0x2 + parseInt(_0x13d654(0x137)) / 0x3 * (parseInt(_0x13d654(0x13f)) / 0x4) + parseInt(_0x13d654(0x140)) / 0x5 + -parseInt(_0x13d654(0x136)) / 0x6 * (-parseInt(_0x13d654(0x13b)) / 0x7) + -parseInt(_0x13d654(0x149)) / 0x8 + -parseInt(_0x13d654(0x139)) / 0x9 * (parseInt(_0x13d654(0x144)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5153, 0xbf674));
var input = require('fs')[a0_0x16edff(0x13c)](a0_0x16edff(0x13e), 'utf8');
var Arr = input[a0_0x16edff(0x13a)]()[a0_0x16edff(0x141)]('\x0a');
var I = 0x0;
while (!![]) {
    var n = Arr[a0_0x16edff(0x142)]() - 0x0;
    if (n == 0x0)
        break;
    if (I != 0x0)
        console[a0_0x16edff(0x146)]('');
    I++;
    var rank = [];
    for (var i = 0x0; i < n; i++) {
        var arr = Arr[a0_0x16edff(0x142)]()['split']('\x20');
        var score = 0x3 * (arr[0x1] - 0x0) + (arr[0x3] - 0x0) + (0xa - i) * 0.01;
        rank[a0_0x16edff(0x145)]([
            arr[0x0],
            score
        ]);
    }
    rank[a0_0x16edff(0x138)](function (a, b) {
        a = a[0x1];
        b = b[0x1];
        return b - a;
    });
    rank[a0_0x16edff(0x147)](function (v) {
        var _0x1e5107 = a0_0x16edff;
        console[_0x1e5107(0x146)](v[0x0] + ',' + Math[_0x1e5107(0x143)](v[0x1]));
    });
}