const processData = (lines) => {
  let [n, m] = lines[0].split(' ').map(x => +x)
  if (n%2 === 1) {
    let end = n - 1
    let start = 1
    while (m) {
      console.log(`${start++} ${end--}`)
      m--
    }
  } else {
    let end = n/2+1
    let start = n/2
    while (m) {
      console.log(`${start--} ${end++}`)
      m--
    }
  }
}

let i = ''
process.stdin.on('data', c => i += c)
process.stdin.on('end', () => {
  const {EOL} = require('os')
  const lines = i.split(EOL) /*your input text, split by lines*/
  processData(lines)
})
