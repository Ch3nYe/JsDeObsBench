function a0_0x419e(RrmFsf, key) {
    const stringArray = a0_0x235a();
    a0_0x419e = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x419e(RrmFsf, key);
}
function a0_0x235a() {
    const _0x2692b9 = [
        'readFileSync',
        'utf8',
        'split'
    ];
    a0_0x235a = function () {
        return _0x2692b9;
    };
    return a0_0x235a();
}
const a0_0x5b47f2 = a0_0x419e;
const [_n, ..._edges] = require('fs')[a0_0x5b47f2(0x0)]('/dev/stdin', a0_0x5b47f2(0x1))[a0_0x5b47f2(0x2)](/\n/);
const n = Number(_n);
let result = n * (n + 0x1) * (n + 0x2) / 0x6;
for (const _edge of _edges) {
    let [u, v] = _edge[a0_0x5b47f2(0x2)](/\s/)['map'](Number);
    if (u > v) {
        [u, v] = [
            v,
            u
        ];
    }
    result -= u * (n - v + 0x1);
}
console['log'](result);