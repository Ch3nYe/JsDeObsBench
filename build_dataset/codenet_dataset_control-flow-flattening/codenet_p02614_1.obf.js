const fs = require('fs');
const [h, w, k, ...m] = fs['readFileSync']('/dev/stdin', 'utf8')['split'](/\s/);
function solve(m, x = 0x0, y = 0x0, f) {
    const ktJmDH = {
        'UAUgj': function (x, y) {
            return x === y;
        },
        'sCpXo': function (x, y) {
            return x < y;
        },
        'RpmHV': function (callee, param1, param2, param3) {
            return callee(param1, param2, param3);
        },
        'QoKNW': function (x, y) {
            return x + y;
        }
    };
    if (ktJmDH['UAUgj'](m['length'], 0x0) || m[0x0]['length'] === 0x0) {
        return 0x0;
    }
    const n = m['join']('')['replace'](/\./g, '')['length'];
    let a = 0x0;
    if (n == k) {
        a++;
    }
    if (ktJmDH['sCpXo'](n, k)) {
        return a;
    }
    if (!f) {
        for (let i = y; i < m['length']; i++) {
            a += ktJmDH['RpmHV'](solve, [
                ...m['slice'](0x0, i),
                ...m['slice'](ktJmDH['QoKNW'](i, 0x1))
            ], x, i < y ? y : i);
        }
    }
    for (let i = x; ktJmDH['sCpXo'](i, m[0x0]['length']); i++) {
        a += solve(m['map'](l => l['slice'](0x0, i) + l['slice'](i + 0x1)), i < x ? x : i, y, !![]);
    }
    return a;
}
console['log'](solve(m));