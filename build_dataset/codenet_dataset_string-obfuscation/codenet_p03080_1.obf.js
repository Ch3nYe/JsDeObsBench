function a0_0x1b54() {
    const _0x1541de = [
        'log',
        '17562AGlssE',
        '3235830PJeqYp',
        '52457CScbCu',
        '37612QkRjtp',
        '4OXOMKz',
        '87JsZtAu',
        '130FctPCx',
        '119820SEkEOA',
        '352yLyBht',
        'readFileSync',
        'split',
        '/dev/stdin',
        '2733516ShiBVN',
        '16KFzSAh',
        'Yes',
        '409213edkEea',
        '10hPkMun',
        'length'
    ];
    a0_0x1b54 = function () {
        return _0x1541de;
    };
    return a0_0x1b54();
}
function a0_0x9c4f(cqMdqz, key) {
    const stringArray = a0_0x1b54();
    a0_0x9c4f = function (index, key) {
        index = index - 0xd8;
        let value = stringArray[index];
        return value;
    };
    return a0_0x9c4f(cqMdqz, key);
}
const a0_0x5696f2 = a0_0x9c4f;
(function (stringArrayFunction, comparisonValue) {
    const _0x4e7612 = a0_0x9c4f;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x4e7612(0xe1)) / 0x1 * (parseInt(_0x4e7612(0xe3)) / 0x2) + -parseInt(_0x4e7612(0xe4)) / 0x3 * (parseInt(_0x4e7612(0xe2)) / 0x4) + -parseInt(_0x4e7612(0xe5)) / 0x5 * (-parseInt(_0x4e7612(0xdf)) / 0x6) + -parseInt(_0x4e7612(0xdb)) / 0x7 * (parseInt(_0x4e7612(0xd9)) / 0x8) + -parseInt(_0x4e7612(0xd8)) / 0x9 * (-parseInt(_0x4e7612(0xdc)) / 0xa) + -parseInt(_0x4e7612(0xe7)) / 0xb * (-parseInt(_0x4e7612(0xe6)) / 0xc) + -parseInt(_0x4e7612(0xe0)) / 0xd;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1b54, 0x28771));
function Main(input) {
    const _0x2dd15e = a0_0x9c4f;
    let Red = 0x0;
    let Blue = 0x0;
    const input_line = input[_0x2dd15e(0xe9)]('\x0a');
    inputS = input_line[0x1][_0x2dd15e(0xe9)]('');
    for (i = 0x0; i < inputS[_0x2dd15e(0xdd)]; i++) {
        if (inputS[i] === 'R') {
            Red++;
        } else {
            Blue++;
        }
    }
    console[_0x2dd15e(0xde)](Red > Blue ? _0x2dd15e(0xda) : 'No');
}
Main(require('fs')[a0_0x5696f2(0xe8)](a0_0x5696f2(0xea), 'utf8'));