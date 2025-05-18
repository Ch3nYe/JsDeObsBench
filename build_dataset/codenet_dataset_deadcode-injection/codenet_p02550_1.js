const input = require("fs").readFileSync("/dev/stdin", "utf8")
const lines = input.split('\n')
const [N, X, M] = lines[0].split(' ').map(Number)

let a = X
const map = {}
const loop = []
const pre = [a]
for (let i = 1; i < N; i++) {
    a = a * a % M
    if (map[a] === 2){
        break
    } else if (map[a]) {
        loop.push(a)
        pre.pop()
    } else {
        pre.push(a)
    }
    map[a] = (map[a] || 0) + 1
}

const suf = []
for (let i = 0; i < (N - pre.length) % (loop.length || 1); i++) {
    suf.push(loop[i])
}

const sum = loop.reduce((a, b) => a + b, 0)
const lt = loop.length ? Math.floor(((N - pre.length) / loop.length)) : 0

console.log(
    pre.reduce((a, b) => a + b, 0) +
    sum * lt +
    suf.reduce((a, b) => a + b, 0)
)
