'use strict';
const a0_0x2c5245 = a0_0x192f;
(function (stringArrayFunction, comparisonValue) {
    const _0x5afe6e = a0_0x192f;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x5afe6e(0x90)) / 0x1 * (parseInt(_0x5afe6e(0x84)) / 0x2) + -parseInt(_0x5afe6e(0x88)) / 0x3 + parseInt(_0x5afe6e(0x91)) / 0x4 + -parseInt(_0x5afe6e(0x8d)) / 0x5 + -parseInt(_0x5afe6e(0x93)) / 0x6 + -parseInt(_0x5afe6e(0x8f)) / 0x7 * (-parseInt(_0x5afe6e(0x8b)) / 0x8) + parseInt(_0x5afe6e(0x8c)) / 0x9 * (parseInt(_0x5afe6e(0x87)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x50fa, 0x799ab));
function a0_0x50fa() {
    const _0xc73fa3 = [
        'trim',
        '5890008PyeWqr',
        '279963QxQmEK',
        '4338900ytCEKn',
        'join',
        '7psRzBA',
        '77498sbACpQ',
        '1079836HMPFip',
        'log',
        '229626pjwzMf',
        '/dev/stdin',
        '16gQyQNU',
        'utf8',
        'map',
        '150YhHuqn',
        '2065971uwVcSP',
        'split'
    ];
    a0_0x50fa = function () {
        return _0xc73fa3;
    };
    return a0_0x50fa();
}
function a0_0x192f(SBnCAn, key) {
    const stringArray = a0_0x50fa();
    a0_0x192f = function (index, key) {
        index = index - 0x84;
        let value = stringArray[index];
        return value;
    };
    return a0_0x192f(SBnCAn, key);
}
function Main(input) {
    const _0x1e0e2a = a0_0x192f;
    input = input[_0x1e0e2a(0x8a)]()[_0x1e0e2a(0x89)]('\x0a');
    const hw = input['shift']()[_0x1e0e2a(0x89)]('\x20')['map'](str => Number(str));
    const H = hw[0x0], W = hw[0x1];
    const data = input[_0x1e0e2a(0x86)](ls => ls[_0x1e0e2a(0x89)](''));
    const hy = [
        -0x1,
        -0x1,
        -0x1,
        0x0,
        0x0,
        0x1,
        0x1,
        0x1
    ];
    const wx = [
        -0x1,
        0x0,
        0x1,
        -0x1,
        0x1,
        -0x1,
        0x0,
        0x1
    ];
    for (let i = 0x0; i < H; i++) {
        for (let j = 0x0; j < W; j++) {
            if (data[i][j] === '#')
                continue;
            let count = 0x0;
            for (let k = 0x0; k < 0x8; k++) {
                const y = i + hy[k], x = j + wx[k];
                if (y < 0x0 || H <= y)
                    continue;
                if (x < 0x0 || W <= x)
                    continue;
                if (data[y][x] === '#') {
                    count += 0x1;
                }
            }
            data[i][j] = count;
        }
    }
    const result = data[_0x1e0e2a(0x86)](ls => ls[_0x1e0e2a(0x8e)](''))[_0x1e0e2a(0x8e)]('\x0a');
    console[_0x1e0e2a(0x92)](result);
}
Main(require('fs')['readFileSync'](a0_0x2c5245(0x94), a0_0x2c5245(0x85)));