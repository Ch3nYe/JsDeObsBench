function Main(input) {
  input = input.split("\n");
  var N = parseInt(input[0]);
  var ans = 0;
  var set = new Set();
  var N2=N;
  for(var i=2;i<Math.sqrt(N);i++){
    var x =i;
    for(var j=1;x<N;j++){
      if(N2%Math.pow(i,j)==0){
        ans++;
        N2=N2/Math.pow(i,j);
      }else{
        break;
      }
      x=Math.pow(i,j+1);
    }
  }
  if(ans==0&&N!=1){
    ans=1;
  }
  



  console.log('%s', ans);
  return ans;
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