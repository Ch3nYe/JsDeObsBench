function a0_0x5a12() {
    const _0x43dcc4 = [
        'split',
        'slice',
        'filter',
        'map',
        'length',
        'concat',
        'pop',
        'log',
        'apply',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x5a12 = function () {
        return _0x43dcc4;
    };
    return a0_0x5a12();
}
const a0_0x3b605e = a0_0x417b;
function a0_0x417b(pPMVji, key) {
    const stringArray = a0_0x5a12();
    a0_0x417b = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x417b(pPMVji, key);
}
function main(input) {
    'use strict';
    const _0x438791 = a0_0x417b;
    const lines = input[_0x438791(0x0)]('\x0a');
    const firstLine = lines[0x0][_0x438791(0x0)]('\x20')['map'](value => +value);
    const L = firstLine[0x0];
    const N = firstLine[0x1];
    let xn = lines[_0x438791(0x1)](0x1)[_0x438791(0x2)](value => value)[_0x438791(0x3)](value => +value);
    let costs = [];
    const search = (x, xn, sum) => {
        const _0x515503 = a0_0x417b;
        if (xn[_0x515503(0x4)] === 0x0) {
            costs['push'](sum);
            return;
        }
        const leftDistance = xn[0x0] >= x ? xn[0x0] - x : L - x + xn[0x0];
        const rightDistance = xn[xn['length'] - 0x1] <= x ? x - xn[xn[_0x515503(0x4)] - 0x1] : x + (L - xn[xn[_0x515503(0x4)] - 0x1]);
        const left = xn['concat']();
        const leftX = left['shift']();
        const right = xn[_0x515503(0x5)]();
        const rightX = right[_0x515503(0x6)]();
        search(leftX, left, sum + leftDistance);
        search(rightX, right, sum + rightDistance);
    };
    search(0x0, xn, 0x0);
    console[_0x438791(0x7)](Math['max'][_0x438791(0x8)](null, costs));
}
main(require('fs')[a0_0x3b605e(0x9)](a0_0x3b605e(0xa), a0_0x3b605e(0xb)));