// inputに入力データ全体が入る
function Main(input) {
	input = input.split("\n");
  	const row1 = input[0].split(" ");
  	const N = parseInt(row1[0]);
  const M = parseInt(row1[1]);
  const K = parseInt(row1[2]);
  var S = parseInt(input[1],2);
  var T = parseInt(input[2],2);
  for(var i=0; i < K; i++){
    var sANDt = S & T;
    S = S + sANDt;
    T = T + sANDt;
  }
  const sBinary = toBinary(S);
  const tBinary = toBinary(T);
  console.log(sBinary);
  console.log(tBinary);
  
 }

function toBinary( a ){ 
  var num = a, binary = ''; 
  while ( num > 0 ) { 
    binary = ( num % 2 ) + binary; 
    num = Math.floor( num / 2 ); 
  } 
  return binary; 
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));