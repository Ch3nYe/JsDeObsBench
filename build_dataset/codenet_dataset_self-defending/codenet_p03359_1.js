const input = require('fs').readFileSync('/dev/stdin', 'utf8');

const list = input.split(' ');

const a = Number(list[0]);

const b = Number(list[1]);

if (a > b) {
  console.log(a - 1);
} else {
  console.log(a);
}
