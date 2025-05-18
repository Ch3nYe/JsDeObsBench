const Main = (input) => {
  const tmp = input.trim().split('\n')
  const employees = parseInt(tmp[0])
  const subordinateArray = tmp[1].split(' ')

  const subordinateCount = {}

  const distinctSubordinate = subordinateArray.filter(
    (x, i, self) => self.indexOf(x) === i
  )

  subordinateArray.forEach((elem) => {
    subordinateCount[elem] = subordinateCount[elem]
      ? subordinateCount[elem] + 1
      : 1
  })

  let result = []
  distinctSubordinate.forEach((elem) => {
    return result.push(subordinateCount[elem])
  })

  const zeroCount = employees - distinctSubordinate.length

  if (zeroCount > 0) {
    for (let index = 0; index < zeroCount; index++) {
      result.push(0)
    }
  }

  result = result.join('\n')

  console.log(result)
  return result
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
