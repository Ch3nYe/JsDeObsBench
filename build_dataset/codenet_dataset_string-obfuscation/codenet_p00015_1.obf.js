function a0_0x3210(qHPjIH, key) {
    var stringArray = a0_0x23cf();
    a0_0x3210 = function (index, key) {
        index = index - 0x1d6;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3210(qHPjIH, key);
}
var a0_0x4342af = a0_0x3210;
(function (stringArrayFunction, comparisonValue) {
    var _0x54de34 = a0_0x3210;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x54de34(0x1db)) / 0x1 * (parseInt(_0x54de34(0x1d8)) / 0x2) + -parseInt(_0x54de34(0x1df)) / 0x3 * (-parseInt(_0x54de34(0x1e4)) / 0x4) + parseInt(_0x54de34(0x1e6)) / 0x5 + parseInt(_0x54de34(0x1dc)) / 0x6 * (parseInt(_0x54de34(0x1ea)) / 0x7) + parseInt(_0x54de34(0x1e3)) / 0x8 * (-parseInt(_0x54de34(0x1de)) / 0x9) + -parseInt(_0x54de34(0x1e5)) / 0xa + -parseInt(_0x54de34(0x1da)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x23cf, 0x5b97f));
function a0_0x23cf() {
    var _0x11cee9 = [
        '194slQAQn',
        'resume',
        '7128671SXsFhc',
        '5528tguQuu',
        '2035938LsVKPa',
        'slice',
        '1072044JGAxTo',
        '1378887ospwvW',
        'overflow',
        'log',
        'shift',
        '16zzWITp',
        '4IsRWGF',
        '6865870XNNufG',
        '3064395auoJZs',
        'stdin',
        'data',
        'reverse',
        '7WCbCyn',
        'concat',
        'length'
    ];
    a0_0x23cf = function () {
        return _0x11cee9;
    };
    return a0_0x23cf();
}
function pad(n) {
    var _0x2c2eac = a0_0x3210;
    while (n[_0x2c2eac(0x1d7)] < 0x7) {
        n = '0' + n;
    }
    return n;
}
function divide(s) {
    var _0x4a3cc7 = a0_0x3210;
    var a = [], i = 0x0, l = s[_0x4a3cc7(0x1d7)], d = 0x7;
    for (; (a[i] = s['slice']((i + 0x1) * -d, l + i * -d))[_0x4a3cc7(0x1d7)] > d - 0x1; i++);
    return a;
}
function unite(a) {
    var _0x5dc909 = a0_0x3210;
    return a[_0x5dc909(0x1d6)]()[_0x5dc909(0x1e9)]()['join']('')['replace'](/^0*/, '');
}
function largeSum(n, m) {
    var _0x3bc3f5 = a0_0x3210;
    for (var h = 0x0, o = [], i = 0x0, l = Math['max'](n[_0x3bc3f5(0x1d7)], m[_0x3bc3f5(0x1d7)]); i < l || h != 0x0; i++) {
        var a = ((parseInt(n[i], 0xa) || 0x0) + (parseInt(m[i], 0xa) || 0x0) + +h)['toString'](0xa);
        o[i] = a[_0x3bc3f5(0x1d7)] > 0x7 ? (h = a[_0x3bc3f5(0x1dd)](0x0, 0x1), a['slice'](0x1)) : (h = 0x0, pad(a));
    }
    return o;
}
process[a0_0x4342af(0x1e7)]['on'](a0_0x4342af(0x1e8), function (c) {
    var _0x3f960f = a0_0x4342af;
    var a = (c + '')['trim']()['split']('\x0a');
    for (var i = 0x0, l = +a[_0x3f960f(0x1e2)]() * 0x2; i < l; i += 0x2) {
        var s = unite(largeSum(divide(a[i]), divide(a[i + 0x1])));
        console[_0x3f960f(0x1e1)](s == '' ? 0x0 : s['length'] > 0x50 ? _0x3f960f(0x1e0) : s);
    }
})[a0_0x4342af(0x1d9)]();