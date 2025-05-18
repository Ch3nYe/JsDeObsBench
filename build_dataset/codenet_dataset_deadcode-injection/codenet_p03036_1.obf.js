'use strict';
function a0_0x2712(IkLqNQ, key) {
    const stringArray = a0_0x2c95();
    a0_0x2712 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2712(IkLqNQ, key);
}
(function (input) {
    const _0x2b4777 = a0_0x2712;
    input = input[_0x2b4777(0x0)]()[_0x2b4777(0x1)](/\s+/)[_0x2b4777(0x2)](x => x - 0x0);
    const r = input[0x0];
    const D = input[0x1];
    let x = input[0x2];
    let ans = new Array(0xa);
    for (let i = 0x0; i < 0xa; i++) {
        x = r * x - D;
        ans[i] = x;
    }
    console['log'](ans[_0x2b4777(0x3)]('\x0a'));
}(require('fs')['readFileSync']('/dev/stdin', 'utf8')));
function a0_0x2c95() {
    const _0xfdb3e8 = [
        'trim',
        'split',
        'map',
        'join'
    ];
    a0_0x2c95 = function () {
        return _0xfdb3e8;
    };
    return a0_0x2c95();
}