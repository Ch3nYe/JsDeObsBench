var lines = [];

var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.on('line', function (x) {
    lines.push(x);
});

rl.on('close', function () {
    var N = Number(lines[0].split(" ")[0]);
    var K = Number(lines[0].split(" ")[1]);

    // a + b = K * m
    // b + c = K * n
    // c + a = K * l

    // 2b = K(m + n - l)
    // よって,2a, 2b, 2cはKの倍数である必要がある

    var ans = 0;
    for (var i = 1; i <= K; i++) {
        if (i * 2 % K === 0) {
            // i + K * m <= (N - i) / K
            if (1 <= Math.floor((N - i) / K)) { ans += Math.pow(Math.floor(((N - i) / K)) + 1, 3) }
            else { ans++; }

        }
    }

    console.log(ans);

});