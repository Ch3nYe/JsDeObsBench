const fs = require('fs');
const [h, w, k, ...m] = fs.readFileSync('/dev/stdin', 'utf8').split(/\s/);

function solve(m, x=0, y=0, f) {
  if (m.length === 0 || m[0].length === 0) {
    return 0;
  }
  const n = m.join('').replace(/\./g, '').length;
  let a = 0;
  if (n == k) {
    a++;
  }
  if (n < k) {
	  return a;
  }
  if (!f) {
    for (let i = y; i < m.length; i++) {
      a += solve([...m.slice(0, i), ...m.slice(i + 1)], x, i < y ? y : i);
    }
  }
  for (let i = x; i < m[0].length; i++) {
    a += solve(m.map(l => l.slice(0, i) + l.slice(i + 1)), i < x ? x : i, y, true);
  }
  return a;
}

console.log(solve(m));