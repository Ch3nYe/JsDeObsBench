function a0_0x26e6(QAJDbt, key) {
    const stringArray = a0_0x2404();
    a0_0x26e6 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x26e6(QAJDbt, key);
}
const a0_0x439045 = a0_0x26e6;
function a0_0x2404() {
    const _0x4a01f6 = [
        'readFileSync',
        'utf8',
        'split',
        'length',
        'XdKSj',
        'join',
        'replace',
        'opIbM',
        'slice',
        'vxMHW',
        'map',
        'log'
    ];
    a0_0x2404 = function () {
        return _0x4a01f6;
    };
    return a0_0x2404();
}
const fs = require('fs');
const [h, w, k, ...m] = fs[a0_0x439045(0x0)]('/dev/stdin', a0_0x439045(0x1))[a0_0x439045(0x2)](/\s/);
function solve(m, x = 0x0, y = 0x0, f) {
    const _0x4a17b5 = a0_0x26e6;
    if (m[_0x4a17b5(0x3)] === 0x0 || m[0x0][_0x4a17b5(0x3)] === 0x0) {
        if ('XdKSj' !== _0x4a17b5(0x4)) {
            a++;
        } else {
            return 0x0;
        }
    }
    const n = m[_0x4a17b5(0x5)]('')[_0x4a17b5(0x6)](/\./g, '')['length'];
    let a = 0x0;
    if (n == k) {
        if (_0x4a17b5(0x7) !== _0x4a17b5(0x7)) {
            return a;
        } else {
            a++;
        }
    }
    if (n < k) {
        return a;
    }
    if (!f) {
        for (let i = y; i < m[_0x4a17b5(0x3)]; i++) {
            a += solve([
                ...m[_0x4a17b5(0x8)](0x0, i),
                ...m['slice'](i + 0x1)
            ], x, i < y ? y : i);
        }
    }
    for (let i = x; i < m[0x0]['length']; i++) {
        if (_0x4a17b5(0x9) === _0x4a17b5(0x9)) {
            a += solve(m[_0x4a17b5(0xa)](l => l['slice'](0x0, i) + l['slice'](i + 0x1)), i < x ? x : i, y, !![]);
        } else {
            return 0x0;
        }
    }
    return a;
}
console[a0_0x439045(0xb)](solve(m));