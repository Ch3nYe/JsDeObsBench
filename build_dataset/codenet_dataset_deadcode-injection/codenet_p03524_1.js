function main(input) {
  const s = input.trim()

  let array = s.split('').reduce((a, c) => {
    a[c.charCodeAt() - 'a'.charCodeAt()]++
    return a
  }, [0, 0, 0])

  if (Math.max(...array) - Math.min(...array) >= 2) {
    console.log('NO')
  } else {
    console.log('YES')
  }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'))
