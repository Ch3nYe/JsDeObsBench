'use strict';
const a0_0xef26e9 = a0_0x15cc;
function a0_0x15cc(BZIzjr, key) {
    const stringArray = a0_0x2573();
    a0_0x15cc = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x15cc(BZIzjr, key);
}
function main(input) {
    const _0x48d888 = a0_0x15cc;
    let n = parseInt(input[0x0]);
    let s = input[0x1];
    let q_l = parseInt(input[0x2]);
    let q = [];
    for (let j = 0x0; j < q_l; j++) {
        let kari = input[j + 0x3][_0x48d888(0x0)]()[_0x48d888(0x1)]('\x20');
        q[j] = parseInt(kari[0x0]);
        if (q[j] === 0x1) {
            let i = parseInt(kari[0x1]);
            let c = kari[0x2];
            let str1 = s['slice'](0x0, i - 0x1);
            let str2 = s[_0x48d888(0x2)](i);
            s = str1 + c + str2;
        } else {
            let l = parseInt(kari[0x1]);
            let r = parseInt(kari[0x2]);
            let str = s['slice'](l - 0x1, r);
            let list = {};
            let counter = 0x0;
            for (let i = 0x0; i < str[_0x48d888(0x3)]; i++) {
                if (list[str[i]] === undefined) {
                    counter++;
                    list[str[i]] = !![];
                }
            }
            console[_0x48d888(0x4)](counter);
        }
    }
}
main(require('fs')[a0_0xef26e9(0x5)]('/dev/stdin', a0_0xef26e9(0x6))[a0_0xef26e9(0x0)]()[a0_0xef26e9(0x1)]('\x0a'));
function a0_0x2573() {
    const _0x1dee75 = [
        'trim',
        'split',
        'slice',
        'length',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x2573 = function () {
        return _0x1dee75;
    };
    return a0_0x2573();
}