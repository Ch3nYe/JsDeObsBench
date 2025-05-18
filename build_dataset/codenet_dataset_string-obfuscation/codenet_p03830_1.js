function main(input) {
    var n = parseInt(input);

    var map = {};
    for (var i = 2; i <= n; i++) {
        var t = i;
        for (var j = 2; j * j <= t; j++) {
            if (t % j == 0) {
                var cnt = 0;
                while (t % j == 0) {
                    cnt++;
                    t /= j;
                }
                if (map[j]) {
                    map[j] = map[j] + cnt;
                } else {
                    map[j] = cnt;
                }
            }
        }
        if (t != 1) {
            if (map[t]) {
                map[t]++;
            } else {
                map[t] = 1;
            }
        }
    }

    var ans = 1;
    var mod = 1000000007;
    for (var x in map) {
        ans = (ans * (map[x] + 1)) % mod;
    }

    console.log(ans);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));