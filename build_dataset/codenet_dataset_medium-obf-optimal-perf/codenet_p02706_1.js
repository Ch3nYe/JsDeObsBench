const main = (inputs) => {
  var array = inputs[0].split(" ");
  var array2 = inputs[1].split(" ");
  var N = array[0] - 0;
  var M = array[1] - 0;
  var sum = 0;

  for (var i = 0; i < M; i++) {
    sum = sum + Number(array2[i]);
  }

  console.log(N - sum < 0 ? -1 : N - sum);
}
main(require('fs').readFileSync('/dev/stdin', 'UTF-8').trim().split("\n"));