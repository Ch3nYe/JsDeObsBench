function a0_0x1511(IvGTLZ, key) {
    const stringArray = a0_0x52b8();
    a0_0x1511 = function (index, key) {
        index = index - 0x0;
        let value = stringArray[index];
        return value;
    };
    return a0_0x1511(IvGTLZ, key);
}
const a0_0xf6747f = a0_0x1511;
const padLeft = (w, l, c) => ([...Array(l)][a0_0xf6747f(0x0)](_ => c)['join']('') + w)[a0_0xf6747f(0x1)](l * -0x1);
const split = (w, n) => (ws => ws[a0_0xf6747f(0x2)]((acc, _, i) => i % n ? acc : [
    ...acc,
    ws[a0_0xf6747f(0x1)](i, i + n)[a0_0xf6747f(0x3)]('')
], []))([...w]);
const arrange = n => (x => x[0x0] ? [
    x[0x0] - 0x1,
    x[0x1] + 0x2540be400
] : x)(split(padLeft(n, 0x14, '0'), 0xa)[a0_0xf6747f(0x0)](x => +x));
const solve0 = (a, b, x) => Math[a0_0xf6747f(0x4)](b / x) - Math[a0_0xf6747f(0x4)](a / x);
const solve1 = (a, b, x) => Math[a0_0xf6747f(0x4)](b / x) - (a == 0x0 ? -0x1 : Math[a0_0xf6747f(0x4)]((a - 0x1) / x));
const nullOrStr = n => n ? String(n) : '';
function a0_0x52b8() {
    const _0x3520d7 = [
        'map',
        'slice',
        'reduce',
        'join',
        'floor',
        'split',
        'log',
        'readFileSync',
        '/dev/stdin',
        'utf8'
    ];
    a0_0x52b8 = function () {
        return _0x3520d7;
    };
    return a0_0x52b8();
}
const fn2 = (a2, b2, x) => '' + nullOrStr(solve0(+a2[0x0], b2[0x0], x)) + solve1(a2[0x1], b2[0x1], x);
const fn1 = (a, b, x) => fn2(arrange(a), arrange(b), x);
const main = input => fn1(...input[a0_0xf6747f(0x5)]('\x20'));
console[a0_0xf6747f(0x6)](main(require('fs')[a0_0xf6747f(0x7)](a0_0xf6747f(0x8), a0_0xf6747f(0x9))));