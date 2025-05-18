'use strict';
const a0_0x5f00c7 = a0_0xe872;
function a0_0xe872(bhTkPC, key) {
    const stringArray = a0_0x1352();
    a0_0xe872 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0xe872(bhTkPC, key);
}
function a0_0x1352() {
    const _0x2437ae = [
        'trim',
        'split',
        'map',
        'slice',
        'fill',
        'length',
        'reduce',
        'log',
        'utf8'
    ];
    a0_0x1352 = function () {
        return _0x2437ae;
    };
    return a0_0x1352();
}
function Main(input) {
    const _0x40558b = a0_0xe872;
    const tmp = input[_0x40558b(0x0)]()[_0x40558b(0x1)]('\x0a');
    const D = Number(tmp[0x0]);
    const C = tmp[0x1][_0x40558b(0x1)]('\x20')[_0x40558b(0x2)](v => Number(v));
    const S = tmp[_0x40558b(0x3)](0x2, 0x7)['map'](v => v[_0x40558b(0x1)]('\x20')[_0x40558b(0x2)](v => Number(v)));
    const T = tmp[_0x40558b(0x3)](-0x5)['map'](v => Number(v));
    let LastContestDays = Array(0x1a)[_0x40558b(0x4)](0x0);
    let currnetContestLebels = Array(0x1a)[_0x40558b(0x4)](0x0);
    let lebel = 0x0;
    for (let i = 0x1; i <= D; i++) {
        LastContestDays[T[i - 0x1] - 0x1] = i;
        for (let j = 0x0; j < C[_0x40558b(0x5)]; j++) {
            if (LastContestDays[j] === i) {
                currnetContestLebels[j] = S[i - 0x1][j];
            } else {
                currnetContestLebels[j] = C[j] * (i - LastContestDays[j]) * -0x1;
            }
        }
        lebel += currnetContestLebels[_0x40558b(0x6)]((acc, cur) => acc + cur);
        console[_0x40558b(0x7)](String(lebel));
    }
    return;
}
Main(require('fs')['readFileSync']('/dev/stdin', a0_0x5f00c7(0x8)));