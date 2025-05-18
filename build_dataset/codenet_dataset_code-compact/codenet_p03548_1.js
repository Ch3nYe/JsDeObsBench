function Main(input){
  var X = parseInt(input.split(' ')[0]);  // total
  var Y = parseInt(input.split(' ')[1]);  // human space
  var Z = parseInt(input.split(' ')[2]);  // void space

  var N = 1; // human count
  var x = 0; // space
  while(true){
    x = (N * Y) + (N + 1) * Z;
    if(x > X) break;
    N++;
  }
  console.log(--N);
}

Main(require('fs').readFileSync('/dev/stdin', 'utf8'));