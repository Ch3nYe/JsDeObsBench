'use strict';
const a0_0x18670b = a0_0x401d;
function a0_0x401d(mRQZBx, key) {
    const stringArray = a0_0x1cf4();
    a0_0x401d = function (index, key) {
        index = index - 0x163;
        let value = stringArray[index];
        return value;
    };
    return a0_0x401d(mRQZBx, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0xcd5272 = a0_0x401d;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0xcd5272(0x168)) / 0x1 + parseInt(_0xcd5272(0x16d)) / 0x2 * (-parseInt(_0xcd5272(0x167)) / 0x3) + -parseInt(_0xcd5272(0x16a)) / 0x4 * (parseInt(_0xcd5272(0x169)) / 0x5) + parseInt(_0xcd5272(0x171)) / 0x6 + -parseInt(_0xcd5272(0x16e)) / 0x7 * (parseInt(_0xcd5272(0x166)) / 0x8) + parseInt(_0xcd5272(0x172)) / 0x9 + parseInt(_0xcd5272(0x16b)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1cf4, 0xd7232));
function a0_0x1cf4() {
    const _0x48397b = [
        '197210rybilu',
        '21915jNnShw',
        '156CPfeuh',
        '6985330jZTsno',
        'trim',
        '191628pVmdxV',
        '7lkIYrm',
        'readFileSync',
        'min',
        '10276572StQFFN',
        '2286774djauJi',
        'split',
        '/dev/stdin',
        'utf8',
        '1452912KlSdBJ',
        '51KWGVYh'
    ];
    a0_0x1cf4 = function () {
        return _0x48397b;
    };
    return a0_0x1cf4();
}
const main = arg => {
    const _0x1a9c01 = a0_0x401d;
    arg = arg[_0x1a9c01(0x16c)]()['split']('\x0a');
    const N = parseInt(arg[0x0][_0x1a9c01(0x163)]('\x20')[0x0]);
    const K = parseInt(arg[0x0][_0x1a9c01(0x163)]('\x20')[0x1]);
    const S = arg[0x1][_0x1a9c01(0x163)]('');
    let alreadyHappy = 0x0;
    let last;
    for (let i in S) {
        if (last === 'L' && S[i] === 'L') {
            alreadyHappy++;
        }
        if (last === 'R' && S[i] === 'R') {
            alreadyHappy++;
        }
        last = S[i];
    }
    console['log'](Math[_0x1a9c01(0x170)](N - 0x1, alreadyHappy + 0x2 * K));
};
main(require('fs')[a0_0x18670b(0x16f)](a0_0x18670b(0x164), a0_0x18670b(0x165)));