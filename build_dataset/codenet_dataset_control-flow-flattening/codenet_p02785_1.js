'use strict';

function main(input) {
  const args = input.split('\n'),
        K = parseInt(args[0].split(' ')[1]),
        H = args[1].split(' ');
  var ans = H.sort().splice(0, H.length-K).reduce((a, x) => a + parseInt(x), 0);
  console.log(ans);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
