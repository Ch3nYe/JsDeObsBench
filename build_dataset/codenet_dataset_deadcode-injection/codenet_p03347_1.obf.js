const a0_0x3f267b = a0_0x2512;
function a0_0x2512(gTMNPl, key) {
    const stringArray = a0_0x4b04();
    a0_0x2512 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2512(gTMNPl, key);
}
function a0_0x4b04() {
    const _0x17b3fd = [
        'log',
        'trim',
        'split',
        'map',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4b04 = function () {
        return _0x17b3fd;
    };
    return a0_0x4b04();
}
console[a0_0x3f267b(0x0)]((args => {
    const _0x1794aa = a0_0x2512;
    const [N, ...A] = args[_0x1794aa(0x1)]()[_0x1794aa(0x2)]('\x0a')[_0x1794aa(0x3)](v => v | 0x0);
    if (A[0x0] > 0x0)
        return '-1';
    let m = 0x0;
    for (let i = 0x1; i < N; i++) {
        if (A[i] > i || A[i] > A[i - 0x1] + 0x1)
            return '-1';
        if (A[i] === A[i - 0x1] + 0x1)
            m++;
        else if (A[i] <= A[i - 0x1])
            m += A[i];
    }
    return '' + m;
})(require('fs')[a0_0x3f267b(0x4)](a0_0x3f267b(0x5), a0_0x3f267b(0x6))));