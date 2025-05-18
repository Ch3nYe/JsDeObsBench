const a0_0x469035 = a0_0x57f1;
function a0_0x57f1(dEwPIE, key) {
    const stringArray = a0_0x1f6a();
    a0_0x57f1 = function (index, key) {
        index = index - 0x7b;
        let value = stringArray[index];
        return value;
    };
    return a0_0x57f1(dEwPIE, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x3cd3c1 = a0_0x57f1;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x3cd3c1(0x8a)) / 0x1 + parseInt(_0x3cd3c1(0x7d)) / 0x2 * (parseInt(_0x3cd3c1(0x8b)) / 0x3) + parseInt(_0x3cd3c1(0x87)) / 0x4 + parseInt(_0x3cd3c1(0x82)) / 0x5 + parseInt(_0x3cd3c1(0x86)) / 0x6 * (-parseInt(_0x3cd3c1(0x7b)) / 0x7) + -parseInt(_0x3cd3c1(0x7f)) / 0x8 + parseInt(_0x3cd3c1(0x83)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1f6a, 0xf03cd));
function Main(input) {
    const _0x3b2dc9 = a0_0x57f1;
    input = input[_0x3b2dc9(0x88)]('\x0a');
    const n = +input[0x0];
    if (n <= 0x2) {
        console[_0x3b2dc9(0x85)](0x1);
        return;
    }
    const xy = input[_0x3b2dc9(0x7e)](0x1)['map'](s => s[_0x3b2dc9(0x88)]('\x20')['map'](n => +n));
    const map = {};
    xy[_0x3b2dc9(0x8c)](a => {
        const _0x30e9b0 = _0x3b2dc9;
        xy[_0x30e9b0(0x8c)](b => {
            const _0x4d8e5d = _0x30e9b0;
            if (a === b)
                return;
            const vec = [
                b[0x0] - a[0x0],
                b[0x1] - a[0x1]
            ];
            const m = vec[_0x4d8e5d(0x7c)]('_');
            map[m] = map[m] == null ? 0x1 : map[m] + 0x1;
        });
    });
    const res = Object[_0x3b2dc9(0x89)](map)[_0x3b2dc9(0x84)]((r, xystr) => {
        const count = map[xystr];
        return count > r[0x0] ? [
            count,
            xystr
        ] : [
            r[0x0],
            r[0x1]
        ];
    }, [
        0x0,
        ''
    ]);
    console[_0x3b2dc9(0x85)](0x1 + (n - 0x1) - res[0x0]);
}
Main(require('fs')['readFileSync'](a0_0x469035(0x80), a0_0x469035(0x81)));
function a0_0x1f6a() {
    const _0x274a6d = [
        '3644856kkADIJ',
        '1937108rTNIXi',
        'split',
        'keys',
        '1334005DnWBkY',
        '5158563tmDgeZ',
        'forEach',
        '14NhSrVz',
        'join',
        '2xmutwg',
        'slice',
        '2555920pDcIlf',
        '/dev/stdin',
        'utf8',
        '7503820QAWVKZ',
        '1331082pzUGul',
        'reduce',
        'log'
    ];
    a0_0x1f6a = function () {
        return _0x274a6d;
    };
    return a0_0x1f6a();
}