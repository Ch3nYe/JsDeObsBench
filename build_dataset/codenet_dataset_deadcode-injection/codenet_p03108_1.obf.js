'use strict';
function a0_0x4b5d() {
    const _0xb84731 = [
        'readFileSync',
        '/dev/stdin',
        'trim',
        'split',
        'map',
        'log'
    ];
    a0_0x4b5d = function () {
        return _0xb84731;
    };
    return a0_0x4b5d();
}
const a0_0x48636b = a0_0x52e3;
const input = require('fs')[a0_0x48636b(0x0)](a0_0x48636b(0x1), 'utf8')[a0_0x48636b(0x2)]()[a0_0x48636b(0x3)]('\x0a')[a0_0x48636b(0x4)](line => line[a0_0x48636b(0x3)]('\x20')[a0_0x48636b(0x4)](val => parseInt(val), 0xa));
const N = input[0x0][0x0];
const M = input[0x0][0x1];
const ans = [];
const par = [];
for (let i = 0x1; i <= N; i++) {
    par[i] = -0x1;
}
function root(x) {
    if (par[x] < 0x0) {
        return x;
    }
    return par[x] = root(par[x]);
}
function unite(x, y) {
    const rx = root(x);
    const ry = root(y);
    if (rx === ry) {
        return;
    }
    par[ry] += par[rx];
    par[rx] = ry;
}
function isSame(x, y) {
    return root(x) === root(y);
}
function a0_0x52e3(OcbzlT, key) {
    const stringArray = a0_0x4b5d();
    a0_0x52e3 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x52e3(OcbzlT, key);
}
function getSize(x) {
    return -par[root(x)];
}
ans[M] = N * (N - 0x1) / 0x2;
for (let i = M; i > 0x1; i--) {
    const x = input[i][0x0];
    const y = input[i][0x1];
    if (isSame(x, y)) {
        ans[i - 0x1] = ans[i];
        continue;
    }
    ans[i - 0x1] = ans[i] - getSize(x) * getSize(y);
    unite(x, y);
}
for (let i = 0x1; i <= M; i++) {
    console[a0_0x48636b(0x5)](ans[i]);
}