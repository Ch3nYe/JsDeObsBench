const a0_0x5ce1c0 = a0_0x20cc;
function a0_0x20cc(OzKxpk, key) {
    const stringArray = a0_0x913f();
    a0_0x20cc = function (index, key) {
        index = index - 0x119;
        let value = stringArray[index];
        return value;
    };
    return a0_0x20cc(OzKxpk, key);
}
function a0_0x913f() {
    const _0x1eff40 = [
        'split',
        'push',
        '32337tvoGXC',
        '21327174ijijEG',
        '/dev/stdin',
        'log',
        'trim',
        'fill',
        'join',
        '5lFaaQP',
        '11161696xQtJtw',
        '20vXVcNC',
        '9880884clajMF',
        '3252672Rlfffz',
        '1599711ZRPqxy',
        'readFileSync',
        '523914mbNfyu',
        'map'
    ];
    a0_0x913f = function () {
        return _0x1eff40;
    };
    return a0_0x913f();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x135d27 = a0_0x20cc;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x135d27(0x124)) / 0x1 + -parseInt(_0x135d27(0x126)) / 0x2 + -parseInt(_0x135d27(0x12a)) / 0x3 * (-parseInt(_0x135d27(0x121)) / 0x4) + -parseInt(_0x135d27(0x11f)) / 0x5 * (parseInt(_0x135d27(0x122)) / 0x6) + parseInt(_0x135d27(0x120)) / 0x7 + parseInt(_0x135d27(0x123)) / 0x8 + parseInt(_0x135d27(0x119)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x913f, 0xdfaf3));
console[a0_0x5ce1c0(0x11b)](function (args) {
    const _0x1bfc81 = a0_0x5ce1c0;
    const [[Q], ...tmp] = args[_0x1bfc81(0x11c)]()['split']('\x0a')[_0x1bfc81(0x127)](r => r[_0x1bfc81(0x128)]('\x20')['map'](v => v | 0x0));
    const MAX = 0x186a0;
    const a = Array(MAX)[_0x1bfc81(0x11d)](!![]);
    const s = Array(MAX + 0x2)[_0x1bfc81(0x11d)](0x0);
    a[0x0] = ![];
    s[0x2] = 0x1;
    for (let i = 0x1; i < MAX; i++) {
        if (a[i]) {
            const n = 0x2 * i + 0x1;
            if (~i & 0x1 && a[i / 0x2])
                s[i + 0x1] += 0x1;
            for (let j = i + n; j < MAX; j = j + n)
                a[j] = ![];
        }
        s[i + 0x2] += s[i + 0x1];
    }
    const x = [];
    for (let i = 0x0; i < Q; i++) {
        const l = (tmp[i][0x0] - 0x1) / 0x2;
        const r = (tmp[i][0x1] - 0x1) / 0x2 + 0x1;
        x[_0x1bfc81(0x129)](s[r] - s[l]);
    }
    return x[_0x1bfc81(0x11e)]('\x0a');
}(require('fs')[a0_0x5ce1c0(0x125)](a0_0x5ce1c0(0x11a), 'utf8')));