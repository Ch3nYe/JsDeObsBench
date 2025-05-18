const a0_0x5c09ee = a0_0x17b1;
function a0_0x17b1(yOWfzv, key) {
    const stringArray = a0_0x3f9d();
    a0_0x17b1 = function (index, key) {
        index = index - 0x17a;
        let value = stringArray[index];
        return value;
    };
    return a0_0x17b1(yOWfzv, key);
}
function a0_0x3f9d() {
    const _0x4e50f8 = [
        '1864vNqiDQ',
        '705823YafDvQ',
        '245OziZNu',
        'trim',
        'split',
        '3625716rhxuDd',
        '3645265zCvWxe',
        '22fClyeW',
        '439050fiuCPp',
        '3708HxTZvI',
        '13enDRYe',
        '609SPxQIc',
        'utf8',
        '29043amyrcR',
        '4ccdkRd',
        '62646PMdIYU'
    ];
    a0_0x3f9d = function () {
        return _0x4e50f8;
    };
    return a0_0x3f9d();
}
(function (stringArrayFunction, comparisonValue) {
    const _0xf8d3cc = a0_0x17b1;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0xf8d3cc(0x17c)) / 0x1 + parseInt(_0xf8d3cc(0x184)) / 0x2 * (parseInt(_0xf8d3cc(0x186)) / 0x3) + -parseInt(_0xf8d3cc(0x189)) / 0x4 * (-parseInt(_0xf8d3cc(0x181)) / 0x5) + -parseInt(_0xf8d3cc(0x17a)) / 0x6 * (parseInt(_0xf8d3cc(0x17d)) / 0x7) + -parseInt(_0xf8d3cc(0x17b)) / 0x8 * (-parseInt(_0xf8d3cc(0x188)) / 0x9) + -parseInt(_0xf8d3cc(0x183)) / 0xa * (parseInt(_0xf8d3cc(0x182)) / 0xb) + parseInt(_0xf8d3cc(0x180)) / 0xc * (-parseInt(_0xf8d3cc(0x185)) / 0xd);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3f9d, 0x60b3f));
const input = require('fs')['readFileSync']('/dev/stdin', a0_0x5c09ee(0x187));
(input => {
    const _0x46ac77 = a0_0x5c09ee;
    const [A, B, C, D, E, F] = input[_0x46ac77(0x17e)]()[_0x46ac77(0x17f)]('\x20')['map'](Number);
    let W = {};
    let S = {};
    for (let i = 0x1; i < F; i++) {
        for (let j = 0x0; j < F; j++) {
            const s = A * i * 0x64 + j * B * 0x64;
            if (s > F)
                break;
            W[s] = 0x1;
        }
    }
    const p = F * E / 0x64;
    for (let i = 0x0; i < F; i++) {
        for (let j = 0x0; j < F; j++) {
            const s = C * i + D * j;
            if (s > p)
                break;
            S[s] = 0x1;
        }
    }
    let ans = [
        A * 0x64,
        0x0
    ];
    let max = 0x0;
    let r = E / 0x64;
    for (let i in W) {
        for (let j in S) {
            const t = i - 0x0 + (j - 0x0);
            const sw = j / i;
            if (sw > r || t > F)
                continue;
            if (sw > max) {
                max = sw;
                ans = [
                    t,
                    j
                ];
            }
        }
    }
    console['log'](ans[0x0], ans[0x1]);
})(input);