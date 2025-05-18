const main = (inputs) => {
  var array = inputs[0].split(" ");
  var X = Number(array);

  var num = 100;
  var count = 0;
  while (1) {
    var risoku = Math.floor(num * 0.01);
    num = num + risoku;
    count++;
    if (X <= num) break;
  }

  console.log(count);
}
main(require('fs').readFileSync('/dev/stdin', 'UTF-8').trim().split("\n"));