'use strict';
function a0_0x181c(suFKfg, key) {
    const stringArray = a0_0x262a();
    a0_0x181c = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x181c(suFKfg, key);
}
const a0_0x156aa9 = a0_0x181c;
function Main(input) {
    const _0x573588 = a0_0x181c;
    const param = Number(input[_0x573588(0x0)]('\x20')[_0x573588(0x1)](''));
    if (param % 0x4 === 0x0) {
        console[_0x573588(0x2)]('YES');
    } else {
        console[_0x573588(0x2)]('NO');
    }
}
Main(require('fs')[a0_0x156aa9(0x3)](a0_0x156aa9(0x4), a0_0x156aa9(0x5)));
function a0_0x262a() {
    const _0x286618 = [
        'split',
        'join',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x262a = function () {
        return _0x286618;
    };
    return a0_0x262a();
}