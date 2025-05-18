const a0_0x2caa55 = a0_0x3020;
function a0_0x2a2d() {
    const _0x35b25c = [
        'set',
        '884310LsFFAP',
        '12821OeprQO',
        '29534936pFbcDU',
        '/dev/stdin',
        '808059DaVGsh',
        '1766840lRxDyY',
        'get',
        '3571926bAeRlS',
        'readFileSync',
        'has',
        'trim',
        '730150uKIPdD',
        'log',
        'min',
        'split',
        'utf8',
        '250MfbrDr'
    ];
    a0_0x2a2d = function () {
        return _0x35b25c;
    };
    return a0_0x2a2d();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x1496f2 = a0_0x3020;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x1496f2(0x138)) / 0x1 * (parseInt(_0x1496f2(0x135)) / 0x2) + -parseInt(_0x1496f2(0x13b)) / 0x3 + -parseInt(_0x1496f2(0x13c)) / 0x4 + parseInt(_0x1496f2(0x142)) / 0x5 + -parseInt(_0x1496f2(0x13e)) / 0x6 + -parseInt(_0x1496f2(0x137)) / 0x7 + parseInt(_0x1496f2(0x139)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2a2d, 0xc3efe));
const input = require('fs')[a0_0x2caa55(0x13f)](a0_0x2caa55(0x13a), a0_0x2caa55(0x134));
const list = input[a0_0x2caa55(0x141)]()[a0_0x2caa55(0x133)]('\x0a');
let [n, m] = list[0x0][a0_0x2caa55(0x133)]('\x20');
n = Number(n);
m = Number(m);
let cm = list[0x1][a0_0x2caa55(0x141)]()['split']('\x20');
cm = cm['map'](c => Number(c));
function a0_0x3020(mMlIPd, key) {
    const stringArray = a0_0x2a2d();
    a0_0x3020 = function (index, key) {
        index = index - 0x133;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3020(mMlIPd, key);
}
const dp = new Map();
for (let i = 0x0; i < m; i++) {
    dp[a0_0x2caa55(0x136)](cm[i], 0x1);
}
const max = n + 0x1;
for (let i = 0x0; i <= n; i++) {
    if (dp[a0_0x2caa55(0x140)](i)) {
        continue;
    }
    let min = max;
    for (let j = 0x0; j < m; j++) {
        const target = i - cm[j];
        if (target < 0x0 || !dp['has'](target)) {
            continue;
        }
        const count = dp['get'](target);
        min = Math[a0_0x2caa55(0x144)](count, min);
    }
    if (min < max) {
        dp[a0_0x2caa55(0x136)](i, min + 0x1);
    }
}
console[a0_0x2caa55(0x143)](dp[a0_0x2caa55(0x13d)](n));