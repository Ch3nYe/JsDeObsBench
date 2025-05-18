'use strict';
const a0_0x2ab2bc = a0_0x19fe;
function a0_0x3ea7() {
    const _0x15e9a0 = [
        'shift',
        'split',
        'map',
        'push',
        'kind',
        'len',
        'undefined',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3ea7 = function () {
        return _0x15e9a0;
    };
    return a0_0x3ea7();
}
function a0_0x19fe(dixQVW, key) {
    const stringArray = a0_0x3ea7();
    a0_0x19fe = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x19fe(dixQVW, key);
}
function Main(input) {
    const _0x2079ec = a0_0x19fe;
    let lines = input['split']('\x0a');
    let nk = lines[_0x2079ec(0x0)]()[_0x2079ec(0x1)](/\s/)['map'](v => v - 0x0);
    let N = nk[0x0], K = nk[0x1];
    let S = lines[_0x2079ec(0x0)]()[_0x2079ec(0x1)](/\s/)[0x0][_0x2079ec(0x1)]('')[_0x2079ec(0x2)](v => v - 0x0);
    let n = 0x0, Z = [];
    let p, b = S[0x0], i = 0x0;
    while (n < N) {
        for (p = n; p < N && S[p] == b; p++) {
        }
        let l = p - n;
        Z[_0x2079ec(0x3)]({
            'kind': b,
            'pos': n,
            'len': l,
            'index': i++
        });
        b = (b + 0x1) % 0x2;
        n = p;
    }
    let L = Z['length'], LL = L - (K - 0x1) * 0x2;
    let start = Z[0x0][_0x2079ec(0x4)];
    let ans = 0x0;
    for (let n = 0x0; n < LL; n += 0x2) {
        let sum = 0x0, m, k;
        for (m = n, k = 0x0; m < L && k < K; k++, m += 0x2) {
            if (m < L)
                sum += Z[m][_0x2079ec(0x5)];
            if (m + 0x1 < L)
                sum += Z[m + 0x1]['len'];
        }
        if (start == 0x1 && m < L)
            sum += Z[m]['len'];
        if (ans < sum)
            ans = sum;
    }
    console['log'](ans);
}
if (typeof window == a0_0x2ab2bc(0x6))
    Main(require('fs')[a0_0x2ab2bc(0x7)](a0_0x2ab2bc(0x8), a0_0x2ab2bc(0x9)));