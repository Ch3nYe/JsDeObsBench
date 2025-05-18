'use strict';
function a0_0x3b4c(WxnBbe, key) {
    const stringArray = a0_0x3b94();
    a0_0x3b4c = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3b4c(WxnBbe, key);
}
const a0_0x33b040 = a0_0x3b4c;
const main = arg => {
    const _0x2d474f = a0_0x3b4c;
    arg = arg[_0x2d474f(0x0)]()['split']('\x0a');
    const N = parseInt(arg[0x0][_0x2d474f(0x1)]('\x20')[0x0]);
    const M = parseInt(arg[0x0][_0x2d474f(0x1)]('\x20')[0x1]);
    const dangers = arg[_0x2d474f(0x2)](0x1, M + 0x1);
    let answer = [...Array(N + 0x1)][_0x2d474f(0x3)](0x1);
    let broken = -0x1;
    let NG = ![];
    for (let i in dangers) {
        if (broken + 0x1 === dangers[i]) {
            NG = !![];
        }
        answer[dangers[i]] = 0x0;
        broken = dangers[i];
    }
    for (let i = 0x2; i <= N; i++) {
        answer[i] = answer[i] * (answer[i - 0x2] + answer[i - 0x1]) % 0x3b9aca07;
    }
    console['log'](answer[N]);
};
function a0_0x3b94() {
    const _0x3e09fd = [
        'trim',
        'split',
        'slice',
        'fill',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x3b94 = function () {
        return _0x3e09fd;
    };
    return a0_0x3b94();
}
main(require('fs')[a0_0x33b040(0x4)](a0_0x33b040(0x5), 'utf8'));