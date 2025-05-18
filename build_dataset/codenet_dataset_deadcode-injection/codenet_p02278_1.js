//config = { input: 'tmp', newline: '\r\n' }; // win
config = { input: '/dev/stdin', newline: '\n' }; // linux

line = require('fs').readFileSync(config.input, 'ascii')
  .split(config.newline, 2);

w = line[1].split(' ').map(Number);

sorted = [].concat(w);
sorted.sort(function (a, b) { return a - b; });

cost = 0;
for (i = w.length - 1; i >= 0; i--) {
  idx = w.indexOf(sorted[i]);
  if (idx === i) continue;
  cost += w[i] + w[idx];
  tmp = w[i];
  w[i] = w[idx];
  w[idx] = tmp;
}

console.log(cost);