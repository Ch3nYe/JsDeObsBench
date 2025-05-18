//config = { input: 'tmp', newline: '\r\n' }; // win
config = { input: '/dev/stdin', newline: '\n' }; // linux

line = require('fs').readFileSync(config.input, 'ascii')
  .split(config.newline);

S = [];

for (i in line) {
  ary = line[i].split(' ');
  if (ary[0] === 'insert') S.push(parseInt(ary[1], 10));
  else if (ary[0] === 'extract') {
    S.sort(function (a, b) { return a - b; });
    console.log(S.pop());
  }
}