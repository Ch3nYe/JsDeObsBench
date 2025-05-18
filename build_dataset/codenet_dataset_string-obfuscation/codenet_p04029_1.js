function main(input) {
  const n = parseInt(input, 10);
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  console.log(sum);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));