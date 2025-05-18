const a0_0x457db8 = a0_0x3af5;
function a0_0x7065() {
    const _0x396849 = [
        'log',
        'trim',
        'map',
        'split',
        'fill',
        'push',
        'join',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x7065 = function () {
        return _0x396849;
    };
    return a0_0x7065();
}
function a0_0x3af5(WURKfR, key) {
    const stringArray = a0_0x7065();
    a0_0x3af5 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3af5(WURKfR, key);
}
console[a0_0x457db8(0x0)](function (args) {
    const _0x6fb538 = a0_0x3af5;
    const [[Q], ...tmp] = args[_0x6fb538(0x1)]()['split']('\x0a')[_0x6fb538(0x2)](r => r[_0x6fb538(0x3)]('\x20')[_0x6fb538(0x2)](v => v | 0x0));
    const MAX = 0x186a0;
    const a = Array(MAX)['fill'](!![]);
    const s = Array(MAX + 0x2)[_0x6fb538(0x4)](0x0);
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
        x[_0x6fb538(0x5)](s[r] - s[l]);
    }
    return x[_0x6fb538(0x6)]('\x0a');
}(require('fs')[a0_0x457db8(0x7)](a0_0x457db8(0x8), 'utf8')));