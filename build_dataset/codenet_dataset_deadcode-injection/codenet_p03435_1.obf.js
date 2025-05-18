'use strict';
const a0_0x49bb9d = a0_0x125b;
const main = arg => {
    const _0x25826c = a0_0x125b;
    arg = arg[_0x25826c(0x0)]()['split']('\x0a');
    const c = arg['map'](n => n['split']('\x20')['map'](l => parseInt(l)));
    for (let a1 = 0x0; a1 <= 0x64; a1++) {
        const b1 = c[0x0][0x0] - a1;
        const b2 = c[0x1][0x0] - a1;
        const b3 = c[0x2][0x0] - a1;
        for (let a2 = 0x0; a2 <= 0x64; a2++) {
            if (a2 + b1 !== c[0x0][0x1])
                continue;
            if (a2 + b2 !== c[0x1][0x1])
                continue;
            if (a2 + b3 !== c[0x2][0x1])
                continue;
            for (let a3 = 0x0; a3 <= 0x64; a3++) {
                if (a3 + b1 !== c[0x0][0x2])
                    continue;
                if (a3 + b2 !== c[0x1][0x2])
                    continue;
                if (a3 + b3 !== c[0x2][0x2])
                    continue;
                console[_0x25826c(0x1)](_0x25826c(0x2));
                return;
            }
        }
    }
    console[_0x25826c(0x1)]('No');
};
main(require('fs')[a0_0x49bb9d(0x3)](a0_0x49bb9d(0x4), a0_0x49bb9d(0x5)));
function a0_0x125b(nFylcm, key) {
    const stringArray = a0_0x32aa();
    a0_0x125b = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x125b(nFylcm, key);
}
function a0_0x32aa() {
    const _0x13af88 = [
        'trim',
        'log',
        'Yes',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x32aa = function () {
        return _0x13af88;
    };
    return a0_0x32aa();
}