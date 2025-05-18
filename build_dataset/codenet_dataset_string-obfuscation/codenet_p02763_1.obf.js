'use strict';
const a0_0x54e2c0 = a0_0x98a1;
(function (stringArrayFunction, comparisonValue) {
    const _0x4240cc = a0_0x98a1;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x4240cc(0xea)) / 0x1 + -parseInt(_0x4240cc(0xdf)) / 0x2 * (parseInt(_0x4240cc(0xde)) / 0x3) + -parseInt(_0x4240cc(0xe0)) / 0x4 * (parseInt(_0x4240cc(0xe7)) / 0x5) + -parseInt(_0x4240cc(0xef)) / 0x6 + parseInt(_0x4240cc(0xed)) / 0x7 * (parseInt(_0x4240cc(0xec)) / 0x8) + parseInt(_0x4240cc(0xe5)) / 0x9 * (-parseInt(_0x4240cc(0xe6)) / 0xa) + parseInt(_0x4240cc(0xe9)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3fc0, 0x8a06f));
function a0_0x3fc0() {
    const _0x123b09 = [
        '5788UoUkqw',
        'trim',
        'readFileSync',
        'utf8',
        'split',
        '999vQajFD',
        '31370lUMfaW',
        '165JZyVca',
        '/dev/stdin',
        '27592939agXeyb',
        '38925ImVEef',
        'log',
        '987416IVkwEc',
        '14zaCBoJ',
        'slice',
        '4722384EmCLiB',
        '51bAwkYE',
        '113882zAQzYZ'
    ];
    a0_0x3fc0 = function () {
        return _0x123b09;
    };
    return a0_0x3fc0();
}
function a0_0x98a1(hWLvTe, key) {
    const stringArray = a0_0x3fc0();
    a0_0x98a1 = function (index, key) {
        index = index - 0xde;
        let value = stringArray[index];
        return value;
    };
    return a0_0x98a1(hWLvTe, key);
}
function main(input) {
    const _0x55599c = a0_0x98a1;
    let n = parseInt(input[0x0]);
    let s = input[0x1];
    let q_l = parseInt(input[0x2]);
    let q = [];
    for (let j = 0x0; j < q_l; j++) {
        let kari = input[j + 0x3][_0x55599c(0xe1)]()[_0x55599c(0xe4)]('\x20');
        q[j] = parseInt(kari[0x0]);
        if (q[j] === 0x1) {
            let i = parseInt(kari[0x1]);
            let c = kari[0x2];
            let str1 = s[_0x55599c(0xee)](0x0, i - 0x1);
            let str2 = s[_0x55599c(0xee)](i);
            s = str1 + c + str2;
        } else {
            let l = parseInt(kari[0x1]);
            let r = parseInt(kari[0x2]);
            let str = s[_0x55599c(0xee)](l - 0x1, r);
            let list = {};
            let counter = 0x0;
            for (let i = 0x0; i < str['length']; i++) {
                if (list[str[i]] === undefined) {
                    counter++;
                    list[str[i]] = !![];
                }
            }
            console[_0x55599c(0xeb)](counter);
        }
    }
}
main(require('fs')[a0_0x54e2c0(0xe2)](a0_0x54e2c0(0xe8), a0_0x54e2c0(0xe3))[a0_0x54e2c0(0xe1)]()['split']('\x0a'));