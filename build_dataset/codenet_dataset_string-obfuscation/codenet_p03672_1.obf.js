'use strict';
const a0_0x5e6971 = a0_0x40d2;
(function (stringArrayFunction, comparisonValue) {
    const _0x8c917c = a0_0x40d2;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x8c917c(0x15f)) / 0x1 + parseInt(_0x8c917c(0x15a)) / 0x2 + -parseInt(_0x8c917c(0x15d)) / 0x3 + parseInt(_0x8c917c(0x159)) / 0x4 + -parseInt(_0x8c917c(0x14f)) / 0x5 + -parseInt(_0x8c917c(0x157)) / 0x6 + -parseInt(_0x8c917c(0x15c)) / 0x7 * (-parseInt(_0x8c917c(0x156)) / 0x8);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x3466, 0x7ce5e));
function a0_0x40d2(pOxlCe, key) {
    const stringArray = a0_0x3466();
    a0_0x40d2 = function (index, key) {
        index = index - 0x14f;
        let value = stringArray[index];
        return value;
    };
    return a0_0x40d2(pOxlCe, key);
}
const main = arg => {
    const _0x569d63 = a0_0x40d2;
    arg = arg[_0x569d63(0x151)]()['split']('\x0a');
    const S = arg[0x0]['split']('');
    if (S[_0x569d63(0x155)] === 0x2) {
        console['log'](0x1);
        return;
    }
    for (let i = 0x0; i < S[_0x569d63(0x155)]; i++) {
        S[_0x569d63(0x153)]();
        let mid = Math[_0x569d63(0x15e)](S[_0x569d63(0x155)] / 0x2);
        if (S[_0x569d63(0x152)](0x0, mid)['join']('') === S[_0x569d63(0x152)](mid, S['length'] + 0x1)[_0x569d63(0x150)]('')) {
            console[_0x569d63(0x15b)](S[_0x569d63(0x155)]);
            return;
        }
    }
};
main(require('fs')[a0_0x5e6971(0x158)]('/dev/stdin', a0_0x5e6971(0x154)));
function a0_0x3466() {
    const _0x4bbf78 = [
        'floor',
        '170425SraVGv',
        '2734015TIrfEv',
        'join',
        'trim',
        'slice',
        'pop',
        'utf8',
        'length',
        '8oxkXlg',
        '1354386EuXHii',
        'readFileSync',
        '4047044aeVBzQ',
        '520598oDBLKm',
        'log',
        '4394768JDCrVq',
        '1336029OwRPrC'
    ];
    a0_0x3466 = function () {
        return _0x4bbf78;
    };
    return a0_0x3466();
}