'use strict';
function a0_0xc80f(wtNnsS, key) {
    const stringArray = a0_0x3c60();
    a0_0xc80f = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xc80f(wtNnsS, key);
}
const a0_0x207136 = a0_0xc80f;
function main(s) {
    const _0x46f944 = a0_0xc80f;
    s = s['split']('\x0a');
    const o = s[0x0]['split']('');
    const e = s[0x1][_0x46f944(0x0)]('');
    let ans = '';
    for (let i = 0x0; i < o[_0x46f944(0x1)] + e[_0x46f944(0x1)]; i++) {
        if (o[i])
            ans += o[i];
        if (e[i])
            ans += e[i];
    }
    console[_0x46f944(0x2)](ans);
}
function a0_0x3c60() {
    const _0x1c2bef = [
        'split',
        'length',
        'log',
        'readFileSync',
        'utf8'
    ];
    a0_0x3c60 = function () {
        return _0x1c2bef;
    };
    return a0_0x3c60();
}
main(require('fs')[a0_0x207136(0x3)]('/dev/stdin', a0_0x207136(0x4)));