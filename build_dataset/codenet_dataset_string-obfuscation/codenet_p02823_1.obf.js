var a0_0x512bac = a0_0x2729;
(function (stringArrayFunction, comparisonValue) {
    var _0x1462e8 = a0_0x2729;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = -parseInt(_0x1462e8(0x1e6)) / 0x1 + -parseInt(_0x1462e8(0x1ea)) / 0x2 + parseInt(_0x1462e8(0x1e7)) / 0x3 + -parseInt(_0x1462e8(0x1df)) / 0x4 + -parseInt(_0x1462e8(0x1e8)) / 0x5 + -parseInt(_0x1462e8(0x1e0)) / 0x6 * (parseInt(_0x1462e8(0x1db)) / 0x7) + parseInt(_0x1462e8(0x1dc)) / 0x8 * (parseInt(_0x1462e8(0x1e3)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1c6a, 0xda7f3));
function Main(input) {
    var _0x3d5c0b = a0_0x2729;
    const array = input[_0x3d5c0b(0x1de)]()[_0x3d5c0b(0x1e5)]('\x20')[_0x3d5c0b(0x1e9)](s => parseInt(s));
    const N = array[0x0];
    var A = array[0x1];
    var B = array[0x2];
    var ans = 0x0;
    var dist = B - A;
    if (dist % 0x2) {
        var diff = Math['min'](N - B, A - 0x1) + 0x1;
        ans += diff;
        ans += Math['floor']((B - A - 0x1) / 0x2);
    } else {
        ans = dist / 0x2;
    }
    console[_0x3d5c0b(0x1e4)](ans);
}
function a0_0x2729(umyhxV, key) {
    var stringArray = a0_0x1c6a();
    a0_0x2729 = function (index, key) {
        index = index - 0x1db;
        var value = stringArray[index];
        return value;
    };
    return a0_0x2729(umyhxV, key);
}
Main(require('fs')[a0_0x512bac(0x1e1)](a0_0x512bac(0x1e2), a0_0x512bac(0x1dd)));
function a0_0x1c6a() {
    var _0x393131 = [
        'trim',
        '2711336bFaErL',
        '306gxOXDB',
        'readFileSync',
        '/dev/stdin',
        '2903400woiMeG',
        'log',
        'split',
        '1208013UaJQOC',
        '1484106JJTEXL',
        '2850780KieNaH',
        'map',
        '1443524QlYzAY',
        '84518gGyONR',
        '104MBzQMN',
        'utf8'
    ];
    a0_0x1c6a = function () {
        return _0x393131;
    };
    return a0_0x1c6a();
}