const input = require("fs").readFileSync("/dev/stdin", "utf8")

;(input => {

    const lines = input.split('\n')
    const N = lines[0] - 0
    const X = lines[1]

    const popcount = n => {
        let count = 0
        do {
            n & 1 ? count++ : count
        } while  (n = n >>> 1)
        return count
    }

    const f = n => {
        if (n === 0) {
            return 0
        }
        let count = 1
        while (n %= popcount(n)) count++
        return count
    }

    const x = parseInt(X, 2)
    const pr = popcount(x) - 1
    const nx = popcount(x) + 1
    for (let i = 0; i < N; i++) {
        let n = x ^ Math.pow(2, N - i - 1)
        if (n === 0) {
            console.log(0)
        } else {
            console.log(f(n % (X[i] === '1' ? pr : nx)) + 1)
        }
    }

})(input)
