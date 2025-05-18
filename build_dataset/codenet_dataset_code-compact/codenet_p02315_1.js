function Main(input) {
	input = input.split("\n");
	var p = input[0].split(" ").map(Number);
	var max = p[1]-0;
	var dp = new Array(p[0]+1);
	//.fill(new Array(max+1));
	//dp[0] = new Array(max+1).fill(0)
	for(var n=0;n<p[0]+1;n++){
	    dp[n] = new Array(max+1).fill(0);
	}
	//	console.log(dp)
    for(var i=1;i<input.length;i++){
    var mem = input[i].split(" ").map(Number);
    for(var j=0;j<=max;j++){
        //console.log(i,j)
      if(j>=mem[1]) dp[i][j] = Math.max(dp[i-1][j-mem[1]]+mem[0],dp[i-1][j])
      else dp[i][j] = dp[i-1][j];
    }
  }
  console.log(dp[p[0]][max])
 // console.log(dp)
}Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
