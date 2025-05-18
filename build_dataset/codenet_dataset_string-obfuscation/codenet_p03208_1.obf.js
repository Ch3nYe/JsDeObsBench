'use strict';
const a0_0x4323c7 = a0_0x2723;
(function (stringArrayFunction, comparisonValue) {
    const _0x2f53da = a0_0x2723;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x2f53da(0x145)) / 0x1 * (parseInt(_0x2f53da(0x153)) / 0x2) + parseInt(_0x2f53da(0x150)) / 0x3 * (-parseInt(_0x2f53da(0x143)) / 0x4) + parseInt(_0x2f53da(0x149)) / 0x5 + parseInt(_0x2f53da(0x14e)) / 0x6 + -parseInt(_0x2f53da(0x148)) / 0x7 * (-parseInt(_0x2f53da(0x14b)) / 0x8) + parseInt(_0x2f53da(0x144)) / 0x9 * (-parseInt(_0x2f53da(0x14c)) / 0xa) + -parseInt(_0x2f53da(0x142)) / 0xb * (parseInt(_0x2f53da(0x152)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2b3f, 0x1f226));
function a0_0x2b3f() {
    const _0x2ad1f8 = [
        'map',
        '844136AjpfgO',
        '70260nUKUcO',
        '/dev/stdin',
        '1200492EiEQbj',
        'slice',
        '5871ZhccDz',
        'push',
        '5604UtlmQO',
        '7834ohTnTq',
        'log',
        '2981MRaRTq',
        '4ChEQeT',
        '108LNLIXF',
        '47yDoJbO',
        'sort',
        'split',
        '14fjePot',
        '566675PLKest'
    ];
    a0_0x2b3f = function () {
        return _0x2ad1f8;
    };
    return a0_0x2b3f();
}
function a0_0x2723(OBZbwb, key) {
    const stringArray = a0_0x2b3f();
    a0_0x2723 = function (index, key) {
        index = index - 0x142;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2723(OBZbwb, key);
}
function main(arg) {
    const _0x4c6890 = a0_0x2723;
    const inputs = arg[_0x4c6890(0x147)]('\x0a');
    const N = parseInt(inputs[0x0]['split']('\x20')[0x0]);
    const K = parseInt(inputs[0x0][_0x4c6890(0x147)]('\x20')[0x1]);
    const list = inputs[_0x4c6890(0x14f)](0x1, N + 0x1)[_0x4c6890(0x14a)](x => parseInt(x))[_0x4c6890(0x146)]((a, b) => {
        return a - b;
    });
    let i, sa = [];
    for (i = 0x0; i < N - K + 0x1; ++i)
        sa[_0x4c6890(0x151)](list[i + K - 0x1] - list[i]);
    console[_0x4c6890(0x154)](Math['min'](...sa));
}
main(require('fs')['readFileSync'](a0_0x4323c7(0x14d), 'utf8'));