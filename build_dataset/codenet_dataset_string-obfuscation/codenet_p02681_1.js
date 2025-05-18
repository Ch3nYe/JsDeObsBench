'use strict'

const Main = (input) => {
  const tmp = input.trim().split('\n')
  const S = tmp[0]
  const T = tmp[1]

  let result = 'Yes'

  const tmpStr = T.replace(S, '')

  if (T.slice(-1) === tmpStr && tmpStr.length === 1) {
    result = 'Yes'
  } else {
    result = 'No'
  }

  console.log(result)
  return result
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))