const padLeft = (w, l, c) => ([...Array(l)].map(_ => c).join('') + w).slice(l * -1);
const split = (w, n) => (ws => ws.reduce((acc, _, i) => i % n ? acc : [...acc, ws.slice(i, i + n).join('')], []))([...w]);
const arrange = n => (x => x[0] ? [x[0] - 1, x[1] + 10000000000] : x)(split(padLeft(n, 20, '0'), 10).map(x => +x));

const solve0 = (a, b, x) => Math.floor(b / x) -  Math.floor(a / x);
const solve1 = (a, b, x) => Math.floor(b / x) - (a == 0 ? -1 : Math.floor((a - 1) / x));

const nullOrStr = n => n ? String(n) : '';

const fn2 = (a2, b2, x) => `${nullOrStr(solve0(+a2[0], b2[0], x))}${solve1(a2[1], b2[1], x)}`;
const fn1 = (a, b, x) => fn2(arrange(a), arrange(b), x);

const main = input => (fn1)(...input.split(' '));

console.log(main(require('fs').readFileSync('/dev/stdin', 'utf8')));
