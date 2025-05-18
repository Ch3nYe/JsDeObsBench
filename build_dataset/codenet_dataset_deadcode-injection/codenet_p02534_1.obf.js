function a0_0x1754(KkpRWf, key) {
    const stringArray = a0_0x1c2e();
    a0_0x1754 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1754(KkpRWf, key);
}
const a0_0x496b72 = a0_0x1754;
const input = require('fs')[a0_0x496b72(0x0)](a0_0x496b72(0x1), a0_0x496b72(0x2));
function a0_0x1c2e() {
    const _0x40d2bb = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'ACL',
        'log'
    ];
    a0_0x1c2e = function () {
        return _0x40d2bb;
    };
    return a0_0x1c2e();
}
const lines = input[a0_0x496b72(0x3)]('\x0a');
let K = lines[0x0]['trim']() - 0x0;
let ans = '';
for (let i = 0x0; i < K; i++) {
    ans += a0_0x496b72(0x4);
}
console[a0_0x496b72(0x5)](ans);