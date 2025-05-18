'use strict';
const a0_0xe5e44f = a0_0x1506;
const main = input => {
    const _0x2766e7 = a0_0x1506;
    const args = input['split']('\x0a')[_0x2766e7(0x0)](arg => arg['split']('\x20'));
    const S = args[0x0][0x0];
    const N = S[_0x2766e7(0x1)];
    let odd = !![];
    let even = !![];
    for (let i = 0x0; i < N; i++) {
        if (i % 0x2 === 0x0) {
            if (![
                    'R',
                    'U',
                    'D'
                ][_0x2766e7(0x2)](S[i]))
                odd = ![];
        } else {
            if (![
                    'L',
                    'U',
                    'D'
                ]['includes'](S[i]))
                even = ![];
        }
    }
    if (odd && even)
        console[_0x2766e7(0x3)](_0x2766e7(0x4));
    else
        console['log']('No');
};
function a0_0x1506(iruGBK, key) {
    const stringArray = a0_0x4b77();
    a0_0x1506 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1506(iruGBK, key);
}
function a0_0x4b77() {
    const _0x25013 = [
        'map',
        'length',
        'includes',
        'log',
        'Yes',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x4b77 = function () {
        return _0x25013;
    };
    return a0_0x4b77();
}
main(require('fs')[a0_0xe5e44f(0x5)](a0_0xe5e44f(0x6), 'utf8'));