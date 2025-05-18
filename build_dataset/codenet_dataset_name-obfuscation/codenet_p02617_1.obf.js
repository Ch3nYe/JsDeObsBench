const [_n, ..._edges] = require('fs')['readFileSync']('/dev/stdin', 'utf8')['split'](/\n/);
const n = Number(_n);
let result = n * (n + 0x1) * (n + 0x2) / 0x6;
for (const _edge of _edges) {
    let [u, v] = _edge['split'](/\s/)['map'](Number);
    if (u > v) {
        [u, v] = [
            v,
            u
        ];
    }
    result -= u * (n - v + 0x1);
}
console['log'](result);