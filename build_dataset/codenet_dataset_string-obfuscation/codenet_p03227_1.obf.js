'use strict';
function a0_0x2101(SAHsrV, key) {
    const stringArray = a0_0x296f();
    a0_0x2101 = function (index, key) {
        index = index - 0x189;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2101(SAHsrV, key);
}
const a0_0x45039a = a0_0x2101;
(function (stringArrayFunction, comparisonValue) {
    const _0x508406 = a0_0x2101;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x508406(0x18b)) / 0x1 + parseInt(_0x508406(0x18d)) / 0x2 * (parseInt(_0x508406(0x191)) / 0x3) + -parseInt(_0x508406(0x19a)) / 0x4 * (parseInt(_0x508406(0x193)) / 0x5) + parseInt(_0x508406(0x199)) / 0x6 * (parseInt(_0x508406(0x192)) / 0x7) + -parseInt(_0x508406(0x18a)) / 0x8 + -parseInt(_0x508406(0x195)) / 0x9 * (parseInt(_0x508406(0x18f)) / 0xa) + parseInt(_0x508406(0x18e)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x296f, 0xf39c4));
function Main(input) {
    const _0x2ef2b0 = a0_0x2101;
    const S = input['split']('\x0a')[0x0];
    if (S[_0x2ef2b0(0x190)] <= 0x2) {
        console['log'](S);
    } else {
        console[_0x2ef2b0(0x197)](S[_0x2ef2b0(0x18c)]('')['reverse']()[_0x2ef2b0(0x194)](''));
    }
}
Main(require('fs')[a0_0x45039a(0x189)](a0_0x45039a(0x196), a0_0x45039a(0x198)));
function a0_0x296f() {
    const _0x588845 = [
        'utf8',
        '30wQedkZ',
        '1975980JMeGdw',
        'readFileSync',
        '1843184BODwNa',
        '454164OqIaAl',
        'split',
        '26DFIfhI',
        '14272412lNNIAH',
        '30gXNOwb',
        'length',
        '237045lSGFqU',
        '1308510siJtjG',
        '20pBFwXC',
        'join',
        '1527885bPRUut',
        '/dev/stdin',
        'log'
    ];
    a0_0x296f = function () {
        return _0x588845;
    };
    return a0_0x296f();
}