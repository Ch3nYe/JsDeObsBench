// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");
  　var n = parseInt(input[0], 10);
  　var x = input[1].split(" ");
  	var y = new Array(n);
  	var count = 0;
  	var count2 = 0;
    var a = 1000000007;
    for(var i=0; i<n; i++){
	    x[i] = parseInt(x[i], 10);
      	y[i] = Math.floor(x[i]/4294967296);
      	x[i] = x[i]%4294967296;
    }
  for(var i=0; i<n-1; i++){
  	for(var j=i+1; j<n; j++){
      	count += x[i] ^ x[j];
      if(count > 4294967296/2){
        count = count%(4294967296/2);
        count2 += 0.5;
      }
      count2 += y[i] ^ y[j];
    }
  }
  count = count + count2 * 4294967296;
	console.log(count%a);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));