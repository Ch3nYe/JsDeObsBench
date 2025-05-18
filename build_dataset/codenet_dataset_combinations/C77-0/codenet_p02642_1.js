function main(input) {
  var a = input[1].trim().split(" ").map(e => parseInt(e, 10));
  var a_max = 10**6+1;
  var dp = new Array(a_max+1).fill(0);
  for(var i of a){
    dp[i]++;
  }
 
  for(var i=1;i<=a_max;i++){
    if(dp[i]===0){ 
      continue;
    }
    for(var j=i+i;j<=a_max;j+=i){
      if(dp[j]!==0){
        dp[j]=0;
      }
    }
  }
  console.log(dp.filter(function(x){return x==1}).length);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8').trim().split("\n"));
