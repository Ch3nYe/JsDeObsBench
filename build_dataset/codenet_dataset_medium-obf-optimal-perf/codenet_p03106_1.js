function main(input) {
  const args = input.split(' ');
  var A = Number(args[0]);
  var B = Number(args[1]);
  var K = Number(args[2]);
  var cu = 0;
  var sum;
  var count = 0;
  for (cu = A; cu > 0; --cu) {
    if (Number.isInteger(A / cu) && Number.isInteger(B / cu)) {
      count++;
      if (count === K) {
        sum = cu;
        break;
      }
    }
  }
  console.log(sum);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
