'use strict';

function main(stdin) {
  const input = stdin.split('\n');
  const N = input.shift().split(' ').map(v => parseInt(v, 10))[0];
  const gates = input.map(g => g.split(' ').map(v => parseInt(v, 10)));
  const cards = new Array(N).fill(true);

  gates.forEach(g => {
    for (let i = 0; i < g[0] - 1; ++i) {
      cards[i] = false;
    }

    for (let i = g[1]; i < N; ++i) {
      cards[i] = false;
    }
  });

  console.log(cards.filter(c => c).length);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));