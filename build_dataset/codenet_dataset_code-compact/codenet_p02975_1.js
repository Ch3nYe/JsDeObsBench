function Main(input) {
  input = input.split('\n')
  var N = input[0]
  var a = input[1].split(' ')
  var flag = true
  a = a.map(x => parseInt(x))

  for (var i = 0; i < N - 2; i++) {
    var x = i === 0 ? N - 1 : i - 1
    if ((a[i + 1] ^ a[x]) !== a[i]) {
      flag = false
      break
    }
  }

  var str = flag === true ? 'Yes' : 'No'

  console.log('%s', str)
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'))
