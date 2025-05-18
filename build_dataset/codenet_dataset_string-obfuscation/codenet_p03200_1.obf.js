'use strict';
function a0_0xb1ff(NblPLp, key) {
    const stringArray = a0_0x4e32();
    a0_0xb1ff = function (index, key) {
        index = index - 0x9f;
        let value = stringArray[index];
        return value;
    };
    return a0_0xb1ff(NblPLp, key);
}
const a0_0x344e8b = a0_0xb1ff;
function a0_0x4e32() {
    const _0x2e197b = [
        '5945272ewCdUh',
        '2005633NYYZjS',
        '2HWyQDR',
        '18yIKnOF',
        '4JKLGaC',
        '/dev/stdin',
        '3945635Wborjl',
        '32629392icahtc',
        '11gkPFtz',
        'utf8',
        '9GKtJBZ',
        'split',
        'readFileSync',
        'map',
        'log',
        '1561863zpqJXQ',
        '232068Zrmuzs',
        'filter',
        'reduce',
        '5912710VbJQLK'
    ];
    a0_0x4e32 = function () {
        return _0x2e197b;
    };
    return a0_0x4e32();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x56f249 = a0_0xb1ff;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x56f249(0xb0)) / 0x1 + -parseInt(_0x56f249(0xa2)) / 0x2 * (parseInt(_0x56f249(0xaf)) / 0x3) + -parseInt(_0x56f249(0xa4)) / 0x4 * (parseInt(_0x56f249(0xa6)) / 0x5) + -parseInt(_0x56f249(0xa3)) / 0x6 * (-parseInt(_0x56f249(0xa1)) / 0x7) + -parseInt(_0x56f249(0xa0)) / 0x8 * (parseInt(_0x56f249(0xaa)) / 0x9) + parseInt(_0x56f249(0x9f)) / 0xa * (-parseInt(_0x56f249(0xa8)) / 0xb) + parseInt(_0x56f249(0xa7)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x4e32, 0xab7db));
function main(input) {
    const _0x5bacf6 = a0_0xb1ff;
    const inputs = input[_0x5bacf6(0xab)]('\x0a')[_0x5bacf6(0xb1)](x => x !== '');
    const s = inputs[0x0];
    const result = s[_0x5bacf6(0xab)]('')[_0x5bacf6(0xad)]((input, index) => input === 'W' ? index : -0x1)[_0x5bacf6(0xb1)](x => x !== -0x1)[_0x5bacf6(0xb2)]((acc, cur, index) => acc + cur - index, 0x0);
    console[_0x5bacf6(0xae)](result);
}
main(require('fs')[a0_0x344e8b(0xac)](a0_0x344e8b(0xa5), a0_0x344e8b(0xa9)));