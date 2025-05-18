'use strict';
function a0_0x2f5b() {
    const _0x1e17cd = [
        'push',
        '1950495KOAOSJ',
        'map',
        '4uJGlSX',
        '6KgWtKn',
        '9XHKjCj',
        '442503vPSgFl',
        'split',
        '/dev/stdin',
        '4554970GJMKvY',
        '764776REaeZX',
        'readFileSync',
        '249261IQpIkp',
        '2034858voASfJ',
        '1082052nAEuwx',
        'length'
    ];
    a0_0x2f5b = function () {
        return _0x1e17cd;
    };
    return a0_0x2f5b();
}
const a0_0x1207ff = a0_0x46ed;
(function (stringArrayFunction, comparisonValue) {
    const _0x4be7e5 = a0_0x46ed;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x4be7e5(0x113)) / 0x1 + -parseInt(_0x4be7e5(0x10b)) / 0x2 * (-parseInt(_0x4be7e5(0x10d)) / 0x3) + -parseInt(_0x4be7e5(0x10a)) / 0x4 * (parseInt(_0x4be7e5(0x108)) / 0x5) + parseInt(_0x4be7e5(0x115)) / 0x6 + -parseInt(_0x4be7e5(0x114)) / 0x7 + parseInt(_0x4be7e5(0x111)) / 0x8 * (parseInt(_0x4be7e5(0x10c)) / 0x9) + parseInt(_0x4be7e5(0x110)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2f5b, 0x3b8ad));
function a0_0x46ed(fPUmjV, key) {
    const stringArray = a0_0x2f5b();
    a0_0x46ed = function (index, key) {
        index = index - 0x106;
        let value = stringArray[index];
        return value;
    };
    return a0_0x46ed(fPUmjV, key);
}
function main(input) {
    const _0x2e0e85 = a0_0x46ed;
    input = input['split'](/\r?\n/);
    input = input[0x1][_0x2e0e85(0x10e)]('\x20')[_0x2e0e85(0x109)](v => ~~v)['sort']((a, b) => b - a);
    let ans = 0x0;
    let sticks = [];
    let prev = input[0x0];
    for (let i = 0x1; i < input['length']; i++) {
        if (prev == input[i]) {
            sticks[_0x2e0e85(0x107)](prev);
            sticks[_0x2e0e85(0x107)](input[i]);
            prev = 0x0;
        } else {
            prev = input[i];
        }
    }
    if (sticks[_0x2e0e85(0x106)] >= 0x4) {
        ans = sticks[0x0] * sticks[0x3];
        console['log'](ans);
    } else {
        console['log'](0x0);
    }
}
main(require('fs')[a0_0x1207ff(0x112)](a0_0x1207ff(0x10f), 'utf8'));