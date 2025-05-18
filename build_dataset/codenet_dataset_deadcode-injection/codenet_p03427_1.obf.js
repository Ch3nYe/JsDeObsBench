'use strict';
function a0_0x2b75(jeppRE, key) {
    const stringArray = a0_0xaedb();
    a0_0x2b75 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2b75(jeppRE, key);
}
const a0_0x641ffa = a0_0x2b75;
const main = input => {
    const _0x1281cd = a0_0x2b75;
    const lines = input[_0x1281cd(0x0)]('\x0a');
    if (lines[0x0][_0x1281cd(0x1)] === 0x1) {
        console[_0x1281cd(0x2)](lines[0x0]);
        return;
    }
    const len9 = lines[0x0][_0x1281cd(0x1)] - 0x1;
    const head = parseInt(lines[0x0][0x0]) - 0x1;
    console['log'](head + len9 * 0x9);
};
main(require('fs')['readFileSync'](a0_0x641ffa(0x3), a0_0x641ffa(0x4)));
function a0_0xaedb() {
    const _0x5c9a17 = [
        'split',
        'length',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0xaedb = function () {
        return _0x5c9a17;
    };
    return a0_0xaedb();
}