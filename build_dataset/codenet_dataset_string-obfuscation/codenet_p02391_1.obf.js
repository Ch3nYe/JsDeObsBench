function a0_0x42ec() {
    const _0x51f8cd = [
        'a\x20==\x20b',
        'map',
        '18TZxFnt',
        '160NdlfNm',
        '9ctkUmj',
        '24jVMjDZ',
        'a\x20<\x20b',
        'log',
        'utf-8',
        '3025MVFvCa',
        '3552OIKCIo',
        'a\x20>\x20b',
        '333012HXqPTx',
        '375126iyxCFO',
        '210258QcAbTL',
        '690949JdXaIT',
        '/dev/stdin',
        '23985DrIPqV',
        'split',
        '404704IMtshw'
    ];
    a0_0x42ec = function () {
        return _0x51f8cd;
    };
    return a0_0x42ec();
}
const a0_0x6e5b03 = a0_0x9278;
function a0_0x9278(FDaUsw, key) {
    const stringArray = a0_0x42ec();
    a0_0x9278 = function (index, key) {
        index = index - 0x1e6;
        let value = stringArray[index];
        return value;
    };
    return a0_0x9278(FDaUsw, key);
}
(function (stringArrayFunction, comparisonValue) {
    const _0x33dc64 = a0_0x9278;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x33dc64(0x1eb)) / 0x1 + parseInt(_0x33dc64(0x1ea)) / 0x2 + -parseInt(_0x33dc64(0x1f6)) / 0x3 * (parseInt(_0x33dc64(0x1f1)) / 0x4) + parseInt(_0x33dc64(0x1ef)) / 0x5 * (-parseInt(_0x33dc64(0x1f4)) / 0x6) + parseInt(_0x33dc64(0x1ed)) / 0x7 * (parseInt(_0x33dc64(0x1f7)) / 0x8) + parseInt(_0x33dc64(0x1ec)) / 0x9 * (-parseInt(_0x33dc64(0x1f5)) / 0xa) + -parseInt(_0x33dc64(0x1e7)) / 0xb * (-parseInt(_0x33dc64(0x1e8)) / 0xc);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x42ec, 0x37872));
function main(input) {
    const _0x300dd5 = a0_0x9278;
    let nums = input[_0x300dd5(0x1f0)]('\x20')[_0x300dd5(0x1f3)](item => parseInt(item));
    if (nums[0x0] > nums[0x1]) {
        console['log'](_0x300dd5(0x1e9));
    } else if (nums[0x0] < nums[0x1]) {
        console[_0x300dd5(0x1f9)](_0x300dd5(0x1f8));
    } else {
        console[_0x300dd5(0x1f9)](_0x300dd5(0x1f2));
    }
}
main(require('fs')['readFileSync'](a0_0x6e5b03(0x1ee), a0_0x6e5b03(0x1e6)));