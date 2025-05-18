'use strict';
function a0_0x386f(cCpoFh, key) {
    const stringArray = a0_0x3235();
    a0_0x386f = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x386f(cCpoFh, key);
}
const a0_0x2951da = a0_0x386f;
function a0_0x3235() {
    const _0x21853e = [
        'trim',
        'split',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3235 = function () {
        return _0x21853e;
    };
    return a0_0x3235();
}
const main = arg => {
    const _0x485ef1 = a0_0x386f;
    arg = arg[_0x485ef1(0x0)]()['split']('\x0a');
    const L = parseInt(arg[0x0][_0x485ef1(0x1)]('\x20')[0x0]);
    const R = parseInt(arg[0x0][_0x485ef1(0x1)]('\x20')[0x1]);
    const d = parseInt(arg[0x0][_0x485ef1(0x1)]('\x20')[0x2]);
    let answer = 0x0;
    for (let i = L; i <= R; i++) {
        if (i % d === 0x0)
            answer++;
    }
    console['log'](answer);
};
main(require('fs')[a0_0x2951da(0x2)](a0_0x2951da(0x3), a0_0x2951da(0x4)));