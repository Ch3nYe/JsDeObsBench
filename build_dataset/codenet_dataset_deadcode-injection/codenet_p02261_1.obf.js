'use strict';
const a0_0x35e945 = a0_0x3b07;
function a0_0x3336() {
    const _0x1819e7 = [
        'split',
        'concat',
        'join',
        'log',
        'Stable',
        'Nqghx',
        'NqNXF',
        'EAvvH',
        'aZQZk',
        'nZaAt',
        'dcrBw',
        'dFwvy',
        'jIXIS',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3336 = function () {
        return _0x1819e7;
    };
    return a0_0x3336();
}
function a0_0x3b07(GMtyEm, key) {
    const stringArray = a0_0x3336();
    a0_0x3b07 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3b07(GMtyEm, key);
}
const main = input => {
    const _0x14594d = a0_0x3b07;
    input = input[_0x14594d(0x0)]('\x0a');
    const N = Number(input[0x0]);
    const A1 = input[0x1][_0x14594d(0x0)]('\x20');
    const A2 = A1[_0x14594d(0x1)]();
    bubbleSort(A1, N);
    console['log'](A1[_0x14594d(0x2)]('\x20'));
    console[_0x14594d(0x3)]('Stable');
    selectionSort(A2, N);
    console[_0x14594d(0x3)](A2[_0x14594d(0x2)]('\x20'));
    console['log'](A2['every']((v, i) => v === A1[i]) ? _0x14594d(0x4) : 'Not\x20stable');
};
function bubbleSort(A, N) {
    const _0x4a46b5 = a0_0x3b07;
    for (let i = 0x0; i < N - 0x1; ++i) {
        if (_0x4a46b5(0x5) !== _0x4a46b5(0x6)) {
            for (let j = N - 0x1; j >= i + 0x1; --j) {
                if (_0x4a46b5(0x7) === _0x4a46b5(0x7)) {
                    if (Number(A[j - 0x1][0x1]) > Number(A[j][0x1])) {
                        const tmp = A[j];
                        A[j] = A[j - 0x1];
                        A[j - 0x1] = tmp;
                    }
                } else {
                    for (let j = N - 0x1; j >= i + 0x1; --j) {
                        if (Number(A[j - 0x1][0x1]) > Number(A[j][0x1])) {
                            const tmp = A[j];
                            A[j] = A[j - 0x1];
                            A[j - 0x1] = tmp;
                        }
                    }
                }
            }
        } else {
            const tmp = A[i];
            A[i] = A[minj];
            A[minj] = tmp;
        }
    }
}
function selectionSort(A, N) {
    const _0x17565f = a0_0x3b07;
    for (let i = 0x0; i < N - 0x1; ++i) {
        if ('aZQZk' !== _0x17565f(0x8)) {
            if (Number(A[j - 0x1][0x1]) > Number(A[j][0x1])) {
                const tmp = A[j];
                A[j] = A[j - 0x1];
                A[j - 0x1] = tmp;
            }
        } else {
            let minj = i;
            for (let j = i; j < N; ++j) {
                if (_0x17565f(0x9) === _0x17565f(0x9)) {
                    if (Number(A[j][0x1]) < Number(A[minj][0x1])) {
                        if (_0x17565f(0xa) === _0x17565f(0xb)) {
                            for (let i = 0x0; i < N - 0x1; ++i) {
                                for (let j = N - 0x1; j >= i + 0x1; --j) {
                                    if (Number(A[j - 0x1][0x1]) > Number(A[j][0x1])) {
                                        const tmp = A[j];
                                        A[j] = A[j - 0x1];
                                        A[j - 0x1] = tmp;
                                    }
                                }
                            }
                        } else {
                            minj = j;
                        }
                    }
                } else {
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
            if (i !== minj) {
                if (_0x17565f(0xc) === _0x17565f(0xc)) {
                    const tmp = A[i];
                    A[i] = A[minj];
                    A[minj] = tmp;
                } else {
                    minj = j;
                }
            }
        }
    }
}
main(require('fs')[a0_0x35e945(0xd)](a0_0x35e945(0xe), a0_0x35e945(0xf)));