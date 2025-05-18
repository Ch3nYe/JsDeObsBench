"use strict"

const main = (input) => {
  const lines = input.split("\n")
  if (lines[0].length === 1) {
    console.log(lines[0])
    return
  }
  const len9 = lines[0].length - 1
  const head = parseInt(lines[0][0]) - 1
  console.log(head + len9 * 9)
}

main (require('fs').readFileSync('/dev/stdin', 'utf8'))