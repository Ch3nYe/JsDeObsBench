var MAX_VALUE = 1000;

var inputRaw = require('fs').readFileSync('/dev/stdin', 'utf8')
var rows = inputRaw.trim().split('\n');
var row1 = rows[0].split(' ').map(Number);
var N = row1[0];
var W = row1[1];
var list = rows.slice(1).map(r => r.split(' ').map(Number));
var dp = Array.from({ length: N + 1 }, _ => Array( N * MAX_VALUE + 1).fill(0));
dp[0] = Array( N * MAX_VALUE + 1).fill(Infinity)
dp[0][0] = 0;
// console.log(dp);

function solve() {

  for (var i = 0; i < N; i++) {
    for (var j = 0; j <= N * MAX_VALUE; j++) {
      if (list[i][1] <= j) {
        var a = dp[i][j - list[i][1]] + list[i][0];
        var b = dp[i][j];
        dp[i + 1][j] = Math.min(a, b);
      } else {
        dp[i + 1][j] = dp[i][j];
      }
    }
  }

  var result = 0;
  for (var i = 0; i <= N * MAX_VALUE; i++) if (dp[N][i] <= W) result = i;
  return result;
}

console.log(solve());
