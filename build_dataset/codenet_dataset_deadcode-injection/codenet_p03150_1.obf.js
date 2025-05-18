'use strict';
const a0_0x57a0be = a0_0x54aa;
function a0_0x22cc() {
    const _0x5b0595 = [
        'stdin',
        'resume',
        'setEncoding',
        'utf8',
        'readline',
        'createInterface',
        'stdout',
        'keyence',
        'indexOf',
        'log',
        'YES',
        'shift',
        'slice'
    ];
    a0_0x22cc = function () {
        return _0x5b0595;
    };
    return a0_0x22cc();
}
function a0_0x54aa(SwLaqc, key) {
    const stringArray = a0_0x22cc();
    a0_0x54aa = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x54aa(SwLaqc, key);
}
process[a0_0x57a0be(0x0)][a0_0x57a0be(0x1)]();
process[a0_0x57a0be(0x0)][a0_0x57a0be(0x2)](a0_0x57a0be(0x3));
var reader = require(a0_0x57a0be(0x4))[a0_0x57a0be(0x5)]({
    'input': process[a0_0x57a0be(0x0)],
    'output': process[a0_0x57a0be(0x6)]
});
reader['on']('line', line => {
    const _0x557dd5 = a0_0x54aa;
    let word = line;
    let arr = [
        'k',
        'e',
        'y',
        'e',
        'n',
        'c',
        'e'
    ];
    let keyence = _0x557dd5(0x7);
    if (word[_0x557dd5(0x8)]('keyence') != -0x1) {
        console[_0x557dd5(0x9)](_0x557dd5(0xa));
        return;
    }
    let str = '';
    let ans = ![];
    for (let i = 0x0; i < 0x6; i++) {
        str += arr[_0x557dd5(0xb)]();
        let tmp = keyence[_0x557dd5(0xc)](i + 0x1);
        if (word[_0x557dd5(0x8)](str) != -0x1 && word['indexOf'](tmp) != -0x1) {
            ans = !![];
            break;
        }
    }
    if (ans)
        console[_0x557dd5(0x9)](_0x557dd5(0xa));
    else
        console['log']('NO');
});