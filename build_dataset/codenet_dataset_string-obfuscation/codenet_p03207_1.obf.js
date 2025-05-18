'use strict';
const a0_0x465c08 = a0_0x118c;
(function (stringArrayFunction, comparisonValue) {
    const _0x389ea0 = a0_0x118c;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x389ea0(0xbd)) / 0x1 * (parseInt(_0x389ea0(0xbe)) / 0x2) + -parseInt(_0x389ea0(0xbc)) / 0x3 * (-parseInt(_0x389ea0(0xb1)) / 0x4) + parseInt(_0x389ea0(0xb4)) / 0x5 * (-parseInt(_0x389ea0(0xc2)) / 0x6) + parseInt(_0x389ea0(0xb3)) / 0x7 * (parseInt(_0x389ea0(0xbf)) / 0x8) + -parseInt(_0x389ea0(0xb6)) / 0x9 * (-parseInt(_0x389ea0(0xbb)) / 0xa) + -parseInt(_0x389ea0(0xc1)) / 0xb * (-parseInt(_0x389ea0(0xb5)) / 0xc) + parseInt(_0x389ea0(0xae)) / 0xd * (-parseInt(_0x389ea0(0xba)) / 0xe);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2bea, 0x614d3));
const main = input => {
    const _0x10bb92 = a0_0x118c;
    const args = input[_0x10bb92(0xb8)]('\x0a')['map'](arg => arg[_0x10bb92(0xb8)]('\x20'));
    const N = parseInt(args[0x0][0x0], 0xa);
    const p = args[_0x10bb92(0xb9)](0x1, N + 0x1)['map'](arg => parseInt(arg[0x0], 0xa))[_0x10bb92(0xb0)]((a, b) => b - a);
    let sum = p[0x0] / 0x2;
    for (let i = 0x1; i < N; i++) {
        sum += p[i];
    }
    console[_0x10bb92(0xb2)](sum);
};
function a0_0x118c(rtukVh, key) {
    const stringArray = a0_0x2bea();
    a0_0x118c = function (index, key) {
        index = index - 0xae;
        let value = stringArray[index];
        return value;
    };
    return a0_0x118c(rtukVh, key);
}
function a0_0x2bea() {
    const _0x12391c = [
        'slice',
        '14laXOCh',
        '3490FAaYxF',
        '6VOUeep',
        '353558WRjAZP',
        '2jiCTVj',
        '32zgrXDW',
        'utf8',
        '99dxCELj',
        '2043222WGZlac',
        '8219458kpbtRZ',
        '/dev/stdin',
        'sort',
        '52324nuWOgP',
        'log',
        '1190301azeCJH',
        '5QiiNdn',
        '895092wdEFIU',
        '8955hlqCZb',
        'readFileSync',
        'split'
    ];
    a0_0x2bea = function () {
        return _0x12391c;
    };
    return a0_0x2bea();
}
main(require('fs')[a0_0x465c08(0xb7)](a0_0x465c08(0xaf), a0_0x465c08(0xc0)));