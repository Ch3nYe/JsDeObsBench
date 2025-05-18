const a0_0xe24062 = a0_0x5a01;
const input = require('fs')['readFileSync'](a0_0xe24062(0x0), 'utf8');
const list = input[a0_0xe24062(0x1)]()[a0_0xe24062(0x2)]('\x0a');
let [n, m] = list[0x0][a0_0xe24062(0x2)]('\x20');
n = Number(n);
m = Number(m);
function a0_0x5a01(QMOYuN, key) {
    const stringArray = a0_0x41de();
    a0_0x5a01 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x5a01(QMOYuN, key);
}
function a0_0x41de() {
    const _0x4ddfb7 = [
        '/dev/stdin',
        'trim',
        'split',
        'set',
        'has',
        'get',
        'min',
        'log'
    ];
    a0_0x41de = function () {
        return _0x4ddfb7;
    };
    return a0_0x41de();
}
let cm = list[0x1]['trim']()[a0_0xe24062(0x2)]('\x20');
cm = cm['map'](c => Number(c));
const dp = new Map();
for (let i = 0x0; i < m; i++) {
    dp[a0_0xe24062(0x3)](cm[i], 0x1);
}
const max = n + 0x1;
for (let i = 0x0; i <= n; i++) {
    if (dp[a0_0xe24062(0x4)](i)) {
        continue;
    }
    let min = max;
    for (let j = 0x0; j < m; j++) {
        const target = i - cm[j];
        if (target < 0x0 || !dp['has'](target)) {
            continue;
        }
        const count = dp[a0_0xe24062(0x5)](target);
        min = Math[a0_0xe24062(0x6)](count, min);
    }
    if (min < max) {
        dp['set'](i, min + 0x1);
    }
}
console[a0_0xe24062(0x7)](dp[a0_0xe24062(0x5)](n));