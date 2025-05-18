function a0_0x4222(zfgcHL, key) {
    const stringArray = a0_0x3e4b();
    a0_0x4222 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4222(zfgcHL, key);
}
const a0_0x19966f = a0_0x4222;
const input = require('fs')[a0_0x19966f(0x0)](a0_0x19966f(0x1), a0_0x19966f(0x2));
function a0_0x3e4b() {
    const _0x4cf1ad = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'map',
        'GusIc',
        'push',
        'pop',
        'yWHwO',
        'xSsxy',
        'xtbUH',
        'forEach',
        'qbnkM',
        'max',
        'log'
    ];
    a0_0x3e4b = function () {
        return _0x4cf1ad;
    };
    return a0_0x3e4b();
}
(input => {
    const _0x2fb529 = a0_0x4222;
    const rows = input['split']('\x0a');
    const [N, M, Q] = rows[0x0][_0x2fb529(0x3)]('\x20')[_0x2fb529(0x4)](Number);
    const A = [];
    for (let i = 0x0; i < Q; i++) {
        A[i] = rows[i + 0x1][_0x2fb529(0x3)]('\x20')['map'](Number);
    }
    const ss = [];
    const s = [];
    let d = 0x0;
    let v = 0x0;
    while (v !== undefined) {
        if ('SGhvl' === _0x2fb529(0x5)) {
            ss[_0x2fb529(0x6)]([...s]);
            s[_0x2fb529(0x7)]();
            v++;
            d--;
        } else {
            if (d === N) {
                if ('yWHwO' === _0x2fb529(0x8)) {
                    ss[_0x2fb529(0x6)]([...s]);
                    s[_0x2fb529(0x7)]();
                    v++;
                    d--;
                } else {
                    v = s['pop']();
                    d--;
                }
            } else if (v >= M) {
                if (_0x2fb529(0x9) !== _0x2fb529(0xa)) {
                    v = s[_0x2fb529(0x7)]();
                    d--;
                } else {
                    sum += a[0x3];
                }
            } else {
                s[_0x2fb529(0x6)](v + 0x1);
                d++;
            }
        }
    }
    let res = 0x0;
    ss[_0x2fb529(0xb)](s => {
        const _0x203ec4 = a0_0x4222;
        let sum = 0x0;
        A[_0x203ec4(0xb)](a => {
            const _0x3b6ce2 = a0_0x4222;
            if ('MVVBw' !== _0x3b6ce2(0xc)) {
                if (s[a[0x1] - 0x1] - s[a[0x0] - 0x1] === a[0x2]) {
                    sum += a[0x3];
                }
            } else {
                A[i] = rows[i + 0x1][_0x3b6ce2(0x3)]('\x20')[_0x3b6ce2(0x4)](Number);
            }
        });
        res = Math[_0x203ec4(0xd)](res, sum);
    });
    console[_0x2fb529(0xe)](res);
})(input);