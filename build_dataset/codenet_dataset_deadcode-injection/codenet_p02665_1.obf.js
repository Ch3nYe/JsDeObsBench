function a0_0x41ff() {
    const _0x152586 = [
        'log',
        'trim',
        'split',
        'map',
        'push',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x41ff = function () {
        return _0x152586;
    };
    return a0_0x41ff();
}
function a0_0x8baa(SBuwgS, key) {
    const stringArray = a0_0x41ff();
    a0_0x8baa = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x8baa(SBuwgS, key);
}
const a0_0x3c467c = a0_0x8baa;
console[a0_0x3c467c(0x0)]((args => {
    const _0x500eb0 = a0_0x8baa;
    const [[N], A] = args[_0x500eb0(0x1)]()[_0x500eb0(0x2)]('\x0a')[_0x500eb0(0x3)](r => r['split']('\x20')[_0x500eb0(0x3)](v => v | 0x0));
    const a = [0x1 - A[0x0]];
    for (let i = 0x1; i < N; i++)
        a[_0x500eb0(0x4)](a[i - 0x1] * 0x2 - A[i]);
    a['push'](0x0);
    let n = BigInt(A[N]);
    for (let i = N - 0x1; i >= 0x0; i--) {
        const c = a[i + 0x1] + A[i + 0x1];
        if (a[i] > c)
            a[i] = c;
        else if (a[i] * 0x2 < c)
            return '-1';
        n += BigInt(a[i] + A[i]);
    }
    return '' + n;
})(require('fs')[a0_0x3c467c(0x5)](a0_0x3c467c(0x6), a0_0x3c467c(0x7))));