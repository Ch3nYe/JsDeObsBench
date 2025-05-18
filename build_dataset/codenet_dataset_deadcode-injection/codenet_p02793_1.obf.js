function a0_0x41b4(DoNoLi, key) {
    const stringArray = a0_0x2c5a();
    a0_0x41b4 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x41b4(DoNoLi, key);
}
const a0_0x25ccfa = a0_0x41b4;
console['log']((args => {
    const _0x28827b = a0_0x41b4;
    const [[N], A] = args['trim']()[_0x28827b(0x0)]`\n`['map'](r => r[_0x28827b(0x0)]` `[_0x28827b(0x1)](v => 0x0 | v));
    const MOD = 0x3b9aca00 + 0x7, MAX = Math[_0x28827b(0x2)](...A);
    const mul = (a, b) => ((a >> 0x10) * b % MOD * 0x10000 + (a & 0xffff) * b) % MOD;
    const isP = Array(0xf4240 + 0x1)[_0x28827b(0x3)](!![]);
    const px = new Map();
    for (let p = 0x2; p <= MAX; p++) {
        if (!isP[p])
            continue;
        for (let i = p + p; i <= MAX; i = i + p)
            isP[i] = ![];
        px[_0x28827b(0x4)](p, 0x0);
    }
    const ap = [];
    for (let i = 0x0; i < N; i++) {
        let a = A[i];
        ap['push'](new Map());
        for (const [p, x] of px) {
            if (a === 0x1)
                break;
            let s = 0x0;
            while (a % p === 0x0) {
                a /= p;
                s++;
            }
            if (s)
                ap[i][_0x28827b(0x4)](p, s);
            if (s > x)
                px[_0x28827b(0x4)](p, s);
        }
    }
    let sum = 0x0;
    for (let i = 0x0; i < N; i++) {
        let B = 0x1;
        for (const [p, q] of px) {
            if (!q)
                continue;
            B = mul(B, p ** (q - (ap[i][_0x28827b(0x5)](p) | 0x0)));
        }
        sum = (sum + B) % MOD;
    }
    return sum;
})(require('fs')[a0_0x25ccfa(0x6)](a0_0x25ccfa(0x7), 'utf8')));
function a0_0x2c5a() {
    const _0x34a9f8 = [
        'split',
        'map',
        'max',
        'fill',
        'set',
        'get',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x2c5a = function () {
        return _0x34a9f8;
    };
    return a0_0x2c5a();
}