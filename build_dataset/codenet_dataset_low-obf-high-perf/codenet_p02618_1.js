'use strict'

function main(input) {
  const inputRows = input.split('\n');
  const d = parseInt(inputRows[0])
  let cStrArray = inputRows[1].split(' ')
  const c = cStrArray.map(str => parseInt(str))
  let s = []
  for (let i = 2; i < inputRows.length; i++) {
    s.push([])
    const tmpRow = inputRows[i].split(' ')
    for (let j = 0; j < tmpRow.length; j++) {
      s[i - 2].push(parseInt(tmpRow[j]))
    }
  }

  let t = []

  for (let i = 0; i < s.length; i++) {
    let tmpMax = s[i][0]
    let index = 0
    for (let j = 1; j < s[i].length; j++) {
      if (s[i][j] > tmpMax) {
        index = j
        tmpMax = s[i][j]
      }
    }
    t.push(index + 1)
  }


  // output
  for (let i = 0; i < t.length; i++) {
    console.log(t[i])
  }
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));

main(input)