'use strict';

let lines = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');

let N = +(lines[0].split(' ')[0]);
let ABs = lines.slice(1).map(line => line.split(' ').map(Number));

let res = [];
for (let i = 0; i < N; i++) res[i] = 0;

ABs.forEach(ab => {
    res[ab[0]-1]++;
    res[ab[1]-1]++;
});

res.forEach(n => console.log(n));