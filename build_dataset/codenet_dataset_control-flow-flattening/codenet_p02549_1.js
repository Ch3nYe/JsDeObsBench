const input = require("fs").readFileSync("/dev/stdin", "utf8")

const lines = input.split('\n')
const [N, K] = lines[0].split(' ').map(Number)
const k = []

for (let i = 1; i <= K; i++) {
    const [L, R] = lines[i].split(' ').map(Number)
    k.push([L, R])
}
const ksum = Array(K).fill(0)

const mod = 998244353
const map = Array(N).fill(0)
map[0] = 1

for (let i = 1; i < map.length; i++) {
    let c = 0
    for (let j = 0; j < k.length; j++) {
        ksum[j] = ksum[j] + (map[i - k[j][0]] || 0) - (map[i - k[j][1] -1 ] || 0)
    }
    map[i] = ksum.reduce((a, b) => a + b) % mod
}

console.log(map.pop())
