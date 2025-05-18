'use strict'

function main(input) {
  const tmp = input
    .trim()
    .split('\n')
    .map(v => v.split(' ').map(v => parseFloat(v)))
  const n = tmp[0][0]
  const q = tmp[0][1]
  const edges = tmp.slice(1, n)
  const actions = tmp.slice(n, n + q)

  const nodes = [...new Array(n + 1)].map(v => [])
  for (let i = 0; i < n - 1; i++) {
    const p = edges[i][0]
    nodes[p].push(edges[i][1])
  }

  const ans = [...new Array(n + 1)].map(v => 0)
  // actions.forEach((act, i, self) => {
  for (let i = 0; i < q; i++) {
    const act = actions[i]
    const cnt = act[1]
    ans[act[0]] += cnt
    let stack = [...nodes[act[0]]]

    while (stack.length > 0) {
      const t = stack.pop()
      ans[t] += cnt
      // stack = [...stack, ...nodes[t]]
      stack = stack.concat(nodes[t])
    }
  }
  console.log(ans.slice(1).join(' '))
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))
