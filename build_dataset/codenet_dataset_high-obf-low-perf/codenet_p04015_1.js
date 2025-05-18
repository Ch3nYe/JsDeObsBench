function main(input) {
  input = input.split('\n');
  var tmp = input[0].split(' ');

  var N = Number(tmp[0]);
  var A = Number(tmp[1]);

  var x = [0];
  x = x.concat(input[1].split(' ').map(Number));

  var dp = new Array(N + 1);
  for (var i = 0; i <= N; ++i) {
    dp[i] = new Array(N + 1);
    for (var j = 0; j <= N; ++j) {
      dp[i][j] = new Array(A * N + 1).fill(0);
    }
  }

  for (var i = 0; i < N; ++i) dp[i][0][0] = 1;

  for (var i = 1; i <= N; ++i) {
    for (var j = 1; j <= i; ++j) {
      for (var k = 1; k <= A * N; ++k) {
        if (k < x[i]) {
          dp[i][j][k] = dp[i - 1][j][k];
        } else {
          dp[i][j][k] = dp[i - 1][j][k] + dp[i - 1][j - 1][k - x[i]];
        }
      }
    }
  }

  var ans = 0;
  for (var j = 1; j <= N; ++j) {
    ans += dp[N][j][j * A];
  }

  console.log(ans);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
