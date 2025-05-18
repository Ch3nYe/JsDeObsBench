function Main(input){
  input = input.split(" ").map(a=>~~a)
	var H = input[0];
  var W = input[1];
  var K = input[2];
  var mod = 10**9+7;
  
  if(W == 1)return 1;
  
  var validAmidaList = Array(2**(W-1))
  	.fill(0)
    .map((a,b)=>b)
    .map(a=>a.toString(2))
    .filter(a=>!/11/.test(a))
    .map(a=>"000000"+a)
    .map(a=>a.slice(1-W))
    .map(a=>"0"+a+"0")
  
  var dp = Array(H+1);
  for(var i = 0; i <= H;i++){
  	dp[i] = Array(W).fill(0);
  }
  dp[0][0] = 1;
  
  for(var i = 1; i <= H;i++){
  	validAmidaList.forEach(function(elem){
    	for(var j = 0; j < W; j++){
      	({
        	"10":a=>dp[i][j] += dp[i-1][j-1],
          "01":a=>dp[i][j] += dp[i-1][j+1],
          "00":a=>dp[i][j] += dp[i-1][j]
        })[elem[j]+elem[j+1]]();
        dp[i][j] %= mod;
      }
    })
  }
  
  return dp[H][K-1];
}

if(typeof require !== 'undefined')console.log(Main(require("fs").readFileSync("/dev/stdin", "utf8")));