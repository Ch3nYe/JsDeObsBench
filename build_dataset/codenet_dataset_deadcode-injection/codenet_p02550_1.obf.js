const a0_0x1e338b = a0_0x5ee6;
const input = require('fs')[a0_0x1e338b(0x0)]('/dev/stdin', a0_0x1e338b(0x1));
const lines = input[a0_0x1e338b(0x2)]('\x0a');
const [N, X, M] = lines[0x0][a0_0x1e338b(0x2)]('\x20')[a0_0x1e338b(0x3)](Number);
let a = X;
function a0_0x30b7() {
    const _0x3823f1 = [
        'readFileSync',
        'utf8',
        'split',
        'map',
        'push',
        'pop',
        'length',
        'reduce',
        'floor'
    ];
    a0_0x30b7 = function () {
        return _0x3823f1;
    };
    return a0_0x30b7();
}
const map = {};
const loop = [];
const pre = [a];
for (let i = 0x1; i < N; i++) {
    a = a * a % M;
    if (map[a] === 0x2) {
        break;
    } else if (map[a]) {
        loop[a0_0x1e338b(0x4)](a);
        pre[a0_0x1e338b(0x5)]();
    } else {
        pre[a0_0x1e338b(0x4)](a);
    }
    map[a] = (map[a] || 0x0) + 0x1;
}
const suf = [];
function a0_0x5ee6(XtIgGt, key) {
    const stringArray = a0_0x30b7();
    a0_0x5ee6 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5ee6(XtIgGt, key);
}
for (let i = 0x0; i < (N - pre[a0_0x1e338b(0x6)]) % (loop[a0_0x1e338b(0x6)] || 0x1); i++) {
    suf[a0_0x1e338b(0x4)](loop[i]);
}
const sum = loop[a0_0x1e338b(0x7)]((a, b) => a + b, 0x0);
const lt = loop[a0_0x1e338b(0x6)] ? Math[a0_0x1e338b(0x8)]((N - pre['length']) / loop[a0_0x1e338b(0x6)]) : 0x0;
console['log'](pre[a0_0x1e338b(0x7)]((a, b) => a + b, 0x0) + sum * lt + suf[a0_0x1e338b(0x7)]((a, b) => a + b, 0x0));