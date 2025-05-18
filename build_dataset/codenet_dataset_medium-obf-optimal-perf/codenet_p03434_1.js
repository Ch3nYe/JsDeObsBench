function main(input) {
  const args = input.split('\n');
  const N = parseInt(args[0], 10);
  const sorted = args[1].split(' ').map(v => parseInt(v)).sort((a, b) => b - a);
  var alice = 0;
  var bob = 0;
  
  sorted.forEach((v, i) => {
    if ((i + 1) % 2 == 0) {
      bob += v;
    } else {
      alice += v;
    }
  });
  console.log(alice - bob);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
