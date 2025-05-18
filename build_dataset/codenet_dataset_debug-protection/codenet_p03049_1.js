'use strict';

function counter(str,seq) {
    return str.split(seq).length - 1;
}

function main(stdin) {
  const input = stdin.split('\n');
  input.shift();

  let ans = 0;
  let startsB = 0;
  let endsA = 0;
  let startsBandEndsA = 0;

  input.forEach(s => {
    ans += counter(s, 'AB');

    if (s.charAt(0) === 'B') {
      if (s.charAt(s.length - 1) === 'A') {
        ++startsBandEndsA;
      } else {
        ++startsB;
      }
    } else if (s.charAt(s.length - 1) === 'A') {
      ++endsA;
    }
  });

  const smaller = Math.min(startsB, endsA);
  const bigger = Math.max(startsB, endsA);
  const shortage = bigger - smaller;
  let extra = Math.max(0, startsBandEndsA - shortage);
  if (shortage === 0 && extra !== 0) --extra;
  

  ans += smaller;
  ans += Math.min(shortage, startsBandEndsA);
  ans += extra;

  console.log(ans);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));
