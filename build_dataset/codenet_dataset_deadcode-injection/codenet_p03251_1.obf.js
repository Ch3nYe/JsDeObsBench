'use strict';
const a0_0x330aca = a0_0x3454;
function a0_0x3454(Mncuqd, key) {
    const stringArray = a0_0x35c1();
    a0_0x3454 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3454(Mncuqd, key);
}
function a0_0x35c1() {
    const _0x5048b6 = [
        'map',
        'split',
        'max',
        'log',
        'War',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x35c1 = function () {
        return _0x5048b6;
    };
    return a0_0x35c1();
}
const main = input => {
    const _0x5be49a = a0_0x3454;
    const num = input[0x0]['split']('\x20')[_0x5be49a(0x0)](val => parseInt(val)), N = num[0x0], M = num[0x1], X = num[0x2], Y = num[0x3], x = input[0x1][_0x5be49a(0x1)]('\x20')['map'](val => parseInt(val)), y = input[0x2]['split']('\x20')[_0x5be49a(0x0)](val => parseInt(val));
    const xMax = Math[_0x5be49a(0x2)](...x), yMin = Math['min'](...y);
    let ans = 0x0;
    for (let z = X + 0x1; z <= Y; z++) {
        if (xMax < z && yMin >= z) {
            ans = 0x1;
            break;
        }
    }
    console[_0x5be49a(0x3)](ans == 0x1 ? 'No\x20War' : _0x5be49a(0x4));
};
main(require('fs')[a0_0x330aca(0x5)](a0_0x330aca(0x6), a0_0x330aca(0x7))[a0_0x330aca(0x1)]('\x0a'));