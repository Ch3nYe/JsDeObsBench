// inputに入力データ全体が入る
function Main(input) {
	input = input.split("");
	let N = input.includes("N");
  	let S = input.includes("S");
  	let E = input.includes("E");
  	let W = input.includes("W");
	
  	let NS = N&&S || !N&&!S;
  	let EW = E&&W || !E&&!W;
	  
	if(NS&&EW){
      console.log("Yes");
    }else{
      console.log("No");
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));