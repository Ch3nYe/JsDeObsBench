var line; var S;
var MOD = Math.pow(10, 9) + 7;

var readline = require('readline');
var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    line = x;
});

rl.on('close', function () {
    S = line.split("");
    dp = Array(S.length + 1);
    
    for (var i = 0; i <= S.length; i++) {
        dp[i] = Array(3 + 1).fill(0);
    }

    for (var i = S.length; i >= 0; i--) {
        for (var j = 3; j >= 0; j--) {
            if (i === S.length) { dp[i][j] = (j === 3 ? 1 : 0); }
            else {
                dp[i][j] = dp[i + 1][j] * (S[i] === '?' ? 3 : 1);
                if (j < 3 && (S[i] === '?' || S[i] === "ABC"[j])) {
                    dp[i][j] += dp[i + 1][j + 1];
                }
                dp[i][j] %= MOD;
            }
        }
    }
    console.log(dp[0][0]);
});
