'use strict';
const main = arg => {
  const input = arg.trim().split('\n');

  const setItems = new Set(input);
  console.log(setItems.size - 1);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));