var a0_0x46cc8a = a0_0x3e46;
(function (stringArrayFunction, comparisonValue) {
    var _0x2520e0 = a0_0x3e46;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x2520e0(0x117)) / 0x1 + -parseInt(_0x2520e0(0x113)) / 0x2 * (parseInt(_0x2520e0(0x11e)) / 0x3) + -parseInt(_0x2520e0(0x11b)) / 0x4 * (parseInt(_0x2520e0(0x114)) / 0x5) + -parseInt(_0x2520e0(0x118)) / 0x6 + -parseInt(_0x2520e0(0x110)) / 0x7 * (parseInt(_0x2520e0(0x11d)) / 0x8) + parseInt(_0x2520e0(0x119)) / 0x9 * (parseInt(_0x2520e0(0x10f)) / 0xa) + parseInt(_0x2520e0(0x11a)) / 0xb * (parseInt(_0x2520e0(0x11f)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5152, 0xb9a33));
function a0_0x5152() {
    var _0x115cc2 = [
        'replace',
        '8fQlrXa',
        '1212132DPzWkE',
        '3312060EUbVQT',
        '670IxsslP',
        '6455197ZDictd',
        'forEach',
        'split',
        '2WxiSOS',
        '3510oCqBst',
        'readFileSync',
        '/dev/stdin',
        '1351016NWAyqD',
        '1063230hlSILT',
        '143199JiTkyC',
        '44BkgppR',
        '7164OepKmV'
    ];
    a0_0x5152 = function () {
        return _0x115cc2;
    };
    return a0_0x5152();
}
var input = require('fs')[a0_0x46cc8a(0x115)](a0_0x46cc8a(0x116), 'utf8');
function a0_0x3e46(IcPwkt, key) {
    var stringArray = a0_0x5152();
    a0_0x3e46 = function (index, key) {
        index = index - 0x10f;
        var value = stringArray[index];
        return value;
    };
    return a0_0x3e46(IcPwkt, key);
}
var Arr = input['trim']()[a0_0x46cc8a(0x112)]('\x0a');
Arr[a0_0x46cc8a(0x111)](function (v) {
    var _0x298e72 = a0_0x46cc8a;
    v = v[_0x298e72(0x11c)](/@(\d)(.)/g, function (s, s1, s2) {
        return Array(s1 - 0x0 + 0x1)['join'](s2);
    });
    console['log'](v);
});