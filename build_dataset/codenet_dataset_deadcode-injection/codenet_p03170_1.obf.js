'use strict';
const a0_0x32c7a0 = a0_0xa750;
function a0_0x485b() {
    const _0x475b5e = [
        'trim',
        'split',
        'map',
        'shift',
        'fill',
        'tbd',
        'log',
        'First',
        'Second',
        'utf8'
    ];
    a0_0x485b = function () {
        return _0x475b5e;
    };
    return a0_0x485b();
}
function a0_0xa750(SbvHir, key) {
    const stringArray = a0_0x485b();
    a0_0xa750 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xa750(SbvHir, key);
}
(function (input) {
    const _0x5ed3e6 = a0_0xa750;
    input = input[_0x5ed3e6(0x0)]()[_0x5ed3e6(0x1)](/\s+/)[_0x5ed3e6(0x2)](x => x - 0x0);
    const N = input[_0x5ed3e6(0x3)]();
    const K = input['shift']();
    const A = input;
    const dp = new Array(K + 0x2)[_0x5ed3e6(0x4)]('tbd');
    dp[K + 0x1] = !![];
    for (let i = K + 0x1; i >= 0x0; i--) {
        if (dp[i])
            if (dp[i - 0x1] === !![]) {
                i--;
                continue;
            }
        for (let j = 0x1; j <= A[0x0]; j++)
            if (i - j >= 0x0)
                if (dp[i - j] === _0x5ed3e6(0x5))
                    dp[i - j] = ![];
        if (!dp[i])
            for (let a = 0x0; a < N; a++)
                if (i - A[a] >= 0x0)
                    dp[i - A[a]] = !![];
    }
    if (dp[0x0])
        console[_0x5ed3e6(0x6)](_0x5ed3e6(0x7));
    else
        console[_0x5ed3e6(0x6)](_0x5ed3e6(0x8));
}(require('fs')['readFileSync']('/dev/stdin', a0_0x32c7a0(0x9))));