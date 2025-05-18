'use strict';
const a0_0x15ec37 = a0_0x4dfd;
function a0_0x4dfd(WddLGB, key) {
    const stringArray = a0_0x1064();
    a0_0x4dfd = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4dfd(WddLGB, key);
}
const main = arg => {
    const _0x249f4e = a0_0x4dfd;
    arg = arg['trim']()[_0x249f4e(0x0)]('\x0a');
    const N = ~~arg[0x0];
    const b = arg[0x1][_0x249f4e(0x0)]('\x20')[_0x249f4e(0x1)](n => ~~n);
    let answer = [];
    for (let i = 0x0; i < N; i++) {
        if (i % 0x2 === 0x0) {
            answer[_0x249f4e(0x2)](b[i]);
        } else {
            answer[_0x249f4e(0x3)](b[i]);
        }
    }
    if (N % 0x2 !== 0x0)
        answer = answer[_0x249f4e(0x4)]();
    console[_0x249f4e(0x5)](answer['join']('\x20'));
};
function a0_0x1064() {
    const _0x494196 = [
        'split',
        'map',
        'push',
        'unshift',
        'reverse',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x1064 = function () {
        return _0x494196;
    };
    return a0_0x1064();
}
main(require('fs')[a0_0x15ec37(0x6)](a0_0x15ec37(0x7), a0_0x15ec37(0x8)));