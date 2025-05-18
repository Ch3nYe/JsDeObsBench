(function main() {
  const n = Number(require('fs').readFileSync('/dev/stdin', 'utf8')) + 1;
  root5 = Math.sqrt(5);
  console.log(Math.round(1/root5 * (Math.pow((1 + root5) / 2, n) - Math.pow((1 - root5) / 2, n))));
})();

