const input = require("fs").readFileSync("/dev/stdin", "utf8")

const lines = input.split('\n')
let K = lines[0].trim() - 0

let ans = ''

for (let i = 0; i < K; i++) {
    ans += 'ACL'
}

console.log(ans)
