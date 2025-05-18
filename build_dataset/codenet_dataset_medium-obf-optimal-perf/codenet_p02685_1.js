const input = require("fs").readFileSync("/dev/stdin", "utf8")

function pow (x ,n) {
    let res = 1
    while (n > 0) {
        if (n & 1) res = mul(res, x)
        x = mul(x, x)
        n >>= 1
    }
    return res
}

function inv (x) {
    if (x == 1) return 1;
    return pow(x, mod - 2);
}

function mul (a, b) {
    return ((a >> 16) * b % mod * 65536 + (a & 65535) * b) % mod
}

const mod = 998244353

;(input => {
    const lines = input.split('\n')
    let [N, M, K] = lines[0].split(' ').map(Number)

    let ans = 0
    let fa = 1
    let fa2 = 1
    for (let k = 0; k <= K; k++) {
        fa = fa * (k || 1) % mod
        fa2 = fa2 * (k ? (N - k) : 1) % mod
        let left = mul(fa2, inv(fa)) % mod
        ans += mul(left, pow((M - 1), (N - (k + 1)))) * M % mod
    }

    console.log(ans % mod)
 
})(input)
