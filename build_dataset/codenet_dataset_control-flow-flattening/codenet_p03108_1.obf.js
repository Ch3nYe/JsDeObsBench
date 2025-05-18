'use strict';
const input = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a')['map'](line => line['split']('\x20')['map'](val => parseInt(val), 0xa));
const N = input[0x0][0x0];
const M = input[0x0][0x1];
const ans = [];
const par = [];
for (let i = 0x1; i <= N; i++) {
    par[i] = -0x1;
}
function root(x) {
    const oCRhyB = {
        'DYrgH': function (callee, param1) {
            return callee(param1);
        }
    };
    if (par[x] < 0x0) {
        return x;
    }
    return par[x] = oCRhyB['DYrgH'](root, par[x]);
}
function unite(x, y) {
    const HzNQyr = {
        'PtKrx': function (callee, param1) {
            return callee(param1);
        },
        'jSbbA': function (x, y) {
            return x === y;
        }
    };
    const rx = HzNQyr['PtKrx'](root, x);
    const ry = root(y);
    if (HzNQyr['jSbbA'](rx, ry)) {
        return;
    }
    par[ry] += par[rx];
    par[rx] = ry;
}
function isSame(x, y) {
    const dZGOQO = {
        'Gywaw': function (x, y) {
            return x === y;
        },
        'gvfpY': function (callee, param1) {
            return callee(param1);
        }
    };
    return dZGOQO['Gywaw'](root(x), dZGOQO['gvfpY'](root, y));
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
    console['log'](ans[i]);
}