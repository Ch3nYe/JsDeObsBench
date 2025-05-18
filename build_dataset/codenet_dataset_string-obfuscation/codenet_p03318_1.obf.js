'use strict';
const a0_0x33aa34 = a0_0x4185;
(function (stringArrayFunction, comparisonValue) {
    const _0x55f8a1 = a0_0x4185;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x55f8a1(0x14e)) / 0x1 * (-parseInt(_0x55f8a1(0x14a)) / 0x2) + parseInt(_0x55f8a1(0x143)) / 0x3 + -parseInt(_0x55f8a1(0x14c)) / 0x4 * (parseInt(_0x55f8a1(0x148)) / 0x5) + parseInt(_0x55f8a1(0x14b)) / 0x6 + parseInt(_0x55f8a1(0x142)) / 0x7 + -parseInt(_0x55f8a1(0x13f)) / 0x8 * (parseInt(_0x55f8a1(0x140)) / 0x9) + -parseInt(_0x55f8a1(0x144)) / 0xa * (parseInt(_0x55f8a1(0x147)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1488, 0x4b622));
function main(s) {
    const _0x596503 = a0_0x4185;
    const K = Number(s['split']('\x0a')[0x0]);
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
        '199'
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
        for (let j = 0x0; j < head['length']; j++) {
            list[_0x596503(0x13e)](head[j] + rest);
        }
        rest += '9';
    }
    const ans = list[_0x596503(0x146)](0x0, K)['join']('\x0a');
    console[_0x596503(0x14d)](ans);
}
main(require('fs')[a0_0x33aa34(0x141)](a0_0x33aa34(0x149), a0_0x33aa34(0x145)));
function a0_0x4185(ZVKBcu, key) {
    const stringArray = a0_0x1488();
    a0_0x4185 = function (index, key) {
        index = index - 0x13e;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4185(ZVKBcu, key);
}
function a0_0x1488() {
    const _0x422902 = [
        '4sByfPv',
        'log',
        '37UyxKUJ',
        'push',
        '866832fibFSO',
        '9czPqMp',
        'readFileSync',
        '2957675PjoYrw',
        '1138836HKumXh',
        '40oitaTL',
        'utf8',
        'slice',
        '1319582gCoSmM',
        '1798505LSXvDl',
        '/dev/stdin',
        '14494FbwNxM',
        '1118382Bnnirb'
    ];
    a0_0x1488 = function () {
        return _0x422902;
    };
    return a0_0x1488();
}