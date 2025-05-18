'use strict';
const a0_0xe410b9 = a0_0x19bd;
function a0_0x4364() {
    const _0x3b4abc = [
        'trim',
        'split',
        'slice',
        'map',
        'ABCDEFGHIJ',
        'snuke',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x4364 = function () {
        return _0x3b4abc;
    };
    return a0_0x4364();
}
const main = arg => {
    const _0x3b9579 = a0_0x19bd;
    arg = arg[_0x3b9579(0x0)]()[_0x3b9579(0x1)]('\x0a');
    const H = parseInt(arg[0x0][_0x3b9579(0x1)]('\x20')[0x0]);
    const W = parseInt(arg[0x0][_0x3b9579(0x1)]('\x20')[0x1]);
    const words = arg[_0x3b9579(0x2)](0x1, H + 0x1)[_0x3b9579(0x3)](s => s[_0x3b9579(0x1)]('\x20'));
    const alpha = _0x3b9579(0x4)[_0x3b9579(0x1)]('');
    for (let i = 0x0; i < H; i++) {
        for (let j = 0x0; j < W; j++) {
            if (words[i][j] === _0x3b9579(0x5)) {
                console[_0x3b9579(0x6)](alpha[j] + (i + 0x1));
                return;
            }
        }
    }
};
function a0_0x19bd(zzYjst, key) {
    const stringArray = a0_0x4364();
    a0_0x19bd = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x19bd(zzYjst, key);
}
main(require('fs')[a0_0xe410b9(0x7)](a0_0xe410b9(0x8), 'utf8'));