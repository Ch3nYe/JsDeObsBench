function Main(input){
  var N = input.split(" ")[0];
  var K = input.split(" ")[1];
  N = parseInt(N,10);
  K = parseInt(K,10);

  var jud = N%K === 0;
  if(jud){
    console.log(0);
  }else{
    console.log(1);
  }
}
  Main(require('fs').readFileSync('/dev/stdin','utf8'));

