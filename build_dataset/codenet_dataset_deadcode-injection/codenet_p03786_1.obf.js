const a0_0x549ecc = a0_0x491b;
function a0_0x48db() {
    const _0x4f68a2 = [
        'log',
        'trim',
        'split',
        'map',
        'sort',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x48db = function () {
        return _0x4f68a2;
    };
    return a0_0x48db();
}
function a0_0x491b(mlHjoJ, key) {
    const stringArray = a0_0x48db();
    a0_0x491b = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x491b(mlHjoJ, key);
}
console[a0_0x549ecc(0x0)]((args => {
    const _0x2df7f8 = a0_0x491b;
    const [[N], A] = args[_0x2df7f8(0x1)]()[_0x2df7f8(0x2)]('\x0a')['map'](r => r[_0x2df7f8(0x2)]('\x20')[_0x2df7f8(0x3)](v => v | 0x0));
    A[_0x2df7f8(0x4)]((a, b) => a - b);
    let sum = A[0x0], n = 0x0;
    for (let i = 0x1; i < N; i++) {
        if (sum * 0x2 >= A[i])
            n++;
        else
            n = 0x0;
        if (sum + A[i] >= 0x3b9aca00)
            return '' + (n + N - i);
        sum = sum + A[i];
    }
    return '' + (n + 0x1);
})(require('fs')[a0_0x549ecc(0x5)](a0_0x549ecc(0x6), a0_0x549ecc(0x7))));