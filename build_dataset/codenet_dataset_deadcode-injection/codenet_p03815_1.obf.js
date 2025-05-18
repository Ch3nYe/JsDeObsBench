'use strict';
function a0_0x224c() {
    const _0x8bf76b = [
        'trim',
        'split',
        'floor',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x224c = function () {
        return _0x8bf76b;
    };
    return a0_0x224c();
}
const a0_0x3b78aa = a0_0x4c54;
function a0_0x4c54(Batxmz, key) {
    const stringArray = a0_0x224c();
    a0_0x4c54 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4c54(Batxmz, key);
}
const main = arg => {
    const _0x21f6fe = a0_0x4c54;
    const input = arg[_0x21f6fe(0x0)]()['split']('\x0a');
    let x = Number(input[0x0][_0x21f6fe(0x1)]('\x20')[0x0]);
    if (x % 0xb > 0x6) {
        console['log'](Math[_0x21f6fe(0x2)](x / 0xb) * 0x2 + 0x2);
    } else if (x % 0xb > 0x0) {
        console[_0x21f6fe(0x3)](Math[_0x21f6fe(0x2)](x / 0xb) * 0x2 + 0x1);
    } else {
        console[_0x21f6fe(0x3)](Math[_0x21f6fe(0x2)](x / 0xb) * 0x2);
    }
};
main(require('fs')[a0_0x3b78aa(0x4)](a0_0x3b78aa(0x5), a0_0x3b78aa(0x6)));