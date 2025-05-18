'use strict';
function a0_0x48f5(gRsXnp, key) {
    const stringArray = a0_0x4d58();
    a0_0x48f5 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x48f5(gRsXnp, key);
}
const a0_0x856f69 = a0_0x48f5;
function a0_0x4d58() {
    const _0x5ad7c6 = [
        'trim',
        'split',
        'shift',
        'map',
        'pow',
        'ceil',
        'push',
        'min',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4d58 = function () {
        return _0x5ad7c6;
    };
    return a0_0x4d58();
}
function main(input) {
    const _0x1b45ff = a0_0x48f5;
    input = input[_0x1b45ff(0x0)]()[_0x1b45ff(0x1)]('\x0a');
    const DG = input[_0x1b45ff(0x2)]()[_0x1b45ff(0x1)]('\x20')[_0x1b45ff(0x3)](v => Number(v));
    input = input[_0x1b45ff(0x3)](v => v[_0x1b45ff(0x1)]('\x20')['map'](v => Number(v)));
    const calc = (a, r) => {
        const _0x222d6c = a0_0x48f5;
        let count = [Math[_0x222d6c(0x4)](0xa, 0x8)];
        for (let i = 0x0; i < DG[0x0]; i++) {
            const cur = Math[_0x222d6c(0x4)](0x2, i);
            if ((a & cur) === cur) {
                const points = (i + 0x1) * 0x64;
                let max = points * input[i][0x0] + input[i][0x1];
                let num = Math[_0x222d6c(0x5)](r / points);
                if (max < r) {
                    count[_0x222d6c(0x6)](input[i][0x0] + calc(a - cur, r - max));
                } else {
                    count[_0x222d6c(0x6)](num < input[i][0x0] ? num : input[i][0x0]);
                }
            }
        }
        return Math[_0x222d6c(0x7)](...count);
    };
    console['log'](calc(Math[_0x1b45ff(0x4)](0x2, DG[0x0]) - 0x1, DG[0x1]));
}
main(require('fs')['readFileSync'](a0_0x856f69(0x8), a0_0x856f69(0x9)));