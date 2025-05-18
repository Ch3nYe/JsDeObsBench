const a0_0x3c97aa = a0_0x5ea4;
function a0_0x5ea4(dHlNId, key) {
    const stringArray = a0_0x3fa2();
    a0_0x5ea4 = function (index, key) {
        index = index - 0xfd;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5ea4(dHlNId, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x30f933 = a0_0x5ea4;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x30f933(0x10d)) / 0x1 + -parseInt(_0x30f933(0x101)) / 0x2 * (-parseInt(_0x30f933(0x104)) / 0x3) + -parseInt(_0x30f933(0xfe)) / 0x4 * (parseInt(_0x30f933(0x10b)) / 0x5) + parseInt(_0x30f933(0x106)) / 0x6 * (-parseInt(_0x30f933(0x10c)) / 0x7) + -parseInt(_0x30f933(0xfd)) / 0x8 * (parseInt(_0x30f933(0x10f)) / 0x9) + -parseInt(_0x30f933(0x109)) / 0xa + parseInt(_0x30f933(0x10a)) / 0xb * (parseInt(_0x30f933(0x103)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3fa2, 0xe637e));
console[a0_0x3c97aa(0x100)]((args => {
    const _0xe606cf = a0_0x3c97aa;
    const [[N], D, [M], T] = args[_0xe606cf(0x107)]()[_0xe606cf(0xff)]('\x0a')[_0xe606cf(0x105)](r => r['split']('\x20')[_0xe606cf(0x105)](v => v | 0x0));
    D[_0xe606cf(0x108)]((a, b) => a - b);
    T['sort']((a, b) => a - b);
    let j = -0x1;
    Q:
        for (let i = 0x0; i < M; i++) {
            while (++j < N) {
                if (D[j] > T[i])
                    return 'NO';
                if (D[j] === T[i])
                    continue Q;
            }
            return 'NO';
        }
    return _0xe606cf(0x102);
})(require('fs')['readFileSync'](a0_0x3c97aa(0x10e), 'utf8')));
function a0_0x3fa2() {
    const _0x4b95e8 = [
        '4451679ipLNQa',
        'map',
        '12gykjUO',
        'trim',
        'sort',
        '8401190edJGlD',
        '93731tSaPiw',
        '6416810zoerHu',
        '376117sfkqoM',
        '1325716uuScqM',
        '/dev/stdin',
        '315szxFru',
        '312104XAJBdJ',
        '4WhcOlk',
        'split',
        'log',
        '2fTPlpq',
        'YES',
        '2436FCYokk'
    ];
    a0_0x3fa2 = function () {
        return _0x4b95e8;
    };
    return a0_0x3fa2();
}