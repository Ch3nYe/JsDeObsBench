const a0_0x12a549 = a0_0xb7a4;
function a0_0x28b3() {
    const _0x28f774 = [
        'log',
        'fill',
        '463298GjhGjL',
        '524ekrFuU',
        '56GVwYqY',
        '20PWtKsY',
        'readFileSync',
        'length',
        '16AnBVet',
        '/dev/stdin',
        '33524lZcLFl',
        '15265foSjve',
        'map',
        '3839048snVIGC',
        'split',
        '407634LdyRqM',
        '30060gHzBza',
        '9gvNXOc',
        'reduce',
        'utf8',
        'push',
        '3906420ylgPQW'
    ];
    a0_0x28b3 = function () {
        return _0x28f774;
    };
    return a0_0x28b3();
}
(function (stringArrayFunction, comparisonValue) {
    const _0x665961 = a0_0xb7a4;
    const stringArray = stringArrayFunction();
    while (!![]) {
        try {
            const expression = parseInt(_0x665961(0x193)) / 0x1 + parseInt(_0x665961(0x191)) / 0x2 * (-parseInt(_0x665961(0x199)) / 0x3) + parseInt(_0x665961(0x18c)) / 0x4 * (-parseInt(_0x665961(0x194)) / 0x5) + parseInt(_0x665961(0x198)) / 0x6 * (parseInt(_0x665961(0x18d)) / 0x7) + -parseInt(_0x665961(0x196)) / 0x8 * (-parseInt(_0x665961(0x184)) / 0x9) + -parseInt(_0x665961(0x18e)) / 0xa * (-parseInt(_0x665961(0x18b)) / 0xb) + -parseInt(_0x665961(0x188)) / 0xc;
            if (expression === comparisonValue) {
                break;
            } else {
                stringArray['push'](stringArray['shift']());
            }
        } catch (e) {
            stringArray['push'](stringArray['shift']());
        }
    }
}(a0_0x28b3, 0x51e9b));
const input = require('fs')[a0_0x12a549(0x18f)](a0_0x12a549(0x192), a0_0x12a549(0x186));
const lines = input[a0_0x12a549(0x197)]('\x0a');
const [N, K] = lines[0x0][a0_0x12a549(0x197)]('\x20')['map'](Number);
const k = [];
for (let i = 0x1; i <= K; i++) {
    const [L, R] = lines[i][a0_0x12a549(0x197)]('\x20')[a0_0x12a549(0x195)](Number);
    k[a0_0x12a549(0x187)]([
        L,
        R
    ]);
}
const ksum = Array(K)['fill'](0x0);
function a0_0xb7a4(EaAhFn, key) {
    const stringArray = a0_0x28b3();
    a0_0xb7a4 = function (index, key) {
        index = index - 0x184;
        let value = stringArray[index];
        return value;
    };
    return a0_0xb7a4(EaAhFn, key);
}
const mod = 0x3b800001;
const map = Array(N)[a0_0x12a549(0x18a)](0x0);
map[0x0] = 0x1;
for (let i = 0x1; i < map[a0_0x12a549(0x190)]; i++) {
    let c = 0x0;
    for (let j = 0x0; j < k['length']; j++) {
        ksum[j] = ksum[j] + (map[i - k[j][0x0]] || 0x0) - (map[i - k[j][0x1] - 0x1] || 0x0);
    }
    map[i] = ksum[a0_0x12a549(0x185)]((a, b) => a + b) % mod;
}
console[a0_0x12a549(0x189)](map['pop']());