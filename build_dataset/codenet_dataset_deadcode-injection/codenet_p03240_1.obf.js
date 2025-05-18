'use strict';
const a0_0x237ef9 = a0_0x3d9b;
function a0_0x3d9b(CMnGrk, key) {
    const stringArray = a0_0x3882();
    a0_0x3d9b = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3d9b(CMnGrk, key);
}
const main = input => {
    const _0x1bb09a = a0_0x3d9b;
    input = input[_0x1bb09a(0x0)]('\x0a');
    const N = parseInt(input[0x0]);
    let X = [];
    let Y = [];
    let Z = [];
    input['slice'](0x1, N + 0x1)[_0x1bb09a(0x1)](v => {
        const _0x11fc3b = a0_0x3d9b;
        let tmp = v[_0x11fc3b(0x0)]('\x20')[_0x11fc3b(0x2)](j => parseInt(j));
        X[_0x11fc3b(0x3)](tmp[0x0]);
        Y['push'](tmp[0x1]);
        Z[_0x11fc3b(0x3)](tmp[0x2]);
    });
    const MAX = 0x64;
    for (let y = 0x0; y <= MAX; y++) {
        for (let x = 0x0; x <= MAX; x++) {
            let needH = -0x1;
            for (let i = 0x0; i < N; i++) {
                let tmp = Z[i] + Math['abs'](Y[i] - y) + Math['abs'](X[i] - x);
                if (needH === -0x1) {
                    needH = tmp;
                } else if (needH !== tmp) {
                    needH = -0x2;
                    break;
                }
            }
            if (needH === -0x2)
                continue;
            console[_0x1bb09a(0x4)](_0x1bb09a(0x5), x, y, needH);
        }
    }
};
function a0_0x3882() {
    const _0x2e61e7 = [
        'split',
        'forEach',
        'map',
        'push',
        'log',
        '%d\x20%d\x20%d',
        'readFileSync',
        'utf-8'
    ];
    a0_0x3882 = function () {
        return _0x2e61e7;
    };
    return a0_0x3882();
}
main(require('fs')[a0_0x237ef9(0x6)]('/dev/stdin', a0_0x237ef9(0x7)));