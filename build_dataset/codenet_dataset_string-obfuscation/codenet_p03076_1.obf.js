'use strict';
function a0_0x537a() {
    const _0x180a48 = [
        '2089qDgSUb',
        'length',
        '48vmyjKO',
        '3620CBODFL',
        'trim',
        'readFileSync',
        'utf8',
        '12852917kNIeQY',
        '165VfrNhn',
        '2331dwlNIw',
        'log',
        '764qVLXRc',
        '1842127uCfCYD',
        '134694xcUABa',
        '35810LRLkSB',
        'split',
        '315240CVRdWK'
    ];
    a0_0x537a = function () {
        return _0x180a48;
    };
    return a0_0x537a();
}
function a0_0x1d14(cIzOwP, key) {
    const stringArray = a0_0x537a();
    a0_0x1d14 = function (index, key) {
        index = index - 0x1e2;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1d14(cIzOwP, key);
}
const a0_0x1398b0 = a0_0x1d14;
(function (stringArrayFunction, comparisonValue) {
    const _0x1d7acf = a0_0x1d14;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x1d7acf(0x1f2)) / 0x1 * (parseInt(_0x1d7acf(0x1ec)) / 0x2) + -parseInt(_0x1d7acf(0x1e3)) / 0x3 * (parseInt(_0x1d7acf(0x1e4)) / 0x4) + -parseInt(_0x1d7acf(0x1e9)) / 0x5 * (-parseInt(_0x1d7acf(0x1ee)) / 0x6) + parseInt(_0x1d7acf(0x1ed)) / 0x7 + parseInt(_0x1d7acf(0x1f1)) / 0x8 + parseInt(_0x1d7acf(0x1ea)) / 0x9 * (-parseInt(_0x1d7acf(0x1ef)) / 0xa) + parseInt(_0x1d7acf(0x1e8)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x537a, 0x73341));
const main = arg => {
    const _0x3b475d = a0_0x1d14;
    const times = arg[_0x3b475d(0x1e5)]()['split']('\x0a')['map'](n => parseInt(n));
    let min = 0xa;
    let sum = 0x0;
    for (let i = 0x0; i < times[_0x3b475d(0x1e2)]; i++) {
        let digitOne = String(times[i])[_0x3b475d(0x1f0)]('');
        digitOne = parseInt(digitOne[digitOne[_0x3b475d(0x1e2)] - 0x1]);
        let digitMinus = 0xa - digitOne;
        sum += parseInt(times[i]);
        if (digitMinus !== 0xa) {
            sum += digitMinus;
        }
        if (digitMinus !== 0xa && digitOne < min) {
            min = digitOne;
        }
    }
    console[_0x3b475d(0x1eb)](parseInt(sum - (0xa - min)));
};
main(require('fs')[a0_0x1398b0(0x1e6)]('/dev/stdin', a0_0x1398b0(0x1e7)));