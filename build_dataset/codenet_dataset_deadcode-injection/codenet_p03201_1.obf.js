'use strict';
const a0_0x2f9431 = a0_0x119c;
function a0_0x119c(vySJBL, key) {
    const stringArray = a0_0x170a();
    a0_0x119c = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x119c(vySJBL, key);
}
function getPair(num) {
    const _0xbefb17 = a0_0x119c;
    return parseInt(num[_0xbefb17(0x0)](0x2)[_0xbefb17(0x1)]('')['map'](x => x === '1' ? '0' : '1')[_0xbefb17(0x2)]((acc, cur) => acc + cur, ''), 0x2) + 0x1;
}
function main(input) {
    const _0x1c67b1 = a0_0x119c;
    const inputs = input[_0x1c67b1(0x1)]('\x0a')['filter'](x => x !== '');
    const A = inputs[0x1][_0x1c67b1(0x1)]('\x20')[_0x1c67b1(0x3)](Number);
    let sortedA = A[_0x1c67b1(0x4)]((a, b) => b - a);
    let count = 0x0;
    while (sortedA[_0x1c67b1(0x5)] > 0x0) {
        let i = sortedA[0x0];
        sortedA[_0x1c67b1(0x6)](0x0, 0x1);
        let j = getPair(i);
        let indexJ = sortedA['findIndex'](x => x === j);
        if (indexJ >= 0x0) {
            sortedA['splice'](indexJ, 0x1);
            count++;
        }
    }
    console['log'](count);
}
function a0_0x170a() {
    const _0x33b074 = [
        'toString',
        'split',
        'reduce',
        'map',
        'sort',
        'length',
        'splice',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x170a = function () {
        return _0x33b074;
    };
    return a0_0x170a();
}
main(require('fs')[a0_0x2f9431(0x7)](a0_0x2f9431(0x8), a0_0x2f9431(0x9)));