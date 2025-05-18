'use strict';
function a0_0x4242(nLgVzS, key) {
    const stringArray = a0_0xdcee();
    a0_0x4242 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4242(nLgVzS, key);
}
const a0_0x410b2b = a0_0x4242;
function a0_0xdcee() {
    const _0x2d9c68 = [
        'trim',
        'split',
        'map',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0xdcee = function () {
        return _0x2d9c68;
    };
    return a0_0xdcee();
}
const main = arg => {
    const _0x4a675e = a0_0x4242;
    arg = arg[_0x4a675e(0x0)]()[_0x4a675e(0x1)]('\x0a');
    const N = parseInt(arg[0x0]);
    const P = arg[0x1][_0x4a675e(0x1)]('\x20')[_0x4a675e(0x2)](n => parseInt(n));
    let answer = 0x0;
    for (let i in P) {
        if (parseInt(i) + 0x1 === P[i]) {
            let temp = P[i];
            P[i] = P[parseInt(i) + 0x1];
            P[parseInt(i) + 0x1] = temp;
            answer++;
        }
    }
    console[_0x4a675e(0x3)](answer);
};
main(require('fs')[a0_0x410b2b(0x4)](a0_0x410b2b(0x5), 'utf8'));