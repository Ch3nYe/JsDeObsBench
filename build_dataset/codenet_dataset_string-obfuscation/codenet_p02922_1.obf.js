'use strict';
const a0_0x5b6c8e = a0_0x49fb;
function a0_0x49fb(jdFFva, key) {
    const stringArray = a0_0x2f72();
    a0_0x49fb = function (index, key) {
        index = index - 0x8b;
        let value = stringArray[index];
        return value;
    };
    return a0_0x49fb(jdFFva, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x5df7a3 = a0_0x49fb;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x5df7a3(0x97)) / 0x1 + -parseInt(_0x5df7a3(0x96)) / 0x2 * (parseInt(_0x5df7a3(0x90)) / 0x3) + -parseInt(_0x5df7a3(0x8f)) / 0x4 + parseInt(_0x5df7a3(0x8b)) / 0x5 * (-parseInt(_0x5df7a3(0x8d)) / 0x6) + parseInt(_0x5df7a3(0x8c)) / 0x7 * (-parseInt(_0x5df7a3(0x94)) / 0x8) + -parseInt(_0x5df7a3(0x95)) / 0x9 + parseInt(_0x5df7a3(0x91)) / 0xa * (parseInt(_0x5df7a3(0x93)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2f72, 0x956c1));
const Main = input => {
    const _0x46ad1a = a0_0x49fb;
    let xs = input['trim']()['split']('\x20')[_0x46ad1a(0x92)](v => parseInt(v, 0xa));
    let a = xs[0x0];
    let b = xs[0x1];
    let ans = 0x1;
    if (a >= b) {
        ans = 0x1;
    } else {
        for (let i = 0x1; (a - 0x1) * i + 0x1 < b; i++) {
            ans += 0x1;
        }
    }
    console[_0x46ad1a(0x8e)](ans);
};
function a0_0x2f72() {
    const _0x39435a = [
        '27905myUuRJ',
        '182WmCCCS',
        '1206anFhML',
        'log',
        '3920944ITGuVC',
        '121971AHTozI',
        '3043720vZJCoa',
        'map',
        '165gUWOkQ',
        '2408ztcwDH',
        '9605511PTGRtS',
        '12zHlcMB',
        '532483QGivYh',
        'readFileSync'
    ];
    a0_0x2f72 = function () {
        return _0x39435a;
    };
    return a0_0x2f72();
}
Main(require('fs')[a0_0x5b6c8e(0x98)]('/dev/stdin', 'utf8'));