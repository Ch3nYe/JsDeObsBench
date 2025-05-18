function a0_0x1904(hrOeyv, key) {
    const stringArray = a0_0x313f();
    a0_0x1904 = function (index, key) {
        index = index - 0x9f;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1904(hrOeyv, key);
}
const a0_0x3a1e40 = a0_0x1904;
function a0_0x313f() {
    const _0x38c25d = [
        '987405AmwGsI',
        '3966660nySzQE',
        'length',
        '2gUfBom',
        '1081853JxjVQU',
        'log',
        '7532968IFDZbM',
        'readFileSync',
        'utf8',
        '8848530IeThjz',
        '218436HTJtKV',
        '259rMZcVV',
        '2239508toSjYD'
    ];
    a0_0x313f = function () {
        return _0x38c25d;
    };
    return a0_0x313f();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x426c95 = a0_0x1904;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x426c95(0xa1)) / 0x1 * (-parseInt(_0x426c95(0xa0)) / 0x2) + -parseInt(_0x426c95(0xaa)) / 0x3 + -parseInt(_0x426c95(0xa9)) / 0x4 + -parseInt(_0x426c95(0xab)) / 0x5 + -parseInt(_0x426c95(0xa7)) / 0x6 * (-parseInt(_0x426c95(0xa8)) / 0x7) + parseInt(_0x426c95(0xa3)) / 0x8 + -parseInt(_0x426c95(0xa6)) / 0x9;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x313f, 0xac1d6));
function Main(str) {
    const _0x26a4e0 = a0_0x1904;
    let newString = '';
    for (let i = 0x0; i < str[_0x26a4e0(0x9f)]; i++) {
        if (str[i] === '?' && (str[i - 0x1] && str[i - 0x1] === 'P' || str[i + 0x1] && str[i + 0x1] === 'P')) {
            newString = newString + 'D';
        } else if (str[i] == '?') {
            newString = newString + 'P';
        } else {
            newString = newString + str[i];
        }
    }
    console[_0x26a4e0(0xa2)](newString);
}
let input = require('fs')[a0_0x3a1e40(0xa4)]('/dev/stdin', a0_0x3a1e40(0xa5));
Main(input);