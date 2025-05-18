(function main() {
  const lines = require('fs').readFileSync('/dev/stdin', 'utf8').trim().split('\n');
  const n = Number(lines.shift());

  const adjLists = Array.from(Array(n), () => []);
  lines.forEach((l, i) => l.split(' ').splice(2).forEach(e => adjLists[i].push(e-1)));

  const d = [], f = [];
  dfs(adjLists, d, f);
  for (let i = 0; i < n; i++) {
    console.log(`${i + 1} ${d[i]} ${f[i]}`);
  }
})();

function dfs(adjLists, d, f) {
  const WHITE = 0, GRAY = 1, BLACK = 2;
  const size = adjLists.length;
  const color = Array.from(adjLists, () => WHITE);

  let time = 0;
  function visit(u) {
    color[u] = GRAY;
    d[u] = ++time;
    adjLists[u].forEach(v => {
      if (color[v] === WHITE) {
        visit(v);
      }
    });
    color[u] = BLACK;
    f[u] = ++time;
  }
  adjLists.forEach((e, u) => {
    if (color[u] === WHITE) visit(u);
  });
}

