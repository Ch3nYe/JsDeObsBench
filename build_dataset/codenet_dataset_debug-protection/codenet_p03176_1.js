

function Main(input) {
  input = input.split("\n");
  var N = parseInt(input[0]);
  var h = input[1].split(" ").map(i => parseInt(i));
  var a = input[2].split(" ").map(i => parseInt(i));
  var dp = new Array(N+1).fill(0);
  //dp[h[0]]=a[0];
  var ans=0;
  for(var i=0;i<N;i++){
    var max=0;
    tmp=a[i]+dp[h[i]];
    for(var j=h[i];j<N+1;j++){
      if(tmp>dp[j]){
        dp[j]=tmp;
      }else{
        break;
      }

    }
    ans=Math.max(ans,dp[h[i]]);
  }

  console.log('%s', ans);
  return ans;
}
// "実行する"ボタンを押した時に実行される関数 (デバッグ用)
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