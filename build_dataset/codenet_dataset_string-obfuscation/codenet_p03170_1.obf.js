'use strict';
function a0_0x17c6(RupBiR, key) {
    const stringArray = a0_0x68b4();
    a0_0x17c6 = function (index, key) {
        index = index - 0x1ca;
        let value = stringArray[index];
        return value;
    };
    return a0_0x17c6(RupBiR, key);
}
const a0_0x494c08 = a0_0x17c6;
(function (stringArrayFunction, comparisonValue) {
    const _0x47cfee = a0_0x17c6;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x47cfee(0x1da)) / 0x1 + parseInt(_0x47cfee(0x1d8)) / 0x2 + -parseInt(_0x47cfee(0x1cd)) / 0x3 + -parseInt(_0x47cfee(0x1db)) / 0x4 * (parseInt(_0x47cfee(0x1cf)) / 0x5) + -parseInt(_0x47cfee(0x1d2)) / 0x6 * (-parseInt(_0x47cfee(0x1ca)) / 0x7) + -parseInt(_0x47cfee(0x1dc)) / 0x8 + parseInt(_0x47cfee(0x1d5)) / 0x9 * (parseInt(_0x47cfee(0x1ce)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x68b4, 0x77502));
function a0_0x68b4() {
    const _0x1c9601 = [
        '614890FwdWrS',
        '5xyZepj',
        'First',
        'shift',
        '222cOIbvr',
        'readFileSync',
        'Second',
        '153YrrzpW',
        'utf8',
        'trim',
        '1090934Qyhmiy',
        'map',
        '70428wLQVLQ',
        '1060580NBGLqL',
        '2288952yFPmhx',
        '21182oLzcYq',
        'log',
        'tbd',
        '1777032nOiOLX'
    ];
    a0_0x68b4 = function () {
        return _0x1c9601;
    };
    return a0_0x68b4();
}
(function (input) {
    const _0x19733f = a0_0x17c6;
    input = input[_0x19733f(0x1d7)]()['split'](/\s+/)[_0x19733f(0x1d9)](x => x - 0x0);
    const N = input[_0x19733f(0x1d1)]();
    const K = input[_0x19733f(0x1d1)]();
    const A = input;
    const dp = new Array(K + 0x2)['fill'](_0x19733f(0x1cc));
    dp[K + 0x1] = !![];
    for (let i = K + 0x1; i >= 0x0; i--) {
        if (dp[i])
            if (dp[i - 0x1] === !![]) {
                i--;
                continue;
            }
        for (let j = 0x1; j <= A[0x0]; j++)
            if (i - j >= 0x0)
                if (dp[i - j] === _0x19733f(0x1cc))
                    dp[i - j] = ![];
        if (!dp[i])
            for (let a = 0x0; a < N; a++)
                if (i - A[a] >= 0x0)
                    dp[i - A[a]] = !![];
    }
    if (dp[0x0])
        console[_0x19733f(0x1cb)](_0x19733f(0x1d0));
    else
        console['log'](_0x19733f(0x1d4));
}(require('fs')[a0_0x494c08(0x1d3)]('/dev/stdin', a0_0x494c08(0x1d6))));