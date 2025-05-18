'use strict';
const a0_0x28e8f0 = a0_0x3ecb;
function a0_0x4524() {
    const _0x40e632 = [
        '579542OsqqhN',
        '23916690KzZaXd',
        '5gEzRQT',
        '980184elAqgN',
        'utf8',
        '3404277JBfYnC',
        '1643346UItyGx',
        'log',
        '273732rnRIvC',
        'join',
        '2QlGXXd',
        '7YUzrbQ',
        '3032286gjejtC',
        'map'
    ];
    a0_0x4524 = function () {
        return _0x40e632;
    };
    return a0_0x4524();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x127169 = a0_0x3ecb;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x127169(0xca)) / 0x1 * (parseInt(_0x127169(0xce)) / 0x2) + -parseInt(_0x127169(0xd4)) / 0x3 + -parseInt(_0x127169(0xc8)) / 0x4 * (parseInt(_0x127169(0xd0)) / 0x5) + -parseInt(_0x127169(0xcc)) / 0x6 + parseInt(_0x127169(0xcb)) / 0x7 * (parseInt(_0x127169(0xd1)) / 0x8) + -parseInt(_0x127169(0xd3)) / 0x9 + parseInt(_0x127169(0xcf)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4524, 0x6a271));
function a0_0x3ecb(PZVTNR, key) {
    const stringArray = a0_0x4524();
    a0_0x3ecb = function (index, key) {
        index = index - 0xc7;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3ecb(PZVTNR, key);
}
(function (input) {
    const _0x15029f = a0_0x3ecb;
    input = input['trim']()['split'](/\s+/)[_0x15029f(0xcd)](x => x - 0x0);
    const r = input[0x0];
    const D = input[0x1];
    let x = input[0x2];
    let ans = new Array(0xa);
    for (let i = 0x0; i < 0xa; i++) {
        x = r * x - D;
        ans[i] = x;
    }
    console[_0x15029f(0xc7)](ans[_0x15029f(0xc9)]('\x0a'));
}(require('fs')['readFileSync']('/dev/stdin', a0_0x28e8f0(0xd2))));