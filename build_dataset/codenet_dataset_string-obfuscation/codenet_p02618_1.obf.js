'use strict';
(function (stringArrayFunction, comparisonValue) {
    const _0x2ab11c = a0_0x420c;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x2ab11c(0xee)) / 0x1 * (-parseInt(_0x2ab11c(0xe3)) / 0x2) + -parseInt(_0x2ab11c(0xed)) / 0x3 * (-parseInt(_0x2ab11c(0xe0)) / 0x4) + parseInt(_0x2ab11c(0xe1)) / 0x5 * (-parseInt(_0x2ab11c(0xe9)) / 0x6) + -parseInt(_0x2ab11c(0xe4)) / 0x7 * (parseInt(_0x2ab11c(0xec)) / 0x8) + -parseInt(_0x2ab11c(0xe2)) / 0x9 + -parseInt(_0x2ab11c(0xe8)) / 0xa + parseInt(_0x2ab11c(0xea)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x323f, 0xbfad7));
function main(input) {
    const _0x5238b1 = a0_0x420c;
    const inputRows = input[_0x5238b1(0xeb)]('\x0a');
    const d = parseInt(inputRows[0x0]);
    let cStrArray = inputRows[0x1][_0x5238b1(0xeb)]('\x20');
    const c = cStrArray[_0x5238b1(0xe7)](str => parseInt(str));
    let s = [];
    for (let i = 0x2; i < inputRows[_0x5238b1(0xe6)]; i++) {
        s[_0x5238b1(0xe5)]([]);
        const tmpRow = inputRows[i]['split']('\x20');
        for (let j = 0x0; j < tmpRow[_0x5238b1(0xe6)]; j++) {
            s[i - 0x2][_0x5238b1(0xe5)](parseInt(tmpRow[j]));
        }
    }
    let t = [];
    for (let i = 0x0; i < s['length']; i++) {
        let tmpMax = s[i][0x0];
        let index = 0x0;
        for (let j = 0x1; j < s[i][_0x5238b1(0xe6)]; j++) {
            if (s[i][j] > tmpMax) {
                index = j;
                tmpMax = s[i][j];
            }
        }
        t['push'](index + 0x1);
    }
    for (let i = 0x0; i < t[_0x5238b1(0xe6)]; i++) {
        console['log'](t[i]);
    }
}
function a0_0x323f() {
    const _0x13866f = [
        '500494rsnoLR',
        '49bvIVbv',
        'push',
        'length',
        'map',
        '872540ZMnADe',
        '6XQtVIs',
        '36857040JhWCpv',
        'split',
        '1763896yrPZfU',
        '3IpDXAe',
        '6oXXgie',
        '4489196YTyPUD',
        '216645zYMPKI',
        '4611186pRBVWV'
    ];
    a0_0x323f = function () {
        return _0x13866f;
    };
    return a0_0x323f();
}
main(require('fs')['readFileSync']('/dev/stdin', 'utf8'));
function a0_0x420c(rmXjgW, key) {
    const stringArray = a0_0x323f();
    a0_0x420c = function (index, key) {
        index = index - 0xe0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x420c(rmXjgW, key);
}
main(input);