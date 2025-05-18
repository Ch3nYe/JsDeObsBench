'use strict';
const a0_0x5c745e = a0_0xc588;
(function (stringArrayFunction, comparisonValue) {
    const _0x22b82e = a0_0xc588;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x22b82e(0x1c0)) / 0x1 + parseInt(_0x22b82e(0x1c7)) / 0x2 + -parseInt(_0x22b82e(0x1be)) / 0x3 + parseInt(_0x22b82e(0x1ca)) / 0x4 + parseInt(_0x22b82e(0x1c1)) / 0x5 + parseInt(_0x22b82e(0x1c6)) / 0x6 * (-parseInt(_0x22b82e(0x1c5)) / 0x7) + -parseInt(_0x22b82e(0x1c9)) / 0x8 * (parseInt(_0x22b82e(0x1c4)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x5695, 0x1a696));
function a0_0xc588(CsCulc, key) {
    const stringArray = a0_0x5695();
    a0_0xc588 = function (index, key) {
        index = index - 0x1be;
        let value = stringArray[index];
        return value;
    };
    return a0_0xc588(CsCulc, key);
}
function a0_0x5695() {
    const _0x13e14d = [
        '37936KXUWvd',
        '556616gZbOUg',
        'map',
        'reduce',
        '173595lVkTbP',
        'trim',
        '135399zmwdZJ',
        '1005705kpdchL',
        'split',
        '/dev/stdin',
        '522NSsCOC',
        '7rRLwln',
        '1106994gzqmzg',
        '299776tFTiCU',
        'utf8'
    ];
    a0_0x5695 = function () {
        return _0x13e14d;
    };
    return a0_0x5695();
}
const main = input => {
    const _0x4b2816 = a0_0xc588;
    input = input[_0x4b2816(0x1bf)]()[_0x4b2816(0x1c2)]('\x0a');
    const K = parseInt(input[0x0][_0x4b2816(0x1c2)]('\x20')[0x0]);
    const T = parseInt(input[0x0]['split']('\x20')[0x1]);
    let a = input[0x1]['split']('\x20')[_0x4b2816(0x1cb)](el => {
        return parseInt(el);
    });
    let max = a[_0x4b2816(0x1cc)](function (previous, current) {
        return previous > current ? previous : current;
    });
    if (max - 0x1 - (K - max) > 0x0) {
        console['log'](max - 0x1 - (K - max));
    } else {
        console['log'](0x0);
    }
};
main(require('fs')['readFileSync'](a0_0x5c745e(0x1c3), a0_0x5c745e(0x1c8)));