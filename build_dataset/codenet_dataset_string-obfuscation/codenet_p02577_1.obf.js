const a0_0x3fc8ce = a0_0x2686;
(function (stringArrayFunction, comparisonValue) {
    const _0x5ce7ab = a0_0x2686;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x5ce7ab(0x16d)) / 0x1 + parseInt(_0x5ce7ab(0x174)) / 0x2 + parseInt(_0x5ce7ab(0x166)) / 0x3 + -parseInt(_0x5ce7ab(0x167)) / 0x4 * (-parseInt(_0x5ce7ab(0x16a)) / 0x5) + parseInt(_0x5ce7ab(0x170)) / 0x6 + -parseInt(_0x5ce7ab(0x16f)) / 0x7 * (parseInt(_0x5ce7ab(0x168)) / 0x8) + -parseInt(_0x5ce7ab(0x16e)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x23c3, 0x4d5f1));
function a0_0x2686(VYLCRN, key) {
    const stringArray = a0_0x23c3();
    a0_0x2686 = function (index, key) {
        index = index - 0x165;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2686(VYLCRN, key);
}
function Main(input) {
    const _0x6535b2 = a0_0x2686;
    let num = parseInt(input, 0xa);
    let sum = 0x0;
    let tmp = 0x0;
    for (let i = input[_0x6535b2(0x16c)] - 0x1; 0x0 <= i; i--) {
        tmp = Math[_0x6535b2(0x16b)](num / Math[_0x6535b2(0x172)](0xa, i));
        sum += tmp;
        num -= tmp * Math[_0x6535b2(0x172)](0xa, i);
    }
    const ans = sum % 0x9 === 0x0 ? _0x6535b2(0x169) : 'No';
    console[_0x6535b2(0x171)](ans);
}
function a0_0x23c3() {
    const _0x36686e = [
        'floor',
        'length',
        '331077SZnwcd',
        '9261126MUJynQ',
        '545783QJRLmu',
        '2812452tBiEkj',
        'log',
        'pow',
        'utf8',
        '1167656UgXXtW',
        '/dev/stdin',
        '407316kZKNfO',
        '30752eFhIfR',
        '32lxtFyd',
        'Yes',
        '90AQbRls'
    ];
    a0_0x23c3 = function () {
        return _0x36686e;
    };
    return a0_0x23c3();
}
;
Main(require('fs')['readFileSync'](a0_0x3fc8ce(0x165), a0_0x3fc8ce(0x173)));