function a0_0x2c60() {
    const _0x5bd1f4 = [
        'fill',
        'map',
        'add',
        'includes',
        'concat',
        'readFileSync',
        'utf8',
        'trim',
        'split',
        'log'
    ];
    a0_0x2c60 = function () {
        return _0x5bd1f4;
    };
    return a0_0x2c60();
}
function a0_0x3bd3(PfhBUH, key) {
    const stringArray = a0_0x2c60();
    a0_0x3bd3 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x3bd3(PfhBUH, key);
}
const a0_0x5d63ac = a0_0x3bd3;
function main(lines) {
    const _0x48b0cf = a0_0x3bd3;
    const [N, M] = na();
    const nodes = Array(N + 0x1)[_0x48b0cf(0x0)](0x0)[_0x48b0cf(0x1)](() => new Set());
    for (let i = 0x1; i <= M; i++) {
        const [a, b] = na();
        nodes[a][_0x48b0cf(0x2)](b);
        nodes[b][_0x48b0cf(0x2)](a);
    }
    let ans = 0x0;
    searchRoute(nodes[0x1], [0x1]);
    function searchRoute(node, passed) {
        const _0x184705 = a0_0x3bd3;
        if (passed['length'] == N)
            return ++ans;
        for (let n of node) {
            if (passed[_0x184705(0x3)](n))
                continue;
            searchRoute(nodes[n], passed[_0x184705(0x4)](n));
        }
    }
    return ans;
}
const lines = require('fs')[a0_0x5d63ac(0x5)]('/dev/stdin', a0_0x5d63ac(0x6))[a0_0x5d63ac(0x7)]()[a0_0x5d63ac(0x8)]('\x0a');
let lineCount = 0x0;
const s = () => lines[lineCount++];
const n = () => Number(s());
const b = () => BigInt(s());
const sa = () => s()[a0_0x5d63ac(0x8)]('\x20');
const na = () => sa()[a0_0x5d63ac(0x1)](Number);
const ba = () => sa()['map'](BigInt);
const ans = main(lines);
console[a0_0x5d63ac(0x9)](ans);