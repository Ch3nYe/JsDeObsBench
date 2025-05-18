function main(input) {
  var n = input[0].split(" ")[0]-0;
  var m = input[0].split(" ")[1]-0;
  var nummap = [0,2,5,5,4,5,6,3,7,6];
  var mattis = input[1].split(" ").map(v=>{return {val:v, num:nummap[v-0]}});
  var ans = "";
  var dp = [];
  dp[0] = "";
  for(var i=1;i<=n;i++){
    for(var j=0;j<m;j++){
      var matti = mattis[j];
      if(dp[i-matti.num] !== undefined){
        var tv = (dp[i-matti.num]?dp[i-matti.num]:"") + matti.val;
        if(dp[i] === undefined || diff(tv, dp[i]) > 0){
          dp[i] = tv;
        }
      }
    }
  }
  console.log(dp[n]);
}
function diff(a, b){
  if(a.length != b.length) return a.length-b.length;
  for(var i=0;i<a.length;i++){
    if(a[i]!=b[i]) return a[i]-b[i];
  }
  return 0;
}

main(require('fs').readFileSync('/dev/stdin', 'utf8').trim().split("\n"))
