'use strict';
const a0_0x21e80a = a0_0x61e7;
function a0_0x17bb() {
    const _0x249ba7 = [
        'trim',
        'split',
        'filter',
        'length',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x17bb = function () {
        return _0x249ba7;
    };
    return a0_0x17bb();
}
const main = arg => {
    const _0x117472 = a0_0x61e7;
    arg = arg[_0x117472(0x0)]()['split']('\x0a');
    const N = parseInt(arg[0x0][_0x117472(0x1)]('\x20')[0x0]);
    const A = arg[0x1][_0x117472(0x1)]('');
    const Rsum = A[_0x117472(0x2)](n => n === 'E')[_0x117472(0x3)];
    const Lsum = N - Rsum;
    let Rcnt = 0x0;
    let Lcnt = 0x0;
    let answer = Infinity;
    for (let i = 0x0; i < N; i++) {
        const needMoveLeft = Lcnt;
        let needMoveRight = Rsum - Rcnt;
        if (A[i] === 'E') {
            needMoveRight--;
        }
        answer = Math['min'](answer, needMoveLeft + needMoveRight);
        if (A[i] === 'W') {
            Lcnt++;
        } else {
            Rcnt++;
        }
    }
    console['log'](answer);
};
function a0_0x61e7(dvKKtV, key) {
    const stringArray = a0_0x17bb();
    a0_0x61e7 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x61e7(dvKKtV, key);
}
main(require('fs')[a0_0x21e80a(0x4)](a0_0x21e80a(0x5), a0_0x21e80a(0x6)));