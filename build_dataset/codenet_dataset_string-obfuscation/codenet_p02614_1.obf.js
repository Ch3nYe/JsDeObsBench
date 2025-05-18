const a0_0x183075 = a0_0x12cd;
(function (stringArrayFunction, comparisonValue) {
    const _0x4aad2f = a0_0x12cd;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x4aad2f(0x201)) / 0x1 + parseInt(_0x4aad2f(0x1f8)) / 0x2 + parseInt(_0x4aad2f(0x1fd)) / 0x3 * (-parseInt(_0x4aad2f(0x1fe)) / 0x4) + -parseInt(_0x4aad2f(0x1f9)) / 0x5 * (parseInt(_0x4aad2f(0x1f5)) / 0x6) + -parseInt(_0x4aad2f(0x1fa)) / 0x7 * (-parseInt(_0x4aad2f(0x1f6)) / 0x8) + parseInt(_0x4aad2f(0x1f3)) / 0x9 + parseInt(_0x4aad2f(0x202)) / 0xa * (parseInt(_0x4aad2f(0x1f4)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x826a, 0x9b0de));
const fs = require('fs');
const [h, w, k, ...m] = fs['readFileSync'](a0_0x183075(0x204), a0_0x183075(0x203))['split'](/\s/);
function a0_0x12cd(mZIfYq, key) {
    const stringArray = a0_0x826a();
    a0_0x12cd = function (index, key) {
        index = index - 0x1f3;
        let value = stringArray[index];
        return value;
    };
    return a0_0x12cd(mZIfYq, key);
}
function solve(m, x = 0x0, y = 0x0, f) {
    const _0x54ccc2 = a0_0x183075;
    if (m[_0x54ccc2(0x1ff)] === 0x0 || m[0x0][_0x54ccc2(0x1ff)] === 0x0) {
        return 0x0;
    }
    const n = m[_0x54ccc2(0x1f7)]('')[_0x54ccc2(0x1fc)](/\./g, '')[_0x54ccc2(0x1ff)];
    let a = 0x0;
    if (n == k) {
        a++;
    }
    if (n < k) {
        return a;
    }
    if (!f) {
        for (let i = y; i < m[_0x54ccc2(0x1ff)]; i++) {
            a += solve([
                ...m[_0x54ccc2(0x1fb)](0x0, i),
                ...m[_0x54ccc2(0x1fb)](i + 0x1)
            ], x, i < y ? y : i);
        }
    }
    for (let i = x; i < m[0x0][_0x54ccc2(0x1ff)]; i++) {
        a += solve(m[_0x54ccc2(0x205)](l => l['slice'](0x0, i) + l[_0x54ccc2(0x1fb)](i + 0x1)), i < x ? x : i, y, !![]);
    }
    return a;
}
console[a0_0x183075(0x200)](solve(m));
function a0_0x826a() {
    const _0x1ba532 = [
        '138166vHzmAx',
        '2921110yEmQMW',
        'utf8',
        '/dev/stdin',
        'map',
        '567999bixgSO',
        '33AfqbmN',
        '17772jrWixV',
        '152oMMOWo',
        'join',
        '108474aaFwXL',
        '530SAPvAf',
        '212912tYTTSC',
        'slice',
        'replace',
        '3351lxcZSf',
        '2724thFAGV',
        'length',
        'log'
    ];
    a0_0x826a = function () {
        return _0x1ba532;
    };
    return a0_0x826a();
}