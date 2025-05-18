'use strict';
const a0_0x4ea333 = a0_0x214c;
function a0_0x214c(ENFFox, key) {
    const stringArray = a0_0xcd0b();
    a0_0x214c = function (index, key) {
        index = index - 0x7b;
        let value = stringArray[index];
        return value;
    };
    return a0_0x214c(ENFFox, key);
}
function a0_0xcd0b() {
    const _0x3b0f82 = [
        '415WAzCqU',
        '6821880zTzCvC',
        '1302147TToumt',
        'map',
        '507791UasigK',
        'Yes',
        '1366804URTGgY',
        'trim',
        'readFileSync',
        'split',
        '34674DzeAXE',
        '1754746yprrhU',
        'log',
        'utf8',
        '9478368oAFaVX',
        '16hCzoLN'
    ];
    a0_0xcd0b = function () {
        return _0x3b0f82;
    };
    return a0_0xcd0b();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x4b9da6 = a0_0x214c;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x4b9da6(0x7c)) / 0x1 + parseInt(_0x4b9da6(0x7e)) / 0x2 + -parseInt(_0x4b9da6(0x8a)) / 0x3 + -parseInt(_0x4b9da6(0x89)) / 0x4 + -parseInt(_0x4b9da6(0x88)) / 0x5 * (parseInt(_0x4b9da6(0x82)) / 0x6) + parseInt(_0x4b9da6(0x83)) / 0x7 + parseInt(_0x4b9da6(0x87)) / 0x8 * (parseInt(_0x4b9da6(0x86)) / 0x9);
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0xcd0b, 0xe2ce7));
const main = arg => {
    const _0x1a3e6b = a0_0x214c;
    arg = arg[_0x1a3e6b(0x7f)]()[_0x1a3e6b(0x81)]('\x0a');
    const N = parseInt(arg[0x0][_0x1a3e6b(0x81)]('\x20')[0x0]);
    let L = arg[0x1]['split']('\x20')[_0x1a3e6b(0x7b)](n => parseInt(n))['sort']((a, b) => b - a);
    const longest = L['shift']();
    const sum = L['reduce']((m, n) => m + n);
    console[_0x1a3e6b(0x84)](longest < sum ? _0x1a3e6b(0x7d) : 'No');
};
main(require('fs')[a0_0x4ea333(0x80)]('/dev/stdin', a0_0x4ea333(0x85)));