//config = { input: 'tmp', newline: '\r\n' }; // win
config = { input: '/dev/stdin', newline: '\n' }; // linux

M = require('fs').readFileSync(config.input, 'ascii')
  .trim()
  .split(config.newline);
M = M.map(
  function (line) {
    return line.split(' ').map(Number);
  });
n = M[0][0];

min = {};
for (i = 1; i <= n; i++) min[i] = {};
for (i = 1; i <= n; i++) min[i][i] = 0;
for (i = 1; i < n; i++) {
  for (j = 1, k = 1 + i; k <= n; j++, k++) {
    min[j][k] = Number.MAX_VALUE;
    for (l = j; l < k; l++) {
      min[j][k] = Math.min(
        min[j][k],
        M[j][0] * M[l][1] * M[k][1] + min[j][l] + min[l+1][k]);
    }
  }
}
console.log(min[1][n]);