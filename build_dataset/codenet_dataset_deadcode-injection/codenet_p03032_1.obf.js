'use strict';
const a0_0x5794c4 = a0_0x25f1;
function a0_0x25f1(cdBweA, key) {
    const stringArray = a0_0x47d5();
    a0_0x25f1 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x25f1(cdBweA, key);
}
function main(input) {
    const _0x1e315b = a0_0x25f1;
    input = input[_0x1e315b(0x0)]()[_0x1e315b(0x1)]('\x0a');
    const NK = input[_0x1e315b(0x2)]()[_0x1e315b(0x1)]('\x20')['map'](val => Number(val));
    const count = Math[_0x1e315b(0x3)](...NK);
    input = input[0x0]['split']('\x20')[_0x1e315b(0x4)](val => Number(val));
    const ans = [];
    for (let l = 0x0; l <= count; l++) {
        for (let r = 0x0; r <= count - l; r++) {
            let temp = [
                ...input[_0x1e315b(0x5)](0x0, l),
                ...input[_0x1e315b(0x5)](NK[0x0] - r)
            ][_0x1e315b(0x6)]((a, b) => a - b);
            let remain = NK[0x1] - l - r;
            for (let i = 0x0; i < remain; i++) {
                if (temp[i] >= 0x0)
                    break;
                temp[i] = 0x0;
            }
            ans[_0x1e315b(0x7)](temp[_0x1e315b(0x8)]((p, c) => p + c, 0x0));
        }
    }
    console['log'](Math[_0x1e315b(0x9)](...ans));
}
main(require('fs')[a0_0x5794c4(0xa)](a0_0x5794c4(0xb), a0_0x5794c4(0xc)));
function a0_0x47d5() {
    const _0x25f695 = [
        'trim',
        'split',
        'shift',
        'min',
        'map',
        'slice',
        'sort',
        'push',
        'reduce',
        'max',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x47d5 = function () {
        return _0x25f695;
    };
    return a0_0x47d5();
}