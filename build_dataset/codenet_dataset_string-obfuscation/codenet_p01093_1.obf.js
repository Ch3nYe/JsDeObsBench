const a0_0x6db4f0 = a0_0x146f;
(function (stringArrayFunction, comparisonValue) {
    const _0x170647 = a0_0x146f;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x170647(0x93)) / 0x1 * (-parseInt(_0x170647(0x98)) / 0x2) + -parseInt(_0x170647(0x9c)) / 0x3 * (parseInt(_0x170647(0x96)) / 0x4) + -parseInt(_0x170647(0x9a)) / 0x5 * (parseInt(_0x170647(0x94)) / 0x6) + -parseInt(_0x170647(0x9d)) / 0x7 + parseInt(_0x170647(0x9b)) / 0x8 + -parseInt(_0x170647(0x92)) / 0x9 + -parseInt(_0x170647(0x8f)) / 0xa * (-parseInt(_0x170647(0x95)) / 0xb);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x2c91, 0x63ad1));
function a0_0x2c91() {
    const _0x379b24 = [
        'readFileSync',
        'shift',
        '237210dytCJO',
        'trim',
        'split',
        '5180085pFfGnW',
        '1756GIKvxf',
        '4770324ODQJAU',
        '506fPWpmf',
        '8yVhrXO',
        'map',
        '862WRIBYX',
        '/dev/stdin',
        '5BVMrha',
        '2412632WwQmMI',
        '83670CrVKbJ',
        '2204363NPgHqo',
        'utf8',
        'length'
    ];
    a0_0x2c91 = function () {
        return _0x379b24;
    };
    return a0_0x2c91();
}
const input = require('fs')[a0_0x6db4f0(0x8d)](a0_0x6db4f0(0x99), a0_0x6db4f0(0x8b));
const lines = input[a0_0x6db4f0(0x90)]()[a0_0x6db4f0(0x91)]('\x0a');
function a0_0x146f(qQuCRJ, key) {
    const stringArray = a0_0x2c91();
    a0_0x146f = function (index, key) {
        index = index - 0x8b;
        let value = stringArray[index];
        return value;
    };
    return a0_0x146f(qQuCRJ, key);
}
while (line = lines[a0_0x6db4f0(0x8e)]()) {
    const numbers = line[a0_0x6db4f0(0x91)]('\x20')['map'](Number);
    if (numbers[a0_0x6db4f0(0x8c)] > 0x1) {
        const diffList = [];
        numbers['map']((num1, ind1) => {
            const _0x173b8d = a0_0x6db4f0;
            numbers[_0x173b8d(0x97)]((num2, ind2) => {
                if (ind1 !== ind2) {
                    const diff = Math['abs'](num1 - num2);
                    const pair = num1 + '\x20' + num2;
                    diffList['push']([
                        pair,
                        diff
                    ]);
                }
            });
        });
        const sorted = diffList['sort']((p1, p2) => p1[0x1] - p2[0x1])[0x0];
        console['log'](sorted[0x1]);
    }
}