'use strict';
function a0_0x3799(SbUdPT, key) {
    const stringArray = a0_0x2462();
    a0_0x3799 = function (index, key) {
        index = index - 0xa0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3799(SbUdPT, key);
}
const a0_0x1da960 = a0_0x3799;
(function (stringArrayFunction, comparisonValue) {
    const _0x3d457c = a0_0x3799;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x3d457c(0xaa)) / 0x1 * (-parseInt(_0x3d457c(0xab)) / 0x2) + -parseInt(_0x3d457c(0xa2)) / 0x3 + parseInt(_0x3d457c(0xa1)) / 0x4 * (-parseInt(_0x3d457c(0xa6)) / 0x5) + parseInt(_0x3d457c(0xb0)) / 0x6 * (parseInt(_0x3d457c(0xb2)) / 0x7) + -parseInt(_0x3d457c(0xa0)) / 0x8 * (parseInt(_0x3d457c(0xb1)) / 0x9) + -parseInt(_0x3d457c(0xa9)) / 0xa * (-parseInt(_0x3d457c(0xa7)) / 0xb) + parseInt(_0x3d457c(0xa8)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2462, 0xc2072));
function main(input) {
    const _0x3d0a46 = a0_0x3799;
    input = input[_0x3d0a46(0xa4)]()[_0x3d0a46(0xaf)]('\x20')['map'](Number);
    const A = input[0x0];
    const B = input[0x1];
    const ans = A % 0x2 ^ B % 0x2 ? _0x3d0a46(0xae) : _0x3d0a46(0xad);
    console[_0x3d0a46(0xa3)](ans);
}
function a0_0x2462() {
    const _0x5aabaf = [
        '2QtRZmW',
        '486474BvaxwY',
        '/dev/stdin',
        'Odd',
        'Even',
        'split',
        '36bgwFbH',
        '268578nBAFJu',
        '335041iRpkpg',
        '392RURSHN',
        '42308DbLicJ',
        '874803DGwowd',
        'log',
        'trim',
        'readFileSync',
        '65xdVSub',
        '585937bNPgzC',
        '15278904ZuQzrw',
        '120hAWBOk'
    ];
    a0_0x2462 = function () {
        return _0x5aabaf;
    };
    return a0_0x2462();
}
main(require('fs')[a0_0x1da960(0xa5)](a0_0x1da960(0xac), 'utf8'));