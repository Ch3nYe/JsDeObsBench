function Main(input){
  var k = parseInt(input.split("\n")[0],10);
  var a = 0;
  var b = 0;
  for(i = 1; i <= k;i++){
    if(i % 2 == 0){
    	a++;
  	}else{
    	b++;
  	}
  }
  console.log(a * b);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));