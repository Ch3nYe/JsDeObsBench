'use strict';
function a0_0x346f(fAzvUp, key) {
    const stringArray = a0_0x3d92();
    a0_0x346f = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x346f(fAzvUp, key);
}
function a0_0x3d92() {
    const _0xf8aeab = [
        'trim',
        'map',
        'split',
        'slice',
        'push',
        'pop',
        'concat',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x3d92 = function () {
        return _0xf8aeab;
    };
    return a0_0x3d92();
}
const a0_0x535cb0 = a0_0x346f;
function main(input) {
    const _0x1f6e31 = a0_0x346f;
    const tmp = input[_0x1f6e31(0x0)]()['split']('\x0a')[_0x1f6e31(0x1)](v => v[_0x1f6e31(0x2)]('\x20')[_0x1f6e31(0x1)](v => parseFloat(v)));
    const n = tmp[0x0][0x0];
    const q = tmp[0x0][0x1];
    const edges = tmp[_0x1f6e31(0x3)](0x1, n);
    const actions = tmp[_0x1f6e31(0x3)](n, n + q);
    const nodes = [...new Array(n + 0x1)]['map'](v => []);
    for (let i = 0x0; i < n - 0x1; i++) {
        const p = edges[i][0x0];
        nodes[p][_0x1f6e31(0x4)](edges[i][0x1]);
    }
    const ans = [...new Array(n + 0x1)][_0x1f6e31(0x1)](v => 0x0);
    for (let i = 0x0; i < q; i++) {
        const act = actions[i];
        const cnt = act[0x1];
        ans[act[0x0]] += cnt;
        let stack = [...nodes[act[0x0]]];
        while (stack['length'] > 0x0) {
            const t = stack[_0x1f6e31(0x5)]();
            ans[t] += cnt;
            stack = stack[_0x1f6e31(0x6)](nodes[t]);
        }
    }
    console['log'](ans[_0x1f6e31(0x3)](0x1)['join']('\x20'));
}
main(require('fs')[a0_0x535cb0(0x7)](a0_0x535cb0(0x8), a0_0x535cb0(0x9)));