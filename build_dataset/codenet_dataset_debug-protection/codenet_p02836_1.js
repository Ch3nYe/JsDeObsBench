// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
    input = input.split("\n");
    T = input[0];
  // console.log(T);
   
    var len = T.length;
  //console.log(len);
 var p = len%2;q = Math.floor(len/2);cnt=0;i=0;
// console.log (p,q);
 //console.log(T.substr(i,1));
// console.log(T.substr(len-1,1));
  
	  for(i = 0;i<q;i++)
	  {if (T.substr(i,1)==T.substr(len-1-i,1)){cnt=cnt+0;}
	  else{cnt++;}
		  
	  }
	  console.log(cnt);
	

	
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));