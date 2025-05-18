'use strict';
function a0_0x20e5(aMJpny, key) {
    const stringArray = a0_0x3db7();
    a0_0x20e5 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x20e5(aMJpny, key);
}
function a0_0x3db7() {
    const _0x3bb033 = [
        'split',
        'shift',
        'map',
        'fill',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3db7 = function () {
        return _0x3bb033;
    };
    return a0_0x3db7();
}
const a0_0x1bea72 = a0_0x20e5;
function Main(input) {
    const _0xaf8758 = a0_0x20e5;
    let lines = input[_0xaf8758(0x0)]('\x0a');
    let nmq = lines[_0xaf8758(0x1)]()[_0xaf8758(0x0)](/\s/)[_0xaf8758(0x2)](v => v - 0x0);
    let N = nmq[0x0], M = nmq[0x1], Q = nmq[0x2];
    let T = new Array(N + 0x1)[_0xaf8758(0x3)](0x0)[_0xaf8758(0x2)](() => new Array(N + 0x1)[_0xaf8758(0x3)](0x0));
    for (let m = 0x0; m < M; m++) {
        let lr = lines['shift']()[_0xaf8758(0x0)](/\s/)[_0xaf8758(0x2)](v => v - 0x0);
        T[lr[0x0]][lr[0x1]] += 0x1;
    }
    for (let p = 0x1; p <= N; p++) {
        for (let q = 0x1; q <= N; q++) {
            T[p][q] += T[p - 0x1][q];
            T[p][q] += T[p][q - 0x1];
            T[p][q] -= T[p - 0x1][q - 0x1];
        }
    }
    for (let n = 0x0; n < Q; n++) {
        let pq = lines[_0xaf8758(0x1)]()[_0xaf8758(0x0)](/\s/)[_0xaf8758(0x2)](v => v - 0x0);
        let p = pq[0x0], q = pq[0x1];
        console[_0xaf8758(0x4)](T[q][q] - T[p - 0x1][q]);
    }
}
Main(require('fs')[a0_0x1bea72(0x5)](a0_0x1bea72(0x6), a0_0x1bea72(0x7)));