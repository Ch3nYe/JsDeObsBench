'use strict';
const a0_0x13d796 = a0_0x3e7b;
function a0_0x4465() {
    const _0x17f9fa = [
        'split',
        'pop',
        'push',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4465 = function () {
        return _0x17f9fa;
    };
    return a0_0x4465();
}
function a0_0x3e7b(hMYTeU, key) {
    const stringArray = a0_0x4465();
    a0_0x3e7b = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3e7b(hMYTeU, key);
}
function Main(input) {
    const _0x3bb952 = a0_0x3e7b;
    const tape = input['split']('\x0a')[0x0][_0x3bb952(0x0)]('');
    const result = [];
    for (const v of tape) {
        if (v === 'B') {
            result[_0x3bb952(0x1)]();
        } else {
            result[_0x3bb952(0x2)](v);
        }
    }
    console['log'](result['join'](''));
}
Main(require('fs')[a0_0x13d796(0x3)](a0_0x13d796(0x4), a0_0x13d796(0x5)));