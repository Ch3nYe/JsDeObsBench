'use strict';
const input = require('fs')['readFileSync']('/dev/stdin', 'utf8')['trim']()['split']('\x0a')['map'](_0x36e2f7 => _0x36e2f7['split']('\x20')['map'](_0x1e0d18 => parseInt(_0x1e0d18), 0xa));
const N = input[0x0][0x0];
const M = input[0x0][0x1];
const ans = [];
const par = [];
for (let i = 0x1; i <= N; i++) {
    par[i] = -0x1;
}
function root(_0x420c3c) {
    if (par[_0x420c3c] < 0x0) {
        return _0x420c3c;
    }
    return par[_0x420c3c] = root(par[_0x420c3c]);
}
function unite(_0x20c2f1, _0x134c59) {
    const _0x423b9e = root(_0x20c2f1);
    const _0x5bcf1c = root(_0x134c59);
    if (_0x423b9e === _0x5bcf1c) {
        return;
    }
    par[_0x5bcf1c] += par[_0x423b9e];
    par[_0x423b9e] = _0x5bcf1c;
}
function isSame(_0x16bbeb, _0x35e963) {
    return root(_0x16bbeb) === root(_0x35e963);
}
function getSize(_0x57691a) {
    return -par[root(_0x57691a)];
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