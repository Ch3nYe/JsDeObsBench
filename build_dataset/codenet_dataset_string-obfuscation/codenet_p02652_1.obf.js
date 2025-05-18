function a0_0x3045(hSoIHu, key) {
    const stringArray = a0_0x1161();
    a0_0x3045 = function (index, key) {
        index = index - 0x132;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3045(hSoIHu, key);
}
const a0_0x2a10be = a0_0x3045;
(function (stringArrayFunction, comparisonValue) {
    const _0x47724a = a0_0x3045;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x47724a(0x137)) / 0x1 * (-parseInt(_0x47724a(0x135)) / 0x2) + -parseInt(_0x47724a(0x134)) / 0x3 * (-parseInt(_0x47724a(0x133)) / 0x4) + parseInt(_0x47724a(0x13b)) / 0x5 + -parseInt(_0x47724a(0x13d)) / 0x6 * (-parseInt(_0x47724a(0x13c)) / 0x7) + parseInt(_0x47724a(0x13e)) / 0x8 + parseInt(_0x47724a(0x13a)) / 0x9 * (parseInt(_0x47724a(0x136)) / 0xa) + -parseInt(_0x47724a(0x138)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1161, 0x38f9f));
function a0_0x1161() {
    const _0x4e97c4 = [
        '10695366FMGFVK',
        'length',
        '24273XqzMjP',
        '2312720TJVydP',
        '7SNmYqx',
        '1444542YgHRwx',
        '2739232EhbygA',
        'log',
        'readFileSync',
        '71228mXuqKO',
        '51TMsLED',
        '12tsmwVy',
        '470Tjfigr',
        '44917KbObOb'
    ];
    a0_0x1161 = function () {
        return _0x4e97c4;
    };
    return a0_0x1161();
}
function Main(str) {
    const _0x572f2e = a0_0x3045;
    let zero = 0x0;
    let one = 0x0;
    for (let i = 0x0; i < str[_0x572f2e(0x139)]; i++) {
        if (str[i] === '1') {
            one++;
        } else if (str[i] === '0') {
            zero++;
        }
    }
    console[_0x572f2e(0x13f)](Math['abs'](one - zero));
}
let input = require('fs')[a0_0x2a10be(0x132)]('/dev/stdin', 'utf8');
Main(input);