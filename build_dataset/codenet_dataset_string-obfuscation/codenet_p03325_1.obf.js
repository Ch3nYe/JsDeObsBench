'use strict';
const a0_0x5bc949 = a0_0x4403;
function a0_0x5ba0() {
    const _0x5dad5a = [
        '160584ONFpVo',
        'map',
        '/dev/stdin',
        '6535290MLbvMI',
        '2JFTlnS',
        '31956GQCJIY',
        'split',
        '258aIMRSz',
        '1265520mnvQFT',
        '50489iYZJZo',
        '4153635TgBUCF',
        '15pqrxPW',
        'log',
        '56qINWri',
        '1892qStonp',
        '13196BBxNWo'
    ];
    a0_0x5ba0 = function () {
        return _0x5dad5a;
    };
    return a0_0x5ba0();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x154df5 = a0_0x4403;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x154df5(0x11a)) / 0x1 * (-parseInt(_0x154df5(0x115)) / 0x2) + parseInt(_0x154df5(0x118)) / 0x3 * (parseInt(_0x154df5(0x110)) / 0x4) + -parseInt(_0x154df5(0x11c)) / 0x5 * (-parseInt(_0x154df5(0x119)) / 0x6) + -parseInt(_0x154df5(0x11e)) / 0x7 * (-parseInt(_0x154df5(0x111)) / 0x8) + -parseInt(_0x154df5(0x11b)) / 0x9 + -parseInt(_0x154df5(0x114)) / 0xa + -parseInt(_0x154df5(0x11f)) / 0xb * (-parseInt(_0x154df5(0x116)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5ba0, 0x5a399));
function a0_0x4403(BalTYi, key) {
    const stringArray = a0_0x5ba0();
    a0_0x4403 = function (index, key) {
        index = index - 0x110;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4403(BalTYi, key);
}
function main(s) {
    const _0x3a7f04 = a0_0x4403;
    const a = s[_0x3a7f04(0x117)]('\x0a')[0x1][_0x3a7f04(0x117)]('\x20')[_0x3a7f04(0x112)](n => Number(n));
    let ans = 0x0;
    for (let n of a) {
        while (n % 0x2 === 0x0) {
            n = n / 0x2;
            ans += 0x1;
        }
    }
    console[_0x3a7f04(0x11d)](ans);
}
main(require('fs')['readFileSync'](a0_0x5bc949(0x113), 'utf8'));