function a0_0x46de() {
    const _0x29dfbf = [
        'readFileSync',
        '44YUDcTg',
        '1136814ZdZMHP',
        '63HFiAYk',
        '2651795UIdhlK',
        'reduce',
        '442116lTHWrc',
        '7985432kXKEqY',
        'split',
        '208263ybWwZq',
        'map',
        'fill',
        '213383EzMZnG',
        '42QbEPcS',
        'min',
        'utf8',
        '/dev/stdin',
        '3886730anyOHl'
    ];
    a0_0x46de = function () {
        return _0x29dfbf;
    };
    return a0_0x46de();
}
function a0_0xcd62(pCzChG, key) {
    const stringArray = a0_0x46de();
    a0_0xcd62 = function (index, key) {
        index = index - 0x1cc;
        let value = stringArray[index];
        return value;
    };
    return a0_0xcd62(pCzChG, key);
}
const a0_0x50faaa = a0_0xcd62;
(function (stringArrayFunction, comparisonValue) {
    const _0x57cf1e = a0_0xcd62;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x57cf1e(0x1d6)) / 0x1 + parseInt(_0x57cf1e(0x1d0)) / 0x2 + parseInt(_0x57cf1e(0x1d3)) / 0x3 * (parseInt(_0x57cf1e(0x1dd)) / 0x4) + -parseInt(_0x57cf1e(0x1ce)) / 0x5 + parseInt(_0x57cf1e(0x1cc)) / 0x6 * (-parseInt(_0x57cf1e(0x1d7)) / 0x7) + -parseInt(_0x57cf1e(0x1d1)) / 0x8 + parseInt(_0x57cf1e(0x1cd)) / 0x9 * (parseInt(_0x57cf1e(0x1db)) / 0xa);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x46de, 0xc9d29));
console['log']((args => {
    const _0x3a3177 = a0_0xcd62;
    const [[N], D] = args['trim']()[_0x3a3177(0x1d2)]('\x0a')[_0x3a3177(0x1d4)](r => r[_0x3a3177(0x1d2)]('\x20')[_0x3a3177(0x1d4)](v => v | 0x0));
    if (N === 0x1)
        return '' + D[0x0];
    const q = Array(0xd)[_0x3a3177(0x1d5)](0x0);
    let _s = 0xc, s = 0x1;
    for (let i = 0x0; i < N; i++) {
        if (++q[D[i]] > 0x2)
            return '0';
        if (D[i] < _s)
            _s = D[i];
        if (q[D[i]] === 0x2)
            _s = Math['min'](_s, 0x18 - 0x2 * D[i]);
    }
    if (q[0xc] > 0x1 || q[0x0] > 0x0)
        return '0';
    const mask = q[_0x3a3177(0x1cf)]((a, b, i) => a | (b === 0x1 ? 0x0 : 0x1 << i), 0x1);
    for (let m = 0x0; m < 0x1 << 0xd; m = m + 0x1 | mask) {
        let min = _s;
        for (let a = 0x1; a <= 0xc; a++) {
            if (!q[a])
                continue;
            for (let b = a + 0x1; b <= 0xc; b++) {
                if (!q[b])
                    continue;
                let t = b - a;
                if (q[a] === 0x1 && q[b] === 0x1)
                    t = m >> a & 0x1 ^ m >> b & 0x1 ? 0x18 - a - b : t;
                min = Math[_0x3a3177(0x1d8)](min, t);
            }
        }
        if (s < min)
            s = min;
    }
    return '' + s;
})(require('fs')[a0_0x50faaa(0x1dc)](a0_0x50faaa(0x1da), a0_0x50faaa(0x1d9))));