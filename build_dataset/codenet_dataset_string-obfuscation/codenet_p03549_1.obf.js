'use strict';
function a0_0x26c9() {
    const _0x1a5609 = [
        '141260OWNQQy',
        '12CvGMwT',
        '12seWTso',
        '48tpcuta',
        '8ClNrwJ',
        'readFileSync',
        '89307nzanud',
        '10714938DhbDPY',
        '2tcCcLo',
        'pow',
        '150868VniFWf',
        '226277nGoRVC',
        'log',
        'utf8',
        '438229pRbaai',
        'map',
        '270HcdrEM',
        '4395811qTmMst',
        'split'
    ];
    a0_0x26c9 = function () {
        return _0x1a5609;
    };
    return a0_0x26c9();
}
function a0_0x906e(VUDuHj, key) {
    const stringArray = a0_0x26c9();
    a0_0x906e = function (index, key) {
        index = index - 0x69;
        let value = stringArray[index];
        return value;
    };
    return a0_0x906e(VUDuHj, key);
}
const a0_0x21182b = a0_0x906e;
(function (stringArrayFunction, comparisonValue) {
    const _0x473df5 = a0_0x906e;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x473df5(0x7a)) / 0x1 * (-parseInt(_0x473df5(0x77)) / 0x2) + -parseInt(_0x473df5(0x72)) / 0x3 * (-parseInt(_0x473df5(0x79)) / 0x4) + parseInt(_0x473df5(0x6f)) / 0x5 * (-parseInt(_0x473df5(0x70)) / 0x6) + -parseInt(_0x473df5(0x6d)) / 0x7 * (-parseInt(_0x473df5(0x73)) / 0x8) + -parseInt(_0x473df5(0x75)) / 0x9 * (-parseInt(_0x473df5(0x6c)) / 0xa) + -parseInt(_0x473df5(0x6a)) / 0xb * (parseInt(_0x473df5(0x71)) / 0xc) + -parseInt(_0x473df5(0x76)) / 0xd;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x26c9, 0x56108));
function main(input) {
    const _0x5d94ba = a0_0x906e;
    const lines = input[_0x5d94ba(0x6e)]('\x0a');
    const N = lines[0x0][_0x5d94ba(0x6e)]('\x20')[_0x5d94ba(0x6b)](x => parseInt(x))[0x0];
    const M = lines[0x0][_0x5d94ba(0x6e)]('\x20')[_0x5d94ba(0x6b)](x => parseInt(x))[0x1];
    let result = ((N - M) * 0x64 + M * 0x76c) * Math[_0x5d94ba(0x78)](0x2, M);
    console[_0x5d94ba(0x7b)](result);
}
main(require('fs')[a0_0x21182b(0x74)]('/dev/stdin', a0_0x21182b(0x69)));