'use strict';
const a0_0x509170 = a0_0x4aed;
(function (stringArrayFunction, comparisonValue) {
    const _0x1dddc2 = a0_0x4aed;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x1dddc2(0x120)) / 0x1 + parseInt(_0x1dddc2(0x11a)) / 0x2 + -parseInt(_0x1dddc2(0x11e)) / 0x3 + parseInt(_0x1dddc2(0x121)) / 0x4 + parseInt(_0x1dddc2(0x11b)) / 0x5 + -parseInt(_0x1dddc2(0x125)) / 0x6 + -parseInt(_0x1dddc2(0x124)) / 0x7 * (parseInt(_0x1dddc2(0x126)) / 0x8);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x385e, 0xe1e31));
function a0_0x4aed(QYHIVs, key) {
    const stringArray = a0_0x385e();
    a0_0x4aed = function (index, key) {
        index = index - 0x11a;
        let value = stringArray[index];
        return value;
    };
    return a0_0x4aed(QYHIVs, key);
}
function Main(input) {
    let N = Number(input);
    const func = () => {
        const _0x528f44 = a0_0x4aed;
        if (N < 0x4) {
            console[_0x528f44(0x123)]('No');
        } else if (N % 0x4 === 0x0) {
            console[_0x528f44(0x123)](_0x528f44(0x122));
        } else if (N % 0x7 === 0x0) {
            console[_0x528f44(0x123)](_0x528f44(0x122));
        } else {
            N -= 0x4;
            func();
        }
    };
    func();
}
;
function a0_0x385e() {
    const _0x364d4f = [
        '2663304ojpMBV',
        'Yes',
        'log',
        '938RSnlIO',
        '2209650IxOPMf',
        '164264mtvuyP',
        'trim',
        '1643786LAwakn',
        '7114370QtzbGA',
        'readFileSync',
        '/dev/stdin',
        '1196808VriraH',
        'utf8',
        '1533273OZbSik'
    ];
    a0_0x385e = function () {
        return _0x364d4f;
    };
    return a0_0x385e();
}
Main(require('fs')[a0_0x509170(0x11c)](a0_0x509170(0x11d), a0_0x509170(0x11f))[a0_0x509170(0x127)]());