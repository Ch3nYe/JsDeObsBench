'use strict';
function a0_0x37c7(reJJio, key) {
    const stringArray = a0_0x21fb();
    a0_0x37c7 = function (index, key) {
        index = index - 0xde;
        let value = stringArray[index];
        return value;
    };
    return a0_0x37c7(reJJio, key);
}
const a0_0x2ce51a = a0_0x37c7;
(function (stringArrayFunction, comparisonValue) {
    const _0x4178a4 = a0_0x37c7;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x4178a4(0xe3)) / 0x1 + -parseInt(_0x4178a4(0xdf)) / 0x2 + parseInt(_0x4178a4(0xe0)) / 0x3 * (-parseInt(_0x4178a4(0xe1)) / 0x4) + -parseInt(_0x4178a4(0xe2)) / 0x5 + parseInt(_0x4178a4(0xe6)) / 0x6 + parseInt(_0x4178a4(0xe4)) / 0x7 + parseInt(_0x4178a4(0xeb)) / 0x8;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x21fb, 0xdada5));
function a0_0x21fb() {
    const _0x4f7ce6 = [
        '8069904nwwHjX',
        'log',
        'split',
        'kind',
        'shift',
        '1531090uEhwDO',
        '3033489VwubNg',
        '4yezABS',
        '4257575FHXCkw',
        '352631eJTcof',
        '8328740dfONYv',
        'len',
        '10072302pZLjhg',
        '/dev/stdin',
        'map',
        'utf8',
        'undefined'
    ];
    a0_0x21fb = function () {
        return _0x4f7ce6;
    };
    return a0_0x21fb();
}
function Main(input) {
    const _0x12ae70 = a0_0x37c7;
    let lines = input[_0x12ae70(0xed)]('\x0a');
    let nk = lines[_0x12ae70(0xde)]()[_0x12ae70(0xed)](/\s/)[_0x12ae70(0xe8)](v => v - 0x0);
    let N = nk[0x0], K = nk[0x1];
    let S = lines[_0x12ae70(0xde)]()[_0x12ae70(0xed)](/\s/)[0x0][_0x12ae70(0xed)]('')['map'](v => v - 0x0);
    let n = 0x0, Z = [];
    let p, b = S[0x0], i = 0x0;
    while (n < N) {
        for (p = n; p < N && S[p] == b; p++) {
        }
        let l = p - n;
        Z['push']({
            'kind': b,
            'pos': n,
            'len': l,
            'index': i++
        });
        b = (b + 0x1) % 0x2;
        n = p;
    }
    let L = Z['length'], LL = L - (K - 0x1) * 0x2;
    let start = Z[0x0][_0x12ae70(0xee)];
    let ans = 0x0;
    for (let n = 0x0; n < LL; n += 0x2) {
        let sum = 0x0, m, k;
        for (m = n, k = 0x0; m < L && k < K; k++, m += 0x2) {
            if (m < L)
                sum += Z[m][_0x12ae70(0xe5)];
            if (m + 0x1 < L)
                sum += Z[m + 0x1][_0x12ae70(0xe5)];
        }
        if (start == 0x1 && m < L)
            sum += Z[m][_0x12ae70(0xe5)];
        if (ans < sum)
            ans = sum;
    }
    console[_0x12ae70(0xec)](ans);
}
if (typeof window == a0_0x2ce51a(0xea))
    Main(require('fs')['readFileSync'](a0_0x2ce51a(0xe7), a0_0x2ce51a(0xe9)));