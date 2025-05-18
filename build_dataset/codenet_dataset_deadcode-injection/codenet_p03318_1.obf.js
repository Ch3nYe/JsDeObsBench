'use strict';
function a0_0x1abd() {
    const _0xf001f1 = [
        'split',
        '199',
        'length',
        'push',
        'join',
        'log',
        'utf8'
    ];
    a0_0x1abd = function () {
        return _0xf001f1;
    };
    return a0_0x1abd();
}
const a0_0x1907ca = a0_0x38a9;
function a0_0x38a9(nTtcUc, key) {
    const stringArray = a0_0x1abd();
    a0_0x38a9 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x38a9(nTtcUc, key);
}
function main(s) {
    const _0x40b069 = a0_0x38a9;
    const K = Number(s[_0x40b069(0x0)]('\x0a')[0x0]);
    const list = [
        '1',
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '19',
        '29',
        '39',
        '49',
        '59',
        '69',
        '79',
        '89',
        '99',
        _0x40b069(0x1)
    ];
    const head = [
        '2',
        '3',
        '4',
        '5',
        '6',
        '7',
        '8',
        '9',
        '10',
        '11',
        '12',
        '13',
        '14',
        '15',
        '16',
        '17',
        '18',
        '19'
    ];
    let rest = '99';
    for (let i = 0x0; i <= 0x14; i++) {
        for (let j = 0x0; j < head[_0x40b069(0x2)]; j++) {
            list[_0x40b069(0x3)](head[j] + rest);
        }
        rest += '9';
    }
    const ans = list['slice'](0x0, K)[_0x40b069(0x4)]('\x0a');
    console[_0x40b069(0x5)](ans);
}
main(require('fs')['readFileSync']('/dev/stdin', a0_0x1907ca(0x6)));