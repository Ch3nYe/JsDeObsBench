'use strict';
const a0_0x16684c = a0_0x45c2;
function a0_0x58a3() {
    const _0x20eebc = [
        'log',
        '2241dXZwoc',
        '63WvHxCq',
        '624390iFCGYU',
        'map',
        '/dev/stdin',
        '3464etprws',
        'readFileSync',
        'utf8',
        '32ugtxUC',
        'sort',
        '613944ZVMNmQ',
        '3001465pAdQtf',
        'split',
        '1101160bthUkZ',
        '70762enZCoO',
        'shift',
        '7662220QaseVR'
    ];
    a0_0x58a3 = function () {
        return _0x20eebc;
    };
    return a0_0x58a3();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x410382 = a0_0x45c2;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x410382(0x1d9)) / 0x1 * (-parseInt(_0x410382(0x1d3)) / 0x2) + -parseInt(_0x410382(0x1df)) / 0x3 + -parseInt(_0x410382(0x1d8)) / 0x4 + parseInt(_0x410382(0x1d6)) / 0x5 + -parseInt(_0x410382(0x1d5)) / 0x6 * (-parseInt(_0x410382(0x1de)) / 0x7) + -parseInt(_0x410382(0x1d0)) / 0x8 * (-parseInt(_0x410382(0x1dd)) / 0x9) + parseInt(_0x410382(0x1db)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x58a3, 0xbe574));
function a0_0x45c2(ZQsIcU, key) {
    const stringArray = a0_0x58a3();
    a0_0x45c2 = function (index, key) {
        index = index - 0x1ce;
        let value = stringArray[index];
        return value;
    };
    return a0_0x45c2(ZQsIcU, key);
}
function main(input) {
    const _0x4c67ea = a0_0x45c2;
    const lines = input[_0x4c67ea(0x1d7)]('\x0a');
    const N = parseInt(lines[_0x4c67ea(0x1da)]());
    const A = lines['shift']()['split']('\x20')[_0x4c67ea(0x1ce)](x => parseInt(x))[_0x4c67ea(0x1d4)]((a, b) => a - b);
    const B = lines['shift']()[_0x4c67ea(0x1d7)]('\x20')[_0x4c67ea(0x1ce)](x => parseInt(x))[_0x4c67ea(0x1d4)]((a, b) => a - b);
    const C = lines[_0x4c67ea(0x1da)]()[_0x4c67ea(0x1d7)]('\x20')[_0x4c67ea(0x1ce)](x => parseInt(x))[_0x4c67ea(0x1d4)]((a, b) => a - b);
    let result = 0x0;
    for (let b = 0x0; b < N; b++) {
        let current_b = B[b];
        let count_a = N;
        for (let a = 0x0; a < N; a++) {
            if (current_b <= A[a]) {
                count_a--;
            }
        }
        let count_c = N;
        for (let c = 0x0; c < N; c++) {
            if (current_b >= C[c]) {
                count_c--;
            }
        }
        result += count_a * count_c;
    }
    console[_0x4c67ea(0x1dc)](result);
}
main(require('fs')[a0_0x16684c(0x1d1)](a0_0x16684c(0x1cf), a0_0x16684c(0x1d2)));