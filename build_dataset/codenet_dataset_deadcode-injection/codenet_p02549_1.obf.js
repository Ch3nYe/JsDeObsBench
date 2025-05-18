function a0_0x808d(jAhNMA, key) {
    const stringArray = a0_0x59e2();
    a0_0x808d = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x808d(jAhNMA, key);
}
const a0_0x5be05f = a0_0x808d;
const input = require('fs')[a0_0x5be05f(0x0)](a0_0x5be05f(0x1), a0_0x5be05f(0x2));
const lines = input[a0_0x5be05f(0x3)]('\x0a');
const [N, K] = lines[0x0][a0_0x5be05f(0x3)]('\x20')[a0_0x5be05f(0x4)](Number);
const k = [];
function a0_0x59e2() {
    const _0x176454 = [
        'readFileSync',
        '/dev/stdin',
        'utf8',
        'split',
        'map',
        'push',
        'fill',
        'length',
        'log',
        'pop'
    ];
    a0_0x59e2 = function () {
        return _0x176454;
    };
    return a0_0x59e2();
}
for (let i = 0x1; i <= K; i++) {
    const [L, R] = lines[i][a0_0x5be05f(0x3)]('\x20')[a0_0x5be05f(0x4)](Number);
    k[a0_0x5be05f(0x5)]([
        L,
        R
    ]);
}
const ksum = Array(K)[a0_0x5be05f(0x6)](0x0);
const mod = 0x3b800001;
const map = Array(N)[a0_0x5be05f(0x6)](0x0);
map[0x0] = 0x1;
for (let i = 0x1; i < map[a0_0x5be05f(0x7)]; i++) {
    let c = 0x0;
    for (let j = 0x0; j < k[a0_0x5be05f(0x7)]; j++) {
        ksum[j] = ksum[j] + (map[i - k[j][0x0]] || 0x0) - (map[i - k[j][0x1] - 0x1] || 0x0);
    }
    map[i] = ksum['reduce']((a, b) => a + b) % mod;
}
console[a0_0x5be05f(0x8)](map[a0_0x5be05f(0x9)]());