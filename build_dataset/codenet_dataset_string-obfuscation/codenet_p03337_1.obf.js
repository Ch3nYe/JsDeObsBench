function a0_0xf7ed(zQiXVu, key) {
    const stringArray = a0_0x6a8b();
    a0_0xf7ed = function (index, key) {
        index = index - 0x1ad;
        let value = stringArray[index];
        return value;
    };
    return a0_0xf7ed(zQiXVu, key);
}
const a0_0x26e27e = a0_0xf7ed;
(function (stringArrayFunction, comparisonValue) {
    const _0x4ebb22 = a0_0xf7ed;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x4ebb22(0x1bd)) / 0x1 + -parseInt(_0x4ebb22(0x1b5)) / 0x2 + parseInt(_0x4ebb22(0x1b2)) / 0x3 * (parseInt(_0x4ebb22(0x1ae)) / 0x4) + parseInt(_0x4ebb22(0x1b7)) / 0x5 + parseInt(_0x4ebb22(0x1bc)) / 0x6 * (-parseInt(_0x4ebb22(0x1b9)) / 0x7) + -parseInt(_0x4ebb22(0x1b8)) / 0x8 * (-parseInt(_0x4ebb22(0x1b1)) / 0x9) + parseInt(_0x4ebb22(0x1b0)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x6a8b, 0xc52de));
function main(input) {
    const _0x3d91a9 = a0_0xf7ed;
    const a = parseInt(input[_0x3d91a9(0x1ad)]('\x20')[0x0], 0xa);
    const b = parseInt(input['split']('\x20')[0x1], 0xa);
    ptnAdd = a + b;
    ptnSub = a - b;
    ptnMul = a * b;
    ans = Math[_0x3d91a9(0x1b6)][_0x3d91a9(0x1bb)](null, [
        ptnAdd,
        ptnSub,
        ptnMul
    ]);
    console[_0x3d91a9(0x1af)](ans);
}
function a0_0x6a8b() {
    const _0x17fcab = [
        '3934535yifGJX',
        '424uRzWZq',
        '742LoZRFp',
        '/dev/stdin',
        'apply',
        '74454QkCAHK',
        '363819wciRUz',
        'split',
        '190864QNNfgm',
        'log',
        '11276730WCXJUA',
        '52767rZusQY',
        '54wRRCJn',
        'readFileSync',
        'utf8',
        '2650052RawddR',
        'max'
    ];
    a0_0x6a8b = function () {
        return _0x17fcab;
    };
    return a0_0x6a8b();
}
main(require('fs')[a0_0x26e27e(0x1b3)](a0_0x26e27e(0x1ba), a0_0x26e27e(0x1b4)));