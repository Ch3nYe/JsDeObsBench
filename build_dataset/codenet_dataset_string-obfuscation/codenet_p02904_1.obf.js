function a0_0x1456(slWwDf, key) {
    var stringArray = a0_0x2ae0();
    a0_0x1456 = function (index, key) {
        index = index - 0x124;
        var value = stringArray[index];
        return value;
    };
    return a0_0x1456(slWwDf, key);
}
var a0_0x479a83 = a0_0x1456;
(function (stringArrayFunction, comparisonValue) {
    var _0x2dc2d4 = a0_0x1456;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x2dc2d4(0x124)) / 0x1 * (parseInt(_0x2dc2d4(0x12e)) / 0x2) + -parseInt(_0x2dc2d4(0x132)) / 0x3 * (parseInt(_0x2dc2d4(0x134)) / 0x4) + parseInt(_0x2dc2d4(0x136)) / 0x5 * (parseInt(_0x2dc2d4(0x128)) / 0x6) + parseInt(_0x2dc2d4(0x137)) / 0x7 + -parseInt(_0x2dc2d4(0x12f)) / 0x8 * (-parseInt(_0x2dc2d4(0x126)) / 0x9) + -parseInt(_0x2dc2d4(0x12b)) / 0xa + parseInt(_0x2dc2d4(0x12a)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2ae0, 0x77f46));
function Main(arg) {
    var _0xbaaffe = a0_0x1456;
    var N = arg['split']('\x0a')[0x0]['split']('\x20')[0x0] - 0x0;
    var K = arg[_0xbaaffe(0x131)]('\x0a')[0x0][_0xbaaffe(0x131)]('\x20')[0x1] - 0x0;
    var P = arg[_0xbaaffe(0x131)]('\x0a')[0x1]['split']('\x20')[_0xbaaffe(0x133)](v => v - 0x0);
    var ans = [];
    for (var i = 0x0; i < N - K + 0x1; i++) {
        var tmp = P[_0xbaaffe(0x12d)](i, i + K);
        tmp[_0xbaaffe(0x135)](compareNumbers);
        ans[i] = P['slice'](0x0, i)[_0xbaaffe(0x125)](tmp)[_0xbaaffe(0x125)](P['slice'](i + K))[_0xbaaffe(0x12c)]();
    }
    var aa = new Set(ans);
    console[_0xbaaffe(0x129)](aa[_0xbaaffe(0x127)]);
}
Main(require('fs')[a0_0x479a83(0x130)]('/dev/stdin', 'utf8'));
function compareNumbers(a, b) {
    return a - b;
}
function a0_0x2ae0() {
    var _0x59f959 = [
        '8kOkVvX',
        'readFileSync',
        'split',
        '6BEBKcP',
        'map',
        '580036ybPQpN',
        'sort',
        '32530jxwzMP',
        '3731000qjVREB',
        '48226yDfoaS',
        'concat',
        '895689gSTJbi',
        'size',
        '138qSJniw',
        'log',
        '14980086QCTQkr',
        '4463390CXZtHQ',
        'toString',
        'slice',
        '38NOUwsp'
    ];
    a0_0x2ae0 = function () {
        return _0x59f959;
    };
    return a0_0x2ae0();
}