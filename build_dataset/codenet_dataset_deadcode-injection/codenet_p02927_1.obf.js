'use strict';
const a0_0x39fdd2 = a0_0x665e;
const main = input => {
    const _0x5aabef = a0_0x665e;
    const args = input['split']('\x0a')['map'](arg => arg['split']('\x20'));
    const M = parseInt(args[0x0][0x0], 0xa);
    const D = parseInt(args[0x0][0x1], 0xa);
    let cnt = 0x0;
    for (let m = 0x1; m <= M; m++) {
        for (let j = 0x1; j <= D; j++) {
            const d1 = j % 0xa;
            const d10 = Math[_0x5aabef(0x0)](j / 0xa);
            if (d1 >= 0x2 && d10 >= 0x2 && d1 * d10 === m) {
                cnt++;
            }
        }
    }
    console[_0x5aabef(0x1)](cnt);
};
function a0_0x3d09() {
    const _0x4c5a2e = [
        'floor',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3d09 = function () {
        return _0x4c5a2e;
    };
    return a0_0x3d09();
}
function a0_0x665e(jZhpEG, key) {
    const stringArray = a0_0x3d09();
    a0_0x665e = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x665e(jZhpEG, key);
}
main(require('fs')['readFileSync'](a0_0x39fdd2(0x2), a0_0x39fdd2(0x3)));