const a0_0x200d51 = a0_0x130f;
function a0_0x54fa() {
    const _0x2d795e = [
        'log',
        'map',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x54fa = function () {
        return _0x2d795e;
    };
    return a0_0x54fa();
}
function a0_0x130f(UsGcvg, key) {
    const stringArray = a0_0x54fa();
    a0_0x130f = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x130f(UsGcvg, key);
}
function main(lines) {
    const _0x17e22b = a0_0x130f;
    const [N, K] = parseNumberLine(lines[0x0]);
    const prices = parseNumberLine(lines[0x1])['sort']((a, b) => a - b);
    let total = 0x0;
    for (let i = 0x0; i < K; ++i) {
        total += prices[i];
    }
    console[_0x17e22b(0x0)](total);
}
function parseNumberLine(line, radix = 0xa) {
    const _0x41ece9 = a0_0x130f;
    return line['split'](/\s+/)[_0x41ece9(0x1)](_ => parseInt(_, radix));
}
main(require('fs')[a0_0x200d51(0x2)](a0_0x200d51(0x3), a0_0x200d51(0x4))['split']('\x0a'));