'use strict';
const a0_0xaa4740 = a0_0x3884;
function a0_0x6248() {
    const _0x42af0b = [
        'log',
        'split',
        'shift',
        'splice',
        'readFileSync',
        'utf8'
    ];
    a0_0x6248 = function () {
        return _0x42af0b;
    };
    return a0_0x6248();
}
function a0_0x3884(FkOhQJ, key) {
    const stringArray = a0_0x6248();
    a0_0x3884 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3884(FkOhQJ, key);
}
console[a0_0xaa4740(0x0)](function (args) {
    const _0x3639e5 = a0_0x3884;
    const _tmp = args['trim']()[_0x3639e5(0x1)]('\x0a');
    const N = _tmp[_0x3639e5(0x2)]() | 0x0;
    const A = [], x = [], y = [];
    for (let i = 0x0; i < N; i++) {
        A[i] = _tmp['shift']() | 0x0;
        x[i] = [];
        y[i] = [];
        for (let j = 0x0; j < A[i]; j++) {
            const xy = _tmp[j][_0x3639e5(0x1)]('\x20');
            x[i][j] = xy[0x0] - 0x1;
            y[i][j] = xy[0x1] | 0x0;
        }
        _tmp[_0x3639e5(0x3)](0x0, A[i]);
    }
    let K = 0x0;
    TEST:
        for (let honest = 0x1; honest < 0x1 << N; honest++) {
            let k = 0x0;
            for (let i = 0x0; i < N; i++) {
                if (!(honest & 0x1 << i))
                    continue;
                k++;
                for (let j = 0x0; j < A[i]; j++) {
                    const Xij = x[i][j], Yij = y[i][j];
                    const target = honest & 0x1 << Xij;
                    if (target !== Yij << Xij)
                        continue TEST;
                }
            }
            if (k > K)
                K = k;
        }
    return K;
}(require('fs')[a0_0xaa4740(0x4)]('/dev/stdin', a0_0xaa4740(0x5))));