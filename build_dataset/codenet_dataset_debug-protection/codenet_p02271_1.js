(function main() {
  const lines = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
  const n1 = Number(lines.shift());
  const arr1 = lines.shift().split(' ').map(Number);
  const n2 = Number(lines.shift());
  const arr2 = lines.shift().split(' ').map(Number);

  const solve = (i, m) => {
    if (m == 0) return true;
    if (i >= n1) return false;
    return solve(i + 1, m) || solve(i + 1, m - arr1[i]);
  };

  arr2.map(m => solve(0, m) ? 'yes' : 'no').forEach(res => console.log(res));
})();

