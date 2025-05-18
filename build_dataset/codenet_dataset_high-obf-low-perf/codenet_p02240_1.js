//config = { input: 'tmp', newline: '\r\n' }; // win
config = { input: '/dev/stdin', newline: '\n' }; // linux

line = require('fs').readFileSync(config.input, 'ascii')
  .trim()
  .split(config.newline)
  .map(function (line) { return line.split(' ').map(Number); });

n = line[0][0];
m = line[0][1];
q = line[m+1][0];

adj = new Array(n);
for (i = 0; i < n; i++) adj[i] = null;

conn = line.slice(1, m+1);
conn.sort(function (a, b) {
  if (a[0] === b[0]) return a[1] - b[1];
  return a[0] - b[0];
});

for (i in conn) {
  min0 = id0 = conn[i][0];
  min1 = id1 = conn[i][1];
  while (adj[min0] !== null) min0 = adj[min0];
  while (adj[min1] !== null) min1 = adj[min1];
  min = Math.min(min0, min1);
  if (id0 !== min) adj[id0] = min;
  if (id1 !== min) adj[id1] = min;
}

q = line.slice(m+2, m+2+q);
for (i in q) {
  min0 = q[i][0];
  min1 = q[i][1];
  while (adj[min0] !== null) min0 = adj[min0];
  while (adj[min1] !== null) min1 = adj[min1];
  console.log((min0 === min1) ? 'yes' : 'no');
}