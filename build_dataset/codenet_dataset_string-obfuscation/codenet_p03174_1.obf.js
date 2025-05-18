'use strict';
const a0_0x573d6d = a0_0x4c8a;
(function (stringArrayFunction, comparisonValue) {
    const _0x12d129 = a0_0x4c8a;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x12d129(0x143)) / 0x1 * (-parseInt(_0x12d129(0x13c)) / 0x2) + -parseInt(_0x12d129(0x144)) / 0x3 + -parseInt(_0x12d129(0x13b)) / 0x4 * (parseInt(_0x12d129(0x13a)) / 0x5) + -parseInt(_0x12d129(0x147)) / 0x6 * (-parseInt(_0x12d129(0x13f)) / 0x7) + -parseInt(_0x12d129(0x14a)) / 0x8 * (-parseInt(_0x12d129(0x142)) / 0x9) + parseInt(_0x12d129(0x149)) / 0xa * (-parseInt(_0x12d129(0x138)) / 0xb) + parseInt(_0x12d129(0x145)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x321e, 0x3982c));
function a0_0x4c8a(rOckrX, key) {
    const stringArray = a0_0x321e();
    a0_0x4c8a = function (index, key) {
        index = index - 0x138;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4c8a(rOckrX, key);
}
function Main(input) {
    const _0xd18aa4 = a0_0x4c8a;
    input = input['trim']()['split'](/\n/);
    const N = input[_0xd18aa4(0x13d)]() - 0x0;
    const M = Math[_0xd18aa4(0x139)](0x2, N);
    const K = Math[_0xd18aa4(0x139)](0xa, 0x9) + 0x7;
    input = input[_0xd18aa4(0x146)](str => str[_0xd18aa4(0x14b)](/\s+/)[_0xd18aa4(0x146)](x => x === '1'));
    const Match = input;
    const dp = new Array(N)[_0xd18aa4(0x141)](0x0)[_0xd18aa4(0x146)]((x, j) => new Object());
    dp[-0x1] = { 0x0: 0x1 };
    const p = new Array(N)[_0xd18aa4(0x141)](0x0)[_0xd18aa4(0x146)]((x, i) => 0x1 << i);
    for (let i = -0x1; i < N - 0x1; i++) {
        Object[_0xd18aa4(0x13e)](dp[i])['forEach'](function (J) {
            J = J - 0x0;
            dp[i][J] %= K;
            for (let j = 0x0; j < N; j++) {
                if ((J & p[j]) > 0x0)
                    continue;
                if (Match[i + 0x1][j])
                    dp[i + 0x1][J + p[j]] = (dp[i + 0x1][J + p[j]] || 0x0) + dp[i][J];
            }
        });
    }
    console[_0xd18aa4(0x140)]((dp[N - 0x1][M - 0x1] || 0x0) % K);
}
Main(require('fs')['readFileSync'](a0_0x573d6d(0x14c), a0_0x573d6d(0x148)));
function a0_0x321e() {
    const _0x434c80 = [
        'log',
        'fill',
        '144QgMrEf',
        '339001tQbqhX',
        '434520WejZXo',
        '2414184nEeaeS',
        'map',
        '6WgXgQs',
        'utf8',
        '2960nYFyQt',
        '25352symKsO',
        'split',
        '/dev/stdin',
        '6666aLeFiV',
        'pow',
        '5FDkXwI',
        '755348BALzly',
        '2IWPBXK',
        'shift',
        'keys',
        '1104110TKIyRP'
    ];
    a0_0x321e = function () {
        return _0x434c80;
    };
    return a0_0x321e();
}