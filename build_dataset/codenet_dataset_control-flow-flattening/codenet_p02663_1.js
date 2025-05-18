const input = require("fs").readFileSync("/dev/stdin", "utf8")
let cin = input.split(/ |\n/), cid = 0
const next = () => cin[cid++]
const nexts = (n) => cin.slice(cid, cid+=n).map(i=>parseInt(i))

const [H1, M1, H2, M2, K] = nexts(5);
const time = H2 * 60 + M2 - (H1 * 60 + M1) - K
time > 0 ? console.log(time) : console.log(0)
