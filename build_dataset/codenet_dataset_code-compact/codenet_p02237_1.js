//config = { input: 'tmp', newline: '\r\n' }; // win
config = { input: '/dev/stdin', newline: '\n' }; // linux

line = require('fs').readFileSync(config.input, 'ascii')
  .trim()
  .split(config.newline);
n = Number(line.shift());
adj = {};
for (i in line) {
  ary = line[i].split(' ');
  j = ary.shift();
  ary.shift();
  adj[j] = ary;
}

for (i = 1; i <= n; i++) {
  ary = [];
  for (j = 1; j <= n; j++) {
    if (adj[i].indexOf(String(j)) !== -1) ary.push(1);
    else ary.push(0);
  }
  console.log(ary.join(' '));
}