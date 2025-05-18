const a0_0x3effd9 = a0_0x239e;
(function (stringArrayFunction, comparisonValue) {
    const _0x288ac8 = a0_0x239e;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x288ac8(0x147)) / 0x1 + -parseInt(_0x288ac8(0x14f)) / 0x2 * (parseInt(_0x288ac8(0x149)) / 0x3) + parseInt(_0x288ac8(0x148)) / 0x4 + -parseInt(_0x288ac8(0x144)) / 0x5 + -parseInt(_0x288ac8(0x143)) / 0x6 + -parseInt(_0x288ac8(0x146)) / 0x7 * (parseInt(_0x288ac8(0x14b)) / 0x8) + parseInt(_0x288ac8(0x150)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5e1b, 0x45bec));
console[a0_0x3effd9(0x145)]((args => {
    const _0x3f0926 = a0_0x3effd9;
    const [[N], A] = args['trim']()['split']`\n`[_0x3f0926(0x140)](r => r[_0x3f0926(0x14e)]` `[_0x3f0926(0x140)](v => 0x0 | v));
    const MOD = 0x3b9aca00 + 0x7, MAX = Math[_0x3f0926(0x141)](...A);
    const mul = (a, b) => ((a >> 0x10) * b % MOD * 0x10000 + (a & 0xffff) * b) % MOD;
    const isP = Array(0xf4240 + 0x1)[_0x3f0926(0x14d)](!![]);
    const px = new Map();
    for (let p = 0x2; p <= MAX; p++) {
        if (!isP[p])
            continue;
        for (let i = p + p; i <= MAX; i = i + p)
            isP[i] = ![];
        px[_0x3f0926(0x13f)](p, 0x0);
    }
    const ap = [];
    for (let i = 0x0; i < N; i++) {
        let a = A[i];
        ap[_0x3f0926(0x142)](new Map());
        for (const [p, x] of px) {
            if (a === 0x1)
                break;
            let s = 0x0;
            while (a % p === 0x0) {
                a /= p;
                s++;
            }
            if (s)
                ap[i]['set'](p, s);
            if (s > x)
                px[_0x3f0926(0x13f)](p, s);
        }
    }
    let sum = 0x0;
    for (let i = 0x0; i < N; i++) {
        let B = 0x1;
        for (const [p, q] of px) {
            if (!q)
                continue;
            B = mul(B, p ** (q - (ap[i][_0x3f0926(0x14a)](p) | 0x0)));
        }
        sum = (sum + B) % MOD;
    }
    return sum;
})(require('fs')['readFileSync'](a0_0x3effd9(0x14c), a0_0x3effd9(0x151))));
function a0_0x239e(UhlTbU, key) {
    const stringArray = a0_0x5e1b();
    a0_0x239e = function (index, key) {
        index = index - 0x13f;
        let value = stringArray[index];
        return value;
    };
    return a0_0x239e(UhlTbU, key);
}
function a0_0x5e1b() {
    const _0x43e85b = [
        '2463945rPttDY',
        'log',
        '3438904mGzMbR',
        '387733IUmEBz',
        '93016tgFWuf',
        '3dzEtWX',
        'get',
        '8uhfxPS',
        '/dev/stdin',
        'fill',
        'split',
        '91534IsAbXR',
        '8419347AMnYzR',
        'utf8',
        'set',
        'map',
        'max',
        'push',
        '185796qHWEgV'
    ];
    a0_0x5e1b = function () {
        return _0x43e85b;
    };
    return a0_0x5e1b();
}