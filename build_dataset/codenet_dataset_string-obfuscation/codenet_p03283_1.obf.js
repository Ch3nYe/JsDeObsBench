'use strict';
const a0_0x2393f8 = a0_0x1bc8;
function a0_0xac4b() {
    const _0x26c7a3 = [
        '/dev/stdin',
        '639Mtktev',
        '7ZyMxVI',
        '2536323sDRqiV',
        'map',
        '217478ukFxEP',
        '109644Ushgne',
        '5103978YJQVYD',
        'fill',
        '1229080mkIxLs',
        '21YZkNhF',
        'split',
        'shift',
        'utf8',
        '981343SuctIf',
        '123260NslyLn',
        'readFileSync',
        '70eFfyPB'
    ];
    a0_0xac4b = function () {
        return _0x26c7a3;
    };
    return a0_0xac4b();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x25d423 = a0_0x1bc8;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x25d423(0x1c4)) / 0x1 * (-parseInt(_0x25d423(0x1c7)) / 0x2) + -parseInt(_0x25d423(0x1c5)) / 0x3 + -parseInt(_0x25d423(0x1c8)) / 0x4 * (-parseInt(_0x25d423(0x1d3)) / 0x5) + parseInt(_0x25d423(0x1c9)) / 0x6 + parseInt(_0x25d423(0x1cc)) / 0x7 * (parseInt(_0x25d423(0x1cb)) / 0x8) + parseInt(_0x25d423(0x1c3)) / 0x9 * (-parseInt(_0x25d423(0x1d1)) / 0xa) + parseInt(_0x25d423(0x1d0)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xac4b, 0xc9721));
function Main(input) {
    const _0x5311d5 = a0_0x1bc8;
    let lines = input[_0x5311d5(0x1cd)]('\x0a');
    let nmq = lines['shift']()[_0x5311d5(0x1cd)](/\s/)[_0x5311d5(0x1c6)](v => v - 0x0);
    let N = nmq[0x0], M = nmq[0x1], Q = nmq[0x2];
    let T = new Array(N + 0x1)['fill'](0x0)[_0x5311d5(0x1c6)](() => new Array(N + 0x1)[_0x5311d5(0x1ca)](0x0));
    for (let m = 0x0; m < M; m++) {
        let lr = lines[_0x5311d5(0x1ce)]()[_0x5311d5(0x1cd)](/\s/)[_0x5311d5(0x1c6)](v => v - 0x0);
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
        let pq = lines['shift']()['split'](/\s/)[_0x5311d5(0x1c6)](v => v - 0x0);
        let p = pq[0x0], q = pq[0x1];
        console['log'](T[q][q] - T[p - 0x1][q]);
    }
}
function a0_0x1bc8(JAeMJc, key) {
    const stringArray = a0_0xac4b();
    a0_0x1bc8 = function (index, key) {
        index = index - 0x1c2;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1bc8(JAeMJc, key);
}
Main(require('fs')[a0_0x2393f8(0x1d2)](a0_0x2393f8(0x1c2), a0_0x2393f8(0x1cf)));