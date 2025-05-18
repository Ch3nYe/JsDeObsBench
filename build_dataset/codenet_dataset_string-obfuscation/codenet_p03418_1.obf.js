var a0_0x419ec7 = a0_0x395d;
(function (stringArrayFunction, comparisonValue) {
    var _0x5b3628 = a0_0x395d;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x5b3628(0x1d0)) / 0x1 + parseInt(_0x5b3628(0x1c9)) / 0x2 * (-parseInt(_0x5b3628(0x1c7)) / 0x3) + parseInt(_0x5b3628(0x1c6)) / 0x4 + -parseInt(_0x5b3628(0x1c8)) / 0x5 + parseInt(_0x5b3628(0x1cc)) / 0x6 * (parseInt(_0x5b3628(0x1d1)) / 0x7) + -parseInt(_0x5b3628(0x1cd)) / 0x8 * (parseInt(_0x5b3628(0x1cb)) / 0x9) + parseInt(_0x5b3628(0x1ca)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1310, 0xa227f));
function Main(input) {
    var _0xc26a5e = a0_0x395d;
    var line = input[_0xc26a5e(0x1c4)]('\x0a');
    var tmp = line[0x0][_0xc26a5e(0x1c4)]('\x20');
    var maxint = Number(tmp[0x0]);
    var minrest = Number(tmp[0x1]);
    var ans = 0x0;
    for (var a = minrest || 0x1; a <= maxint; a++) {
        for (var b = minrest || 0x1; b <= maxint; b++) {
            if (a < b) {
                ans++;
            } else {
                if (a % b >= minrest)
                    ans++;
            }
        }
    }
    console[_0xc26a5e(0x1cf)](ans);
}
Main(require('fs')[a0_0x419ec7(0x1c3)](a0_0x419ec7(0x1c5), a0_0x419ec7(0x1ce)));
function a0_0x395d(VDhcYE, key) {
    var stringArray = a0_0x1310();
    a0_0x395d = function (index, key) {
        index = index - 0x1c3;
        var value = stringArray[index];
        return value;
    };
    return a0_0x395d(VDhcYE, key);
}
function a0_0x1310() {
    var _0x4e6d9b = [
        '15uDubmq',
        '4213230oRCRxB',
        '20862dCWBVQ',
        '3396590JiMLMS',
        '91071OZZkVu',
        '7564578iAksbz',
        '192nDAHYB',
        'utf8',
        'log',
        '304292AMSmta',
        '7LARgXg',
        'readFileSync',
        'split',
        '/dev/stdin',
        '2022872lOoKVv'
    ];
    a0_0x1310 = function () {
        return _0x4e6d9b;
    };
    return a0_0x1310();
}