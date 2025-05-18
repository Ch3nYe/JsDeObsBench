const Main = (input) => {
  const tmp = input.split(' ')
  var a = parseInt(tmp[0])
  var b = parseInt(tmp[1])
  var c = parseInt(tmp[2])
  if (((a === b) && (b !== c)) || ((b === c) && (c !== a)) || ((c === a) && (b !== c))) {
    console.log('Yes')
  } else {
    console.log('No')
  }
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
