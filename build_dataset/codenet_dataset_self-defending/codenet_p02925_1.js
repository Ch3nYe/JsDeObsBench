'use strict';

function main(stdin) {
  const input = stdin.split('\n');
  const N = Number(input.shift());
  const params = input.map(p => p.split(' ').map(v => parseInt(v, 10)));
  
  console.log(solve(params));
}

function solve(params) {
  const l = params.length;

  function matching() {
    let matched = false;

    for (let i = 0; i < l; ++i) {
      const op = params[i][cur[i]] - 1;
      if (isNaN(op)) continue;
      if (params[op][cur[op]] - 1 === i) {
        matched = true;
        ++cur[i];
        ++cur[op];
      }
    }

    return matched;
  }

  function isNotCompleted() {
    return cur.some(v => v < l - 1);
  }

  const cur = [];
  for (let i = 0; i < l; ++i) {
    cur[i] = 0;
  }

  let day = 1;
  while (isNotCompleted()) {
    const res = matching();
    if (res === false) return -1;
    ++day;
  }

  return day;
}

main(require('fs').readFileSync('/dev/stdin', 'utf8').trim());