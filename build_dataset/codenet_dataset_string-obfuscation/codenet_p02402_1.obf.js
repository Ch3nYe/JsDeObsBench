function a0_0x39c5() {
    const _0x5a2d2b = [
        '2565120MpjGXg',
        '282TAsoAu',
        '2259513qPQBHV',
        '27986TLsFNe',
        '4168wiKAOY',
        '8XDjkEE',
        'forEach',
        '1177236KNMUUo',
        'readFileSync',
        'map',
        'utf8',
        '2335800VMlkwQ',
        '68ZBcrUs',
        '/dev/stdin',
        '1398528kpYbAv',
        'split'
    ];
    a0_0x39c5 = function () {
        return _0x5a2d2b;
    };
    return a0_0x39c5();
}
const a0_0x5d80e4 = a0_0x2b47;
(function (stringArrayFunction, comparisonValue) {
    const _0x386f28 = a0_0x2b47;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x386f28(0x139)) / 0x1 * (parseInt(_0x386f28(0x131)) / 0x2) + -parseInt(_0x386f28(0x133)) / 0x3 + -parseInt(_0x386f28(0x13c)) / 0x4 + parseInt(_0x386f28(0x135)) / 0x5 + -parseInt(_0x386f28(0x136)) / 0x6 * (-parseInt(_0x386f28(0x138)) / 0x7) + parseInt(_0x386f28(0x13a)) / 0x8 * (parseInt(_0x386f28(0x137)) / 0x9) + parseInt(_0x386f28(0x130)) / 0xa;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x39c5, 0x452ea));
const input = require('fs')[a0_0x5d80e4(0x13d)](a0_0x5d80e4(0x132), a0_0x5d80e4(0x13f));
const arr = input['split'](/\n/);
const numbers = arr[0x1][a0_0x5d80e4(0x134)]('\x20')[a0_0x5d80e4(0x13e)](Number);
let min = numbers[0x0];
function a0_0x2b47(XkErVX, key) {
    const stringArray = a0_0x39c5();
    a0_0x2b47 = function (index, key) {
        index = index - 0x130;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2b47(XkErVX, key);
}
let max = numbers[0x0];
let sum = 0x0;
numbers[a0_0x5d80e4(0x13b)](number => {
    if (min > number)
        min = number;
    if (max < number)
        max = number;
    sum += number;
});
console['log'](min + '\x20' + max + '\x20' + sum);