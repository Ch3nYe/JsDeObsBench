'use strict';
const lines = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a');
const N = +lines[0x0];
const A = lines[0x1]['split']('\x20');
let indices = [];
for (let i = 0x0; i < N; i++) {
    A[i] = +A[i];
    indices[indices['length']] = i;
}
indices = indices['sort']((a, b) => A[a] - A[b]);
let sum = 0x0, que = [[
            0x0,
            N - 0x1,
            0x0
        ]];
while (que['length'] > 0x0) {
    let lri = que['shift'](), left = lri[0x0], right = lri[0x1], index = lri[0x2];
    if (left > right)
        continue;
    let i = index;
    while (indices[i] < left || indices[i] > right)
        i++;
    let ind = indices[i];
    sum += A[ind] * (ind - left + 0x1) * (right - ind + 0x1);
    if (left <= ind - 0x1)
        que[que['length']] = [
            left,
            ind - 0x1,
            i + 0x1
        ];
    if (ind + 0x1 <= right)
        que[que['length']] = [
            ind + 0x1,
            right,
            i + 0x1
        ];
}
console['log'](sum);