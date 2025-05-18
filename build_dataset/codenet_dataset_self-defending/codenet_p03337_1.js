function main (input) {
  const a = parseInt(input.split(' ')[0],10);
  const b = parseInt(input.split(' ')[1],10);

  ptnAdd = a + b;
  ptnSub = a - b;
  ptnMul = a * b;

  ans = Math.max.apply(null,[ptnAdd,ptnSub,ptnMul]);
  console.log(ans);
}

main(require('fs').readFileSync('/dev/stdin', 'utf8'));