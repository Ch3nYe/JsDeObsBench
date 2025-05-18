

function Main(input) {
  input = input.split("\n");
  var N = parseInt(input[0].split(" ")[0]);
  var K = parseInt(input[0].split(" ")[1]);
  var anssub=new Array();
  var mod =Math.pow(10,9)+7;
  for(var i=1;i<=K;i++){
    var a = combination(N-K+1,i)%mod;
    var b = combination(K-1,i-1)%mod;
    var c = a*b%mod;
    anssub.push(c);
  }
  var ans = anssub.join("\n");

  console.log('%s', ans);
  return ans;
}
function permutation(n, r) {
  for(var i = 0, res = 1; i < r; i++) {
  res *= n - i;
  }
  return res;
}
  
function combination(n, r) {
  return permutation(n, r) / permutation(r, r);
}

function debug(n){
  var input = document.getElementById("input"+n).value;
  var ans=Main(input);
  var result="WA";
  if(ans==document.getElementById("output"+n).value.split("\n")[0]){
    result="AC";
  }
  document.getElementById("result"+n).innerHTML=result;
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));