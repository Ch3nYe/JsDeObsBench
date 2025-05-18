function a0_0x3c42(OrYVDf, key) {
    const stringArray = a0_0x43da();
    a0_0x3c42 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3c42(OrYVDf, key);
}
function a0_0x43da() {
    const _0x475d9a = [
        'trim',
        'map',
        'sort',
        'YES',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x43da = function () {
        return _0x475d9a;
    };
    return a0_0x43da();
}
const a0_0x523c0d = a0_0x3c42;
console['log']((args => {
    const _0x18e672 = a0_0x3c42;
    const [[N], D, [M], T] = args[_0x18e672(0x0)]()['split']('\x0a')[_0x18e672(0x1)](r => r['split']('\x20')['map'](v => v | 0x0));
    D[_0x18e672(0x2)]((a, b) => a - b);
    T[_0x18e672(0x2)]((a, b) => a - b);
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
    return _0x18e672(0x3);
})(require('fs')[a0_0x523c0d(0x4)](a0_0x523c0d(0x5), 'utf8')));