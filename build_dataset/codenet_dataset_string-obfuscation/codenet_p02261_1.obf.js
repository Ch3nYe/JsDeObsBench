'use strict';
const a0_0x4675af = a0_0x2040;
(function (stringArrayFunction, comparisonValue) {
    const _0x3f07aa = a0_0x2040;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x3f07aa(0x1b6)) / 0x1 + parseInt(_0x3f07aa(0x1bc)) / 0x2 + parseInt(_0x3f07aa(0x1b4)) / 0x3 + -parseInt(_0x3f07aa(0x1c2)) / 0x4 * (parseInt(_0x3f07aa(0x1bf)) / 0x5) + -parseInt(_0x3f07aa(0x1b8)) / 0x6 * (-parseInt(_0x3f07aa(0x1b2)) / 0x7) + parseInt(_0x3f07aa(0x1b7)) / 0x8 * (-parseInt(_0x3f07aa(0x1be)) / 0x9) + parseInt(_0x3f07aa(0x1c0)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3d24, 0x4adb2));
const main = input => {
    const _0x283362 = a0_0x2040;
    input = input[_0x283362(0x1c3)]('\x0a');
    const N = Number(input[0x0]);
    const A1 = input[0x1][_0x283362(0x1c3)]('\x20');
    const A2 = A1[_0x283362(0x1b9)]();
    bubbleSort(A1, N);
    console[_0x283362(0x1bb)](A1['join']('\x20'));
    console['log'](_0x283362(0x1c1));
    selectionSort(A2, N);
    console[_0x283362(0x1bb)](A2[_0x283362(0x1b3)]('\x20'));
    console[_0x283362(0x1bb)](A2['every']((v, i) => v === A1[i]) ? 'Stable' : _0x283362(0x1bd));
};
function bubbleSort(A, N) {
    for (let i = 0x0; i < N - 0x1; ++i) {
        for (let j = N - 0x1; j >= i + 0x1; --j) {
            if (Number(A[j - 0x1][0x1]) > Number(A[j][0x1])) {
                const tmp = A[j];
                A[j] = A[j - 0x1];
                A[j - 0x1] = tmp;
            }
        }
    }
}
function selectionSort(A, N) {
    for (let i = 0x0; i < N - 0x1; ++i) {
        let minj = i;
        for (let j = i; j < N; ++j) {
            if (Number(A[j][0x1]) < Number(A[minj][0x1])) {
                minj = j;
            }
        }
        if (i !== minj) {
            const tmp = A[i];
            A[i] = A[minj];
            A[minj] = tmp;
        }
    }
}
function a0_0x2040(UnpooK, key) {
    const stringArray = a0_0x3d24();
    a0_0x2040 = function (index, key) {
        index = index - 0x1b2;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2040(UnpooK, key);
}
function a0_0x3d24() {
    const _0x341b0d = [
        '5298tVAdQz',
        'concat',
        '/dev/stdin',
        'log',
        '1063224ANgQcf',
        'Not\x20stable',
        '299637rxTgMs',
        '2590855ihHDWR',
        '3051190RysLAG',
        'Stable',
        '4MAmASw',
        'split',
        '1883WINNbH',
        'join',
        '1236216ieDKCu',
        'readFileSync',
        '428498XosqJE',
        '56PgsvUD'
    ];
    a0_0x3d24 = function () {
        return _0x341b0d;
    };
    return a0_0x3d24();
}
main(require('fs')[a0_0x4675af(0x1b5)](a0_0x4675af(0x1ba), 'utf8'));