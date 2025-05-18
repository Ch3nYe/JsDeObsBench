const a0_0x3299ad = a0_0x139e;
function a0_0x139f() {
    const _0x5bbf3f = [
        'map',
        '378554MskntG',
        'split',
        '/dev/stdin',
        '12HMEqwH',
        '20TYEgAQ',
        '26109NuEyTy',
        '1311496NYvfGy',
        '28celKBO',
        '724716BHqxoA',
        'log',
        'slice',
        '62674byLgTW',
        '63Tyufzn',
        '964734rTVjAs',
        'trim',
        '10VVYuIU',
        '446634ruwyff',
        'readFileSync'
    ];
    a0_0x139f = function () {
        return _0x5bbf3f;
    };
    return a0_0x139f();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x5b8a00 = a0_0x139e;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x5b8a00(0x75)) / 0x1 * (-parseInt(_0x5b8a00(0x7d)) / 0x2) + -parseInt(_0x5b8a00(0x77)) / 0x3 * (parseInt(_0x5b8a00(0x79)) / 0x4) + -parseInt(_0x5b8a00(0x6e)) / 0x5 * (parseInt(_0x5b8a00(0x6c)) / 0x6) + parseInt(_0x5b8a00(0x6b)) / 0x7 * (parseInt(_0x5b8a00(0x78)) / 0x8) + -parseInt(_0x5b8a00(0x6f)) / 0x9 + -parseInt(_0x5b8a00(0x76)) / 0xa * (-parseInt(_0x5b8a00(0x72)) / 0xb) + parseInt(_0x5b8a00(0x7a)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x139f, 0xc2745));
function a0_0x139e(YOBhec, key) {
    const stringArray = a0_0x139f();
    a0_0x139e = function (index, key) {
        index = index - 0x6b;
        let value = stringArray[index];
        return value;
    };
    return a0_0x139e(YOBhec, key);
}
console[a0_0x3299ad(0x7b)]((args => {
    const _0x1f4ea8 = a0_0x3299ad;
    const [[H, W], ...tmp] = args[_0x1f4ea8(0x6d)]()[_0x1f4ea8(0x73)]`\n`['map'](r => r['split']` `[_0x1f4ea8(0x71)](v => v | 0x0));
    const A = tmp['slice'](0xa);
    const dp = tmp[_0x1f4ea8(0x7c)](0x0, 0xa);
    for (let k = 0x0; k < 0xa; k++) {
        for (let i = 0x0; i < 0xa; i++) {
            for (let j = 0x0; j < 0xa; j++) {
                dp[i][j] = Math['min'](dp[i][j], dp[i][k] + dp[k][j]);
            }
        }
    }
    let cost = 0x0;
    for (let i = 0x0; i < H; i++) {
        for (let j = 0x0; j < W; j++) {
            if (A[i][j] === -0x1 || A[i][j] === 0x1)
                continue;
            cost += dp[A[i][j]][0x1];
        }
    }
    return '' + cost;
})(require('fs')[a0_0x3299ad(0x70)](a0_0x3299ad(0x74), 'utf8')));