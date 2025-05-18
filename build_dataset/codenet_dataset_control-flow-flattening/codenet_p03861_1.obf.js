const padLeft = (w, l, c) => ([...Array(l)]['map'](_ => c)['join']('') + w)['slice'](l * -0x1);
const split = (w, n) => (ws => ws['reduce']((acc, _, i) => i % n ? acc : [
    ...acc,
    ws['slice'](i, i + n)['join']('')
], []))([...w]);
const arrange = n => (x => x[0x0] ? [
    x[0x0] - 0x1,
    x[0x1] + 0x2540be400
] : x)(split(padLeft(n, 0x14, '0'), 0xa)['map'](x => +x));
const solve0 = (a, b, x) => Math['floor'](b / x) - Math['floor'](a / x);
const solve1 = (a, b, x) => Math['floor'](b / x) - (a == 0x0 ? -0x1 : Math['floor']((a - 0x1) / x));
const nullOrStr = n => n ? String(n) : '';
const fn2 = (a2, b2, x) => '' + nullOrStr(solve0(+a2[0x0], b2[0x0], x)) + solve1(a2[0x1], b2[0x1], x);
const fn1 = (a, b, x) => fn2(arrange(a), arrange(b), x);
const main = input => fn1(...input['split']('\x20'));
console['log'](main(require('fs')['readFileSync']('/dev/stdin', 'utf8')));