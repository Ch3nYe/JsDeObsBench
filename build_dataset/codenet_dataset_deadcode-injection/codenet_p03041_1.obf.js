'use strict';
const a0_0x9303b5 = a0_0x51ca;
const Main = input => {
    const _0x3f8cc1 = a0_0x51ca;
    let tmp = input[_0x3f8cc1(0x0)]('\x0a');
    let Num = tmp[0x0][_0x3f8cc1(0x0)]('\x20')['map'](Number)[0x0];
    let Kji = tmp[0x0][_0x3f8cc1(0x0)]('\x20')['map'](Number)[0x1];
    let Str = tmp[0x1][_0x3f8cc1(0x1)]();
    let Change = Str[Kji - 0x1];
    switch (Change) {
    case 'A':
        Change = 'a';
        break;
    case 'B':
        Change = 'b';
        break;
    case 'C':
        Change = 'c';
        break;
    }
    let StrArr = Str['split']('');
    StrArr[Kji - 0x1] = Change;
    Str = StrArr[_0x3f8cc1(0x2)]('');
    console[_0x3f8cc1(0x3)](Str);
};
Main(require('fs')[a0_0x9303b5(0x4)](a0_0x9303b5(0x5), 'utf8'));
function a0_0x51ca(wGKVAO, key) {
    const stringArray = a0_0x53f5();
    a0_0x51ca = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x51ca(wGKVAO, key);
}
function a0_0x53f5() {
    const _0x4b62bc = [
        'split',
        'trim',
        'join',
        'log',
        'readFileSync',
        '/dev/stdin'
    ];
    a0_0x53f5 = function () {
        return _0x4b62bc;
    };
    return a0_0x53f5();
}