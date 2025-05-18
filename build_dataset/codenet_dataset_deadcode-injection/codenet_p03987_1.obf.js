'use strict';
const a0_0x5643c1 = a0_0x31ff;
const lines = require('fs')[a0_0x5643c1(0x0)](a0_0x5643c1(0x1), 'utf8')[a0_0x5643c1(0x2)]()['split']('\x0a');
const N = +lines[0x0];
const A = lines[0x1][a0_0x5643c1(0x3)]('\x20');
let indices = [];
for (let i = 0x0; i < N; i++) {
    A[i] = +A[i];
    indices[indices['length']] = i;
}
indices = indices[a0_0x5643c1(0x4)]((a, b) => A[a] - A[b]);
let sum = 0x0, que = [[
            0x0,
            N - 0x1,
            0x0
        ]];
while (que[a0_0x5643c1(0x5)] > 0x0) {
    let lri = que[a0_0x5643c1(0x6)](), left = lri[0x0], right = lri[0x1], index = lri[0x2];
    if (left > right)
        continue;
    let i = index;
    while (indices[i] < left || indices[i] > right)
        i++;
    let ind = indices[i];
    sum += A[ind] * (ind - left + 0x1) * (right - ind + 0x1);
    if (left <= ind - 0x1)
        que[que[a0_0x5643c1(0x5)]] = [
            left,
            ind - 0x1,
            i + 0x1
        ];
    if (ind + 0x1 <= right)
        que[que[a0_0x5643c1(0x5)]] = [
            ind + 0x1,
            right,
            i + 0x1
        ];
}
function a0_0x31ff(VegNqx, key) {
    const stringArray = a0_0x298b();
    a0_0x31ff = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x31ff(VegNqx, key);
}
console['log'](sum);
function a0_0x298b() {
    const _0x77c811 = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'split',
        'sort',
        'length',
        'shift'
    ];
    a0_0x298b = function () {
        return _0x77c811;
    };
    return a0_0x298b();
}