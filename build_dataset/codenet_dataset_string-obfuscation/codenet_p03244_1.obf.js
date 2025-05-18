'use strict';
const a0_0x9afa6c = a0_0x1f1c;
(function (stringArrayFunction, comparisonValue) {
    const _0xa0ddf8 = a0_0x1f1c;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0xa0ddf8(0xe0)) / 0x1 + parseInt(_0xa0ddf8(0xe8)) / 0x2 * (parseInt(_0xa0ddf8(0xe6)) / 0x3) + -parseInt(_0xa0ddf8(0xde)) / 0x4 + parseInt(_0xa0ddf8(0xec)) / 0x5 * (-parseInt(_0xa0ddf8(0xeb)) / 0x6) + -parseInt(_0xa0ddf8(0xe4)) / 0x7 * (-parseInt(_0xa0ddf8(0xed)) / 0x8) + parseInt(_0xa0ddf8(0xe5)) / 0x9 + parseInt(_0xa0ddf8(0xe9)) / 0xa * (parseInt(_0xa0ddf8(0xdd)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x42c6, 0xe2e6a));
function Main(input) {
    const _0x212bd9 = a0_0x1f1c;
    let lines = input[_0x212bd9(0xdf)]('\x0a');
    let N = lines[_0x212bd9(0xea)]() - 0x0;
    let V = lines[_0x212bd9(0xea)]()[_0x212bd9(0xdf)](/\s/)[_0x212bd9(0xe1)](v => v - 0x0);
    let ans = 0x0;
    for (let n = 0x0; n < N - 0x2; n++) {
        if (V[n] == V[n + 0x1])
            ans += 0x1;
        if (V[n] != V[n + 0x2])
            ans += 0x1;
    }
    console['log'](ans);
}
function a0_0x42c6() {
    const _0x14220e = [
        '12894739pdLsMo',
        '5612224moTmXq',
        'split',
        '815547STFfAv',
        'map',
        '/dev/stdin',
        'utf8',
        '7xUbwnc',
        '3723858TPVrMc',
        '3DGkzMX',
        'readFileSync',
        '920926TTuEaf',
        '20rmMHaY',
        'shift',
        '12Bxvkvn',
        '3017890zEyBJN',
        '9091376WhrqeA'
    ];
    a0_0x42c6 = function () {
        return _0x14220e;
    };
    return a0_0x42c6();
}
function a0_0x1f1c(JVFkzn, key) {
    const stringArray = a0_0x42c6();
    a0_0x1f1c = function (index, key) {
        index = index - 0xdd;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1f1c(JVFkzn, key);
}
Main(require('fs')[a0_0x9afa6c(0xe7)](a0_0x9afa6c(0xe2), a0_0x9afa6c(0xe3)));