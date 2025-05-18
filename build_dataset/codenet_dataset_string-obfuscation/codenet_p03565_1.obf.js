'use strict';
function a0_0x42a9(bxcyRF, key) {
    const stringArray = a0_0x4443();
    a0_0x42a9 = function (index, key) {
        index = index - 0x14c;
        let value = stringArray[index];
        return value;
    };
    return a0_0x42a9(bxcyRF, key);
}
const a0_0x2fc4fc = a0_0x42a9;
(function (stringArrayFunction, comparisonValue) {
    const _0x2e0177 = a0_0x42a9;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x2e0177(0x158)) / 0x1 * (-parseInt(_0x2e0177(0x153)) / 0x2) + -parseInt(_0x2e0177(0x159)) / 0x3 * (-parseInt(_0x2e0177(0x157)) / 0x4) + parseInt(_0x2e0177(0x151)) / 0x5 * (-parseInt(_0x2e0177(0x15a)) / 0x6) + -parseInt(_0x2e0177(0x14e)) / 0x7 + -parseInt(_0x2e0177(0x15b)) / 0x8 + parseInt(_0x2e0177(0x155)) / 0x9 * (parseInt(_0x2e0177(0x14d)) / 0xa) + parseInt(_0x2e0177(0x14f)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4443, 0x25bdd));
function a0_0x4443() {
    const _0x2baa5e = [
        '1263227tQrWus',
        '5547047vRYioA',
        '/dev/stdin',
        '885AKMGwr',
        'UNRESTORABLE',
        '2HTPJTc',
        'length',
        '18RSCoyJ',
        'join',
        '78304pSAePl',
        '149287Qtldnx',
        '15WltMOQ',
        '10350LTtVDG',
        '1943336GVzLsf',
        'log',
        'split',
        '659240lWAoUW'
    ];
    a0_0x4443 = function () {
        return _0x2baa5e;
    };
    return a0_0x4443();
}
function main(input) {
    const _0x26a312 = a0_0x42a9;
    input = input['split'](/\n/);
    let S = input[0x0][_0x26a312(0x14c)]('');
    const T = input[0x1][_0x26a312(0x14c)]('');
    const us = _0x26a312(0x152);
    for (let i = S[_0x26a312(0x154)] - T['length']; i >= 0x0; i--) {
        let x = 0x0;
        for (let j = 0x0; j < T[_0x26a312(0x154)]; j++) {
            if (S[i + j] == T[j] || S[i + j] == '?') {
            } else {
                x++;
                continue;
            }
        }
        if (x > 0x0)
            continue;
        for (let k = 0x0; k < T[_0x26a312(0x154)]; k++) {
            S[i + k] = T[k];
        }
        for (let i = 0x0; i < S[_0x26a312(0x154)]; i++) {
            S[i] = S[i] == '?' ? 'a' : S[i];
        }
        console[_0x26a312(0x15c)](S = S[_0x26a312(0x156)](''));
        return;
    }
    console[_0x26a312(0x15c)](us);
}
main(require('fs')['readFileSync'](a0_0x2fc4fc(0x150), 'utf8'));