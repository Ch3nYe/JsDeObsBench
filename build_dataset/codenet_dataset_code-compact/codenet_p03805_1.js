function main(lines) {
  const [N, M] = na();
  
  // 頂点情報構築
  const nodes = Array(N+1).fill(0).map(() => new Set());
  for (let i = 1; i <= M; i++) {
    const [a, b] = na();
    nodes[a].add(b);
    nodes[b].add(a);
  }

  // ルート探索
  let ans = 0;
  searchRoute(nodes[1], [1]);

  // 探索再帰関数
  function searchRoute(node, passed) {
    if (passed.length == N) return ++ans;
    for (let n of node) {
      if (passed.includes(n)) continue;
      searchRoute(nodes[n], passed.concat(n));
    }
  }
  
  return ans;
}


const lines = require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n");

let lineCount = 0;
const s = () => lines[lineCount++];
const n = () => Number(s());
const b = () => BigInt(s());
const sa = () => s().split(' ');
const na = () => sa().map(Number);
const ba = () => sa().map(BigInt);

const ans = main(lines);
console.log( ans );