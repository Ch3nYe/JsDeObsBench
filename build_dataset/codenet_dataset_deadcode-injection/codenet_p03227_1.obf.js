'use strict';
const a0_0x4c1fe7 = a0_0x2780;
function a0_0x2780(zCYsIl, key) {
    const stringArray = a0_0x31ad();
    a0_0x2780 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2780(zCYsIl, key);
}
function Main(input) {
    const _0x536146 = a0_0x2780;
    const S = input[_0x536146(0x0)]('\x0a')[0x0];
    if (S['length'] <= 0x2) {
        console['log'](S);
    } else {
        console[_0x536146(0x1)](S['split']('')[_0x536146(0x2)]()[_0x536146(0x3)](''));
    }
}
function a0_0x31ad() {
    const _0x28836c = [
        'split',
        'log',
        'reverse',
        'join',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x31ad = function () {
        return _0x28836c;
    };
    return a0_0x31ad();
}
Main(require('fs')[a0_0x4c1fe7(0x4)](a0_0x4c1fe7(0x5), a0_0x4c1fe7(0x6)));