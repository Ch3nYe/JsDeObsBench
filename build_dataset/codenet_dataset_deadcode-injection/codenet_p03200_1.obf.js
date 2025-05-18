'use strict';
const a0_0x52ef50 = a0_0x27ac;
function a0_0x4239() {
    const _0x171806 = [
        'split',
        'filter',
        'map',
        'log',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x4239 = function () {
        return _0x171806;
    };
    return a0_0x4239();
}
function a0_0x27ac(pXLvJF, key) {
    const stringArray = a0_0x4239();
    a0_0x27ac = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x27ac(pXLvJF, key);
}
function main(input) {
    const _0x39c20f = a0_0x27ac;
    const inputs = input[_0x39c20f(0x0)]('\x0a')[_0x39c20f(0x1)](x => x !== '');
    const s = inputs[0x0];
    const result = s[_0x39c20f(0x0)]('')[_0x39c20f(0x2)]((input, index) => input === 'W' ? index : -0x1)['filter'](x => x !== -0x1)['reduce']((acc, cur, index) => acc + cur - index, 0x0);
    console[_0x39c20f(0x3)](result);
}
main(require('fs')['readFileSync'](a0_0x52ef50(0x4), a0_0x52ef50(0x5)));