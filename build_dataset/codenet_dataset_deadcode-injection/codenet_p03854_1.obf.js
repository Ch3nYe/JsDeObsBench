'use strict';
const a0_0x4f4404 = a0_0x1450;
function Main(input) {
    const _0x3cc101 = a0_0x1450;
    const arr = [
        _0x3cc101(0x0),
        'dreamer',
        _0x3cc101(0x1),
        _0x3cc101(0x2)
    ];
    for (let i in arr) {
        arr[i] = reverse(arr[i]);
    }
    input = reverse(input);
    while (input[_0x3cc101(0x3)] > 0x0) {
        let flag = ![];
        for (let s of arr) {
            if ('bBBrZ' === _0x3cc101(0x4)) {
                arr[i] = reverse(arr[i]);
            } else {
                if (input['slice'](0x0, s[_0x3cc101(0x3)]) == s) {
                    input = input['substr'](s['length']);
                    flag = !![];
                }
            }
        }
        if (flag == ![])
            break;
    }
    if (input['length'] <= 0x0) {
        console[_0x3cc101(0x5)](_0x3cc101(0x6));
    } else {
        if (_0x3cc101(0x7) === _0x3cc101(0x8)) {
            if (input['slice'](0x0, s[_0x3cc101(0x3)]) == s) {
                input = input[_0x3cc101(0x9)](s[_0x3cc101(0x3)]);
                flag = !![];
            }
        } else {
            console['log']('NO');
        }
    }
}
function a0_0x1e38() {
    const _0x2bb93c = [
        'dream',
        'erase',
        'eraser',
        'length',
        'DAQAK',
        'log',
        'YES',
        'Jboni',
        'mdPjo',
        'substr',
        'join',
        'readFileSync',
        '/dev/stdin',
        'utf-8'
    ];
    a0_0x1e38 = function () {
        return _0x2bb93c;
    };
    return a0_0x1e38();
}
function reverse(str) {
    const _0x42faf2 = a0_0x1450;
    return str['split']('')['reverse']()[_0x42faf2(0xa)]('');
}
function a0_0x1450(yXwQCt, key) {
    const stringArray = a0_0x1e38();
    a0_0x1450 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1450(yXwQCt, key);
}
Main(require('fs')[a0_0x4f4404(0xb)](a0_0x4f4404(0xc), a0_0x4f4404(0xd)));