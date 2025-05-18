//config = { input: 'tmp', newline: '\r\n' }; // win
config = { input: '/dev/stdin', newline: '\n' }; // linux

line = require('fs').readFileSync(config.input, 'ascii')
  .split(config.newline);
line[0] = line[0].split(' ').map(Number);
H = line[0][0];
W = line[0][1];
field = line.slice(1, 1+H);
line[1+H] = line[1+H].split(' ').map(Number);
R = line[1+H][0];
C = line[1+H][1];
pat = line.slice(1+H+1, 1+H+1+R);

mem = new Array(H);
for (i = 0; i < H; i++) {
  mem[i] = new Array(R);
  for (j = 0; j < R; j++) {
    mem[i][j] = {};
    k = field[i].indexOf(pat[j])
    while (k !== -1) {
      mem[i][j][k] = true;
      k = field[i].indexOf(pat[j], k + 1);
    }
  }
}

for (i = 0; i <= H - R; i++) {
  for (j = 0; j <= W - C; j++) {
    flag = true;
    for (k = 0; k < R; k++) {
      if (!mem[i+k][k].hasOwnProperty(j)) {
        flag = false;
        break;
      }
    }
    if (flag) console.log('%d %d', i, j);
  }
}