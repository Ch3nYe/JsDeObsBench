'use strict';
const a0_0x34d6c8 = a0_0x2fc1;
(function (stringArrayFunction, comparisonValue) {
    const _0x34b66c = a0_0x2fc1;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = -parseInt(_0x34b66c(0x15d)) / 0x1 * (parseInt(_0x34b66c(0x169)) / 0x2) + -parseInt(_0x34b66c(0x15c)) / 0x3 * (parseInt(_0x34b66c(0x167)) / 0x4) + parseInt(_0x34b66c(0x164)) / 0x5 + parseInt(_0x34b66c(0x168)) / 0x6 * (-parseInt(_0x34b66c(0x162)) / 0x7) + parseInt(_0x34b66c(0x15e)) / 0x8 + -parseInt(_0x34b66c(0x166)) / 0x9 * (parseInt(_0x34b66c(0x15f)) / 0xa) + parseInt(_0x34b66c(0x161)) / 0xb;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x1a6c, 0x23068));
const input = require('fs')['readFileSync']('/dev/stdin', a0_0x34d6c8(0x16a))['trim']()[a0_0x34d6c8(0x165)]('\x0a')['map'](line => line['split']('\x20')[a0_0x34d6c8(0x160)](val => parseInt(val), 0xa));
const N = input[0x0][0x0];
const M = input[0x0][0x1];
const ans = [];
const par = [];
function a0_0x1a6c() {
    const _0x4a69cf = [
        '978968alsjwv',
        '50WneCaM',
        'map',
        '7629149uQcxju',
        '1316QfjOfg',
        'log',
        '370730gjTFlP',
        'split',
        '222165hgFujZ',
        '32yFiWlG',
        '8436dBkeTS',
        '6vKLGTj',
        'utf8',
        '42645DbfxFO',
        '81713pcecqV'
    ];
    a0_0x1a6c = function () {
        return _0x4a69cf;
    };
    return a0_0x1a6c();
}
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
function getSize(x) {
    return -par[root(x)];
}
function a0_0x2fc1(nvencl, key) {
    const stringArray = a0_0x1a6c();
    a0_0x2fc1 = function (index, key) {
        index = index - 0x15c;
        let value = stringArray[index];
        return value;
    };
    return a0_0x2fc1(nvencl, key);
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
    console[a0_0x34d6c8(0x163)](ans[i]);
}