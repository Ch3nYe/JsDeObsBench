'use strict';
const a0_0x526747 = a0_0x2d21;
function a0_0x2f1b() {
    const _0x5efc47 = [
        '24iwInVn',
        '12LAqtyd',
        'split',
        'max',
        '40206VTALgL',
        'slice',
        'trim',
        'length',
        '8xwelZj',
        '3896184vNUSLL',
        '1102000aThrqJ',
        'indexOf',
        'log',
        '49hIRBtw',
        '9mrLRuI',
        '543190QMhjtC',
        'readFileSync',
        '270488SnngED',
        '23934EDhsub',
        '8511514TUvrwg'
    ];
    a0_0x2f1b = function () {
        return _0x5efc47;
    };
    return a0_0x2f1b();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x49f60e = a0_0x2d21;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x49f60e(0x176)) / 0x1 * (-parseInt(_0x49f60e(0x172)) / 0x2) + parseInt(_0x49f60e(0x184)) / 0x3 * (-parseInt(_0x49f60e(0x17a)) / 0x4) + -parseInt(_0x49f60e(0x17c)) / 0x5 + parseInt(_0x49f60e(0x17b)) / 0x6 + -parseInt(_0x49f60e(0x17f)) / 0x7 * (parseInt(_0x49f60e(0x183)) / 0x8) + parseInt(_0x49f60e(0x180)) / 0x9 * (-parseInt(_0x49f60e(0x181)) / 0xa) + -parseInt(_0x49f60e(0x171)) / 0xb * (-parseInt(_0x49f60e(0x173)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2f1b, 0x64e82));
function a0_0x2d21(hjXJQR, key) {
    const stringArray = a0_0x2f1b();
    a0_0x2d21 = function (index, key) {
        index = index - 0x171;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2d21(hjXJQR, key);
}
const main = arg => {
    const _0x3a37d9 = a0_0x2d21;
    arg = arg[_0x3a37d9(0x178)]()[_0x3a37d9(0x174)]('\x0a');
    const N = parseInt(arg[0x0][_0x3a37d9(0x174)]('\x20')[0x0]);
    const S = arg[0x1]['split']('');
    const charset = new Set(S);
    const chars = [...charset];
    let answer = 0x0;
    for (let i in S) {
        const first = S[_0x3a37d9(0x177)](0x0, i);
        const last = S[_0x3a37d9(0x177)](i, S[_0x3a37d9(0x179)]);
        let temp = 0x0;
        for (let j in chars) {
            if (first[_0x3a37d9(0x17d)](chars[j]) !== -0x1 && last[_0x3a37d9(0x17d)](chars[j]) !== -0x1) {
                temp++;
            }
        }
        answer = Math[_0x3a37d9(0x175)](answer, temp);
    }
    console[_0x3a37d9(0x17e)](answer);
};
main(require('fs')[a0_0x526747(0x182)]('/dev/stdin', 'utf8'));