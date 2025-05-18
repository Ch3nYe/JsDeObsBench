function a0_0x523a(SGCHNH, key) {
    var stringArray = a0_0x53ee();
    a0_0x523a = function (index, key) {
        index = index - 0x184;
        var value = stringArray[index];
        return value;
    };
    return a0_0x523a(SGCHNH, key);
}
var a0_0x33cf98 = a0_0x523a;
(function (stringArrayFunction, comparisonValue) {
    var _0x3550f9 = a0_0x523a;
    var stringArray = stringArrayFunction();
    while (!![]) {
        try {
            var expression = parseInt(_0x3550f9(0x18c)) / 0x1 + -parseInt(_0x3550f9(0x187)) / 0x2 * (parseInt(_0x3550f9(0x18f)) / 0x3) + parseInt(_0x3550f9(0x190)) / 0x4 * (-parseInt(_0x3550f9(0x191)) / 0x5) + -parseInt(_0x3550f9(0x193)) / 0x6 + parseInt(_0x3550f9(0x18a)) / 0x7 * (parseInt(_0x3550f9(0x186)) / 0x8) + parseInt(_0x3550f9(0x188)) / 0x9 + parseInt(_0x3550f9(0x192)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x53ee, 0x51bfe));
function a0_0x53ee() {
    var _0x28553a = [
        '15lCFkNv',
        '5112600NuDSuf',
        '3340908hYGaCM',
        'split',
        '/dev/stdin',
        'utf8',
        '1670152YLwWAB',
        '424wZRJrQ',
        '4663035WBEODp',
        'readFileSync',
        '14KvxCHr',
        'abs',
        '161939stTFwh',
        'map',
        'log',
        '7203DPItUi',
        '277568TjpvvI'
    ];
    a0_0x53ee = function () {
        return _0x28553a;
    };
    return a0_0x53ee();
}
function Main(s) {
    var _0x4996c6 = a0_0x523a;
    var s = s[_0x4996c6(0x194)]('\x0a');
    var n = parseInt(s[0x0], 0xa);
    var a = s[0x1][_0x4996c6(0x194)]('\x20')[_0x4996c6(0x18d)](e => parseInt(e, 0xa));
    var acc = 0x0, cnt = 0x0, arr = [];
    for (var i = 0x0; i < n; i++) {
        acc += a[i];
        if (i === 0x0) {
            if (acc === 0x0) {
                if (a[i + 0x1] >= 0x0) {
                    acc -= a[i + 0x1] - 0x1;
                    if (acc === 0x0)
                        acc--;
                    cnt += Math[_0x4996c6(0x18b)](acc);
                } else {
                    acc += Math[_0x4996c6(0x18b)](a[i + 0x1]) - 0x1;
                    if (acc === 0x0)
                        acc++;
                    cnt += acc;
                }
            }
        } else {
            if (arr[i - 0x1] > 0x0) {
                if (acc >= 0x0) {
                    cnt += acc + 0x1;
                    acc -= acc + 0x1;
                }
            } else {
                if (acc <= 0x0) {
                    cnt += Math['abs'](acc) + 0x1;
                    acc += Math[_0x4996c6(0x18b)](acc) + 0x1;
                }
            }
        }
        arr['push'](acc);
    }
    console[_0x4996c6(0x18e)](cnt);
}
Main(require('fs')[a0_0x33cf98(0x189)](a0_0x33cf98(0x184), a0_0x33cf98(0x185)));