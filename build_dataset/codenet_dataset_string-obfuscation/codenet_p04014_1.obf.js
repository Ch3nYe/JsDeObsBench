function a0_0x1ee6(ElpHVR, key) {
    const stringArray = a0_0x5d6b();
    a0_0x1ee6 = function (index, key) {
        index = index - 0x170;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1ee6(ElpHVR, key);
}
const a0_0x5092da = a0_0x1ee6;
(function (stringArrayFunction, comparisonValue) {
    const _0x474ba1 = a0_0x1ee6;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x474ba1(0x170)) / 0x1 * (-parseInt(_0x474ba1(0x175)) / 0x2) + -parseInt(_0x474ba1(0x17b)) / 0x3 + parseInt(_0x474ba1(0x180)) / 0x4 + -parseInt(_0x474ba1(0x178)) / 0x5 * (parseInt(_0x474ba1(0x17f)) / 0x6) + parseInt(_0x474ba1(0x174)) / 0x7 * (parseInt(_0x474ba1(0x17d)) / 0x8) + parseInt(_0x474ba1(0x171)) / 0x9 * (parseInt(_0x474ba1(0x17a)) / 0xa) + parseInt(_0x474ba1(0x177)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5d6b, 0x2ba44));
function Main(s) {
    const _0x5e5483 = a0_0x1ee6;
    s = s[_0x5e5483(0x173)]('\x0a')[_0x5e5483(0x17e)](a => parseInt(a));
    const n = s[0x0];
    s = s[0x1];
    const sn = Math['ceil'](Math['sqrt'](n));
    if (s === n) {
        console[_0x5e5483(0x179)](n + 0x1);
        return;
    }
    for (var b = 0x2; b < sn; b++) {
        if (s === f(b, n)) {
            console['log'](b);
            return;
        }
    }
    var p = Math['floor']((n - s) / (sn - 0x1));
    for (; p > 0x0; p--) {
        b = Math[_0x5e5483(0x176)]((n - s) / p + 0x1);
        if (s === f(b, n)) {
            console[_0x5e5483(0x179)](b);
            return;
        }
    }
    console[_0x5e5483(0x179)](-0x1);
}
function a0_0x5d6b() {
    const _0x3fb169 = [
        'floor',
        '4507855yMsjbM',
        '2895NJXOcA',
        'log',
        '22490lOeCci',
        '970431Hzhhvl',
        '/dev/stdin',
        '382968DFLhXr',
        'map',
        '138KhOJKC',
        '222048NcCyCU',
        '1DwiLIT',
        '1053bPtyPZ',
        'readFileSync',
        'split',
        '21aESMtl',
        '713026rHFFEy'
    ];
    a0_0x5d6b = function () {
        return _0x3fb169;
    };
    return a0_0x5d6b();
}
function f(b, n) {
    const _0x4d29d6 = a0_0x1ee6;
    if (n < b)
        return n;
    return f(b, Math[_0x4d29d6(0x176)](n / b)) + n % b;
}
Main(require('fs')[a0_0x5092da(0x172)](a0_0x5092da(0x17c), 'utf8')['trim']());