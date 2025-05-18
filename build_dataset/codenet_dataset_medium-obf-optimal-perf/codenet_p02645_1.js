function main(lines) {
  const input = lines.split(' ')
  console.log(input.join().slice(0,3))
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));