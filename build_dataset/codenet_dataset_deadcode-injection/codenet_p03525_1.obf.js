function a0_0x2721() {
    const _0x1ab861 = [
        'log',
        'trim',
        'split',
        'map',
        'fill',
        'min',
        'readFileSync'
    ];
    a0_0x2721 = function () {
        return _0x1ab861;
    };
    return a0_0x2721();
}
const a0_0x2a8000 = a0_0x255a;
function a0_0x255a(cfHVES, key) {
    const stringArray = a0_0x2721();
    a0_0x255a = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x255a(cfHVES, key);
}
console[a0_0x2a8000(0x0)]((args => {
    const _0x4e14a9 = a0_0x255a;
    const [[N], D] = args[_0x4e14a9(0x1)]()[_0x4e14a9(0x2)]('\x0a')['map'](r => r[_0x4e14a9(0x2)]('\x20')[_0x4e14a9(0x3)](v => v | 0x0));
    if (N === 0x1)
        return '' + D[0x0];
    const q = Array(0xd)[_0x4e14a9(0x4)](0x0);
    let _s = 0xc, s = 0x1;
    for (let i = 0x0; i < N; i++) {
        if (++q[D[i]] > 0x2)
            return '0';
        if (D[i] < _s)
            _s = D[i];
        if (q[D[i]] === 0x2)
            _s = Math[_0x4e14a9(0x5)](_s, 0x18 - 0x2 * D[i]);
    }
    if (q[0xc] > 0x1 || q[0x0] > 0x0)
        return '0';
    const mask = q['reduce']((a, b, i) => a | (b === 0x1 ? 0x0 : 0x1 << i), 0x1);
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
                min = Math[_0x4e14a9(0x5)](min, t);
            }
        }
        if (s < min)
            s = min;
    }
    return '' + s;
})(require('fs')[a0_0x2a8000(0x6)]('/dev/stdin', 'utf8')));