function main(input) {
  const list = input.split("\n")
    .slice(1)
    .map(s => Array.from(s).sort().join(''))

  let totalCount = 0
  const map = new Map()
  for (let i = 0; i < list.length; i++) {
    if (!map.has(list[i])) {
      map.set(list[i], 1)
      continue;
    }
    totalCount += map.get(list[i])
    map.set(list[i], map.get(list[i]) + 1)
  }

  console.log(totalCount)
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));