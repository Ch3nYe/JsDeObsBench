function a0_0x4229() {
    const _0x21e8a9 = [
        'split',
        'shift',
        'length',
        'push',
        'log',
        'reverse',
        'join',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4229 = function () {
        return _0x21e8a9;
    };
    return a0_0x4229();
}
const a0_0x4e6ea2 = a0_0x5951;
function Main(input) {
    'use strict';
    const _0x3a90e3 = a0_0x5951;
    const temp = input[_0x3a90e3(0x0)]('\x0a');
    const s = temp[_0x3a90e3(0x1)]()[_0x3a90e3(0x0)]();
    const q = parseInt(temp[_0x3a90e3(0x1)]());
    const queries = temp['map'](query => query[_0x3a90e3(0x0)]('\x20'));
    let reverse_flag = 0x0;
    for (let i = 0x0; i < q; i++) {
        const query = queries[i];
        if (query['length'] == 0x1)
            reverse_flag = (reverse_flag + 0x1) % 0x2;
        else if (query[_0x3a90e3(0x2)] == 0x3) {
            if (reverse_flag + parseInt(query[0x1]) % 0x2 == 0x0)
                s[_0x3a90e3(0x3)](query[0x2]);
            else
                s['unshift'](query[0x2]);
        }
    }
    if (reverse_flag)
        console[_0x3a90e3(0x4)](s[_0x3a90e3(0x5)]()['join']('') + '\x0a');
    else
        console[_0x3a90e3(0x4)](s[_0x3a90e3(0x6)]('') + '\x0a');
}
function a0_0x5951(UYNIsU, key) {
    const stringArray = a0_0x4229();
    a0_0x5951 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5951(UYNIsU, key);
}
Main(require('fs')['readFileSync'](a0_0x4e6ea2(0x7), a0_0x4e6ea2(0x8)));