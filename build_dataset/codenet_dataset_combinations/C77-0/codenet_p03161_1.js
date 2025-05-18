function Main(input) {
  input = input.split("\n");
  const [N,K] = input[0].split(' ').map((n) => {
    return parseInt(n, 10);
  });
  const hn = input[1].split(' ').map((n) => {
    return parseInt(n, 10);
  });
  const h_max = Math.pow(10,9);
  console.log(dp(N,K,hn,h_max));
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

function dp(N,K,hn,h_max) {
  const dp = [];
  let dp_work = [];
  dp[0] = 0;
  for (var i = 1; i < N; i++) {
    dp.push(h_max);
    dp_work = [];
    dp_work.push(dp[i]);
    for (var dp_work_i = 1; dp_work_i <= K; dp_work_i++) {
      if (i-dp_work_i < 0) continue;
      dp_work.push(dp[i-dp_work_i] + Math.abs(hn[i-dp_work_i] - hn[i]));
    }
    dp[i] = Math.min(...dp_work);
  }
  return dp[N-1];
}
