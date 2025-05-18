const a0_0x134068 = a0_0x55b7;
function a0_0x55b7(FfWwfU, key) {
    const stringArray = a0_0x110a();
    a0_0x55b7 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x55b7(FfWwfU, key);
}
function a0_0x110a() {
    const _0x1ef976 = [
        'log',
        'split',
        'map',
        'concat',
        'sort',
        'join',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x110a = function () {
        return _0x1ef976;
    };
    return a0_0x110a();
}
console[a0_0x134068(0x0)]((args => {
    const _0x85f630 = a0_0x55b7;
    const [[N], X] = args['trim']()[_0x85f630(0x1)]('\x0a')[_0x85f630(0x2)](r => r[_0x85f630(0x1)]('\x20')[_0x85f630(0x2)](v => v | 0x0));
    const _X = [][_0x85f630(0x3)](X)[_0x85f630(0x4)]((a, b) => a - b);
    const M1 = _X[N / 0x2 - 0x1], M2 = _X[N / 0x2];
    const m = [];
    for (let i = 0x0; i < N; i++) {
        if (X[i] <= M1)
            m['push'](M2);
        else
            m['push'](M1);
    }
    return m[_0x85f630(0x5)]`\n`;
})(require('fs')[a0_0x134068(0x6)](a0_0x134068(0x7), a0_0x134068(0x8))));