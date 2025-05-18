'use strict';
function a0_0x61cd(dtUaoQ, key) {
    const stringArray = a0_0x17b2();
    a0_0x61cd = function (index, key) {
        index = index - 0x143;
        let value = stringArray[index];
        return value;
    };
    return a0_0x61cd(dtUaoQ, key);
}
const a0_0x26db33 = a0_0x61cd;
function a0_0x17b2() {
    const _0x656575 = [
        '7007DyYKDF',
        'split',
        '3092665uCgSPZ',
        '886827dYNxMb',
        '4269844nemQsp',
        '4wiaomw',
        '3642328KDMkNo',
        'log',
        '/dev/stdin',
        'trim',
        '6873696ssYhah',
        '1968wcGXjW',
        '417325VVezqv',
        'Hello\x20World'
    ];
    a0_0x17b2 = function () {
        return _0x656575;
    };
    return a0_0x17b2();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x170747 = a0_0x61cd;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x170747(0x150)) / 0x1 + -parseInt(_0x170747(0x149)) / 0x2 * (parseInt(_0x170747(0x147)) / 0x3) + parseInt(_0x170747(0x148)) / 0x4 + parseInt(_0x170747(0x146)) / 0x5 + parseInt(_0x170747(0x14f)) / 0x6 * (parseInt(_0x170747(0x144)) / 0x7) + -parseInt(_0x170747(0x14a)) / 0x8 + -parseInt(_0x170747(0x14e)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x17b2, 0x97b52));
const main = input => {
    const _0x524b71 = a0_0x61cd;
    const args = input[_0x524b71(0x14d)]()[_0x524b71(0x145)]('\x0a');
    const n = parseInt(args[0x0], 0xa);
    if (n === 0x1) {
        console[_0x524b71(0x14b)](_0x524b71(0x143));
    } else {
        const a = parseInt(args[0x1], 0xa);
        const b = parseInt(args[0x2], 0xa);
        console[_0x524b71(0x14b)](a + b);
    }
};
main(require('fs')['readFileSync'](a0_0x26db33(0x14c), 'utf8'));