'use strict';
const a0_0x2d18b4 = a0_0x3f7a;
function a0_0x114a() {
    const _0x3fd7bb = [
        '91449KvUhoa',
        '20418mvXbGo',
        'utf8',
        'split',
        '59NMkzUW',
        'map',
        '3187162fdvpCw',
        '/dev/stdin',
        '600114mRSMoJ',
        '930rOTWQd',
        '48PnnMub',
        '63wBHHFC',
        'readFileSync',
        'log',
        '11192JedyfQ',
        '5155738JlcInz',
        '13672744edkwih',
        '55rRdoEq'
    ];
    a0_0x114a = function () {
        return _0x3fd7bb;
    };
    return a0_0x114a();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x349b1f = a0_0x3f7a;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x349b1f(0x1ef)) / 0x1 * (-parseInt(_0x349b1f(0x1ec)) / 0x2) + parseInt(_0x349b1f(0x1e4)) / 0x3 * (parseInt(_0x349b1f(0x1e7)) / 0x4) + parseInt(_0x349b1f(0x1ea)) / 0x5 * (parseInt(_0x349b1f(0x1e1)) / 0x6) + parseInt(_0x349b1f(0x1e8)) / 0x7 + parseInt(_0x349b1f(0x1e9)) / 0x8 + -parseInt(_0x349b1f(0x1eb)) / 0x9 * (parseInt(_0x349b1f(0x1e2)) / 0xa) + -parseInt(_0x349b1f(0x1f1)) / 0xb * (parseInt(_0x349b1f(0x1e3)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x114a, 0xdb512));
function main(input) {
    const _0x18ab87 = a0_0x3f7a;
    input = input[_0x18ab87(0x1ee)]('\x20')[_0x18ab87(0x1f0)](v => ~~v);
    const n = input[0x0];
    const m = input[0x1];
    const limit = 0x3b9aca00 + 0x7;
    if (Math['abs'](n - m) >= 0x2) {
        console[_0x18ab87(0x1e6)](0x0);
        return;
    }
    let nn = 0x1;
    for (let i = 0x2; i <= n; i++) {
        nn *= i;
        if (nn >= limit) {
            nn = nn % limit;
        }
    }
    for (let i = 0x2; i <= m; i++) {
        nn *= i;
        if (nn >= limit) {
            nn = nn % limit;
        }
    }
    let tmp = nn % limit;
    if (n == m) {
        tmp = 0x2 * tmp;
    }
    const ans = tmp % limit;
    console[_0x18ab87(0x1e6)](ans);
}
function a0_0x3f7a(Srrepq, key) {
    const stringArray = a0_0x114a();
    a0_0x3f7a = function (index, key) {
        index = index - 0x1e0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3f7a(Srrepq, key);
}
main(require('fs')[a0_0x2d18b4(0x1e5)](a0_0x2d18b4(0x1e0), a0_0x2d18b4(0x1ed)));