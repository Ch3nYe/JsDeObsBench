const input = require('fs')['readFileSync']('/dev/stdin', 'utf8');
const lines = input['split']('\x0a');
const [N, X, M] = lines[0x0]['split']('\x20')['map'](Number);
let a = X;
const map = {};
const loop = [];
const pre = [a];
for (let i = 0x1; i < N; i++) {
    a = a * a % M;
    if (map[a] === 0x2) {
        break;
    } else if (map[a]) {
        loop['push'](a);
        pre['pop']();
    } else {
        pre['push'](a);
    }
    map[a] = (map[a] || 0x0) + 0x1;
}
const suf = [];
for (let i = 0x0; i < (N - pre['length']) % (loop['length'] || 0x1); i++) {
    suf['push'](loop[i]);
}
const sum = loop['reduce']((_0x20405b, _0x269509) => _0x20405b + _0x269509, 0x0);
const lt = loop['length'] ? Math['floor']((N - pre['length']) / loop['length']) : 0x0;
console['log'](pre['reduce']((_0x23c23e, _0x5927c1) => _0x23c23e + _0x5927c1, 0x0) + sum * lt + suf['reduce']((_0x5efefa, _0x219c64) => _0x5efefa + _0x219c64, 0x0));