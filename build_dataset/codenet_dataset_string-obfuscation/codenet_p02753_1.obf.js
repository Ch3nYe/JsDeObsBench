'use strict;';
function a0_0x57fc() {
    const _0x549b32 = [
        '/dev/stdin',
        '120zOXMUq',
        'Yes',
        '136420aEhFnk',
        '6332385flINWp',
        'split',
        '4CsErlF',
        'trim',
        '7VWpRbV',
        '838650TnCWAn',
        '5548384PmrNBa',
        '1861684fBgUVo',
        '2427228BajUzq',
        'log',
        '2ZIBpuT',
        '855FjUNhG',
        '2064966uKNzrI'
    ];
    a0_0x57fc = function () {
        return _0x549b32;
    };
    return a0_0x57fc();
}
const a0_0x4347ac = a0_0x103f;
(function (stringArrayFunction, comparisonValue) {
    const _0x20e3a5 = a0_0x103f;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x20e3a5(0x14a)) / 0x1 * (parseInt(_0x20e3a5(0x156)) / 0x2) + -parseInt(_0x20e3a5(0x14c)) / 0x3 + -parseInt(_0x20e3a5(0x153)) / 0x4 * (parseInt(_0x20e3a5(0x151)) / 0x5) + -parseInt(_0x20e3a5(0x148)) / 0x6 + parseInt(_0x20e3a5(0x155)) / 0x7 * (-parseInt(_0x20e3a5(0x157)) / 0x8) + -parseInt(_0x20e3a5(0x14b)) / 0x9 * (-parseInt(_0x20e3a5(0x150)) / 0xa) + -parseInt(_0x20e3a5(0x158)) / 0xb * (-parseInt(_0x20e3a5(0x14e)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x57fc, 0xbd033));
main(require('fs')['readFileSync'](a0_0x4347ac(0x14d), 'UTF-8')[a0_0x4347ac(0x154)]()['split']('\x0a'));
function a0_0x103f(PLMTUS, key) {
    const stringArray = a0_0x57fc();
    a0_0x103f = function (index, key) {
        index = index - 0x148;
        let value = stringArray[index];
        return value;
    };
    return a0_0x103f(PLMTUS, key);
}
function main(input) {
    const _0x3ef90e = a0_0x4347ac;
    input = input[0x0][_0x3ef90e(0x152)]('');
    let num = 0x2;
    let isSame = !![];
    while (num > 0x0) {
        if (input[num] !== input[0x0]) {
            isSame = ![];
            break;
        }
        num--;
    }
    console[_0x3ef90e(0x149)](isSame ? 'No' : _0x3ef90e(0x14f));
}