'use strict';
const a0_0x2d8c0b = a0_0x3466;
function a0_0x3466(WCkuUE, key) {
    const stringArray = a0_0x42bb();
    a0_0x3466 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3466(WCkuUE, key);
}
function a0_0x42bb() {
    const _0x24bf31 = [
        'split',
        'map',
        'repeat',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x42bb = function () {
        return _0x24bf31;
    };
    return a0_0x42bb();
}
function main(input) {
    const _0x2d6dd5 = a0_0x3466;
    input = input[_0x2d6dd5(0x0)]('\x0a');
    input[0x0] = input[0x0]['split']('\x20')[_0x2d6dd5(0x1)](v => ~~v);
    const h = input[0x0][0x0];
    const w = input[0x0][0x1];
    let tmp = '#'['repeat'](w + 0x2) + '\x0a';
    for (let i = 0x1; i <= h; i++) {
        tmp += '#' + input[i] + '#\x0a';
    }
    tmp += '#'[_0x2d6dd5(0x2)](w + 0x2);
    console[_0x2d6dd5(0x3)](tmp);
}
main(require('fs')[a0_0x2d8c0b(0x4)](a0_0x2d8c0b(0x5), a0_0x2d8c0b(0x6)));