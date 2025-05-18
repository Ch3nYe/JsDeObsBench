'use strict';
const a0_0x45c482 = a0_0x522b;
(function (stringArrayFunction, comparisonValue) {
    const _0x3fb0fa = a0_0x522b;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x3fb0fa(0x1bf)) / 0x1 * (-parseInt(_0x3fb0fa(0x1c6)) / 0x2) + -parseInt(_0x3fb0fa(0x1ca)) / 0x3 * (parseInt(_0x3fb0fa(0x1c1)) / 0x4) + -parseInt(_0x3fb0fa(0x1be)) / 0x5 + parseInt(_0x3fb0fa(0x1c4)) / 0x6 * (parseInt(_0x3fb0fa(0x1bb)) / 0x7) + -parseInt(_0x3fb0fa(0x1c5)) / 0x8 * (parseInt(_0x3fb0fa(0x1c3)) / 0x9) + -parseInt(_0x3fb0fa(0x1bc)) / 0xa + parseInt(_0x3fb0fa(0x1c8)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4470, 0x7dbeb));
function a0_0x4470() {
    const _0x4aa706 = [
        '4923VtzISL',
        '16950dIxdAq',
        '5672VASNOh',
        '158KXWmNe',
        'readFileSync',
        '31674269nkRMBn',
        'split',
        '3SRQBBb',
        '1141lgjERy',
        '2518060qLJDvZ',
        '/dev/stdin',
        '3966015JgtCIA',
        '7507DmYlJr',
        'trim',
        '3196072cENiLY',
        'log'
    ];
    a0_0x4470 = function () {
        return _0x4aa706;
    };
    return a0_0x4470();
}
function a0_0x522b(dlGXKj, key) {
    const stringArray = a0_0x4470();
    a0_0x522b = function (index, key) {
        index = index - 0x1bb;
        let value = stringArray[index];
        return value;
    };
    return a0_0x522b(dlGXKj, key);
}
const main = arg => {
    const _0x1771c3 = a0_0x522b;
    arg = arg[_0x1771c3(0x1c0)]()[_0x1771c3(0x1c9)]('\x0a');
    const N = ~~arg[0x0];
    const S = arg['slice'](0x1, N + 0x1)['map'](n => ~~n);
    let now = 0x1;
    let cnt = 0x0;
    while (now !== 0x2) {
        now = S[now - 0x1];
        cnt++;
        if (cnt > N) {
            console['log'](-0x1);
            return;
        }
    }
    console[_0x1771c3(0x1c2)](cnt);
};
main(require('fs')[a0_0x45c482(0x1c7)](a0_0x45c482(0x1bd), 'utf8'));