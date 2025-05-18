const input = require("fs").readFileSync("/dev/stdin", "utf8")
const lines = input.split('\n')
let [X, K, D] = lines[0].split(' ').map(Number)

X = Math.abs(X)
const div = Math.min(Math.floor(X / D), K)
let x = X - div * D
let k = K - div
for (let i = 0; i < k; i++) {
    x -= D
    if (x <= 0) {
        if (!((k - i) % 2)) {
            x += D
        }
        break
    }
}
console.log(Math.abs(x))