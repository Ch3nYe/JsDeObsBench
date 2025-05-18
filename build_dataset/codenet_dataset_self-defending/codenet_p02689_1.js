'use strict';

const inputs = require('fs').readFileSync('/dev/stdin', 'utf8').split('\n');
inputs.shift();

const heights = inputs.shift().split(' ').map(v => parseInt(v, 10));
const towers = new Array(heights.length).fill().map(_ => new Array());

inputs.forEach(v => {
  const splited = v.split(' ').map(w => parseInt(w, 10) - 1);

  towers[splited[0]].push(splited[1]);
  towers[splited[1]].push(splited[0]);
});

let result = 0;
towers.forEach((t, i) => {
  let good = true;

  if (t.length) {
    t.forEach(t2 => {
      if (heights[i] <= heights[t2]) {
        good = false;
      }
    });
  }

  if (good) {
    ++result;
  }
});
console.log(result);