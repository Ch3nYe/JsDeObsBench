function a0_0x5622(QtKkIa, key) {
    const stringArray = a0_0x7d9c();
    a0_0x5622 = function (index, key) {
        index = index - 0xea;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5622(QtKkIa, key);
}
function a0_0x7d9c() {
    const _0x5b95c4 = [
        '19590OVVzfY',
        '18627kLLAgO',
        'Balanced',
        'Left',
        '8jBygAr',
        '247398DbVNGs',
        'map',
        'readFileSync',
        'log',
        '1328751jTWprT',
        'utf8',
        '670oirEAb',
        '50iHnmKm',
        'Right',
        '/dev/stdin',
        '120VwCMoB',
        '489863pjvgGh',
        '4710209OcpMzV',
        '1869828badjNS'
    ];
    a0_0x7d9c = function () {
        return _0x5b95c4;
    };
    return a0_0x7d9c();
}
const a0_0x5a9b8e = a0_0x5622;
(function (stringArrayFunction, comparisonValue) {
    const _0x20de77 = a0_0x5622;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x20de77(0xfb)) / 0x1 * (parseInt(_0x20de77(0xf3)) / 0x2) + -parseInt(_0x20de77(0xec)) / 0x3 + parseInt(_0x20de77(0xf9)) / 0x4 + parseInt(_0x20de77(0xf2)) / 0x5 * (-parseInt(_0x20de77(0xfa)) / 0x6) + parseInt(_0x20de77(0xf8)) / 0x7 * (-parseInt(_0x20de77(0xeb)) / 0x8) + parseInt(_0x20de77(0xf0)) / 0x9 + -parseInt(_0x20de77(0xf6)) / 0xa * (-parseInt(_0x20de77(0xf7)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x7d9c, 0x671a0));
function Main(input) {
    const _0x5bd3d4 = a0_0x5622;
    const numbers = input['split']('\x20')[_0x5bd3d4(0xed)](n => Number(n));
    const l = numbers[0x0] + numbers[0x1];
    const r = numbers[0x2] + numbers[0x3];
    if (l > r) {
        console[_0x5bd3d4(0xef)](_0x5bd3d4(0xea));
    } else if (l < r) {
        console['log'](_0x5bd3d4(0xf4));
    } else {
        console[_0x5bd3d4(0xef)](_0x5bd3d4(0xfc));
    }
}
Main(require('fs')[a0_0x5a9b8e(0xee)](a0_0x5a9b8e(0xf5), a0_0x5a9b8e(0xf1)));