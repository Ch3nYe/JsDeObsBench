// inputに入力データ全体が入る
function Main(input) {
		input = input.split(" ");
		
		var tem = input;
 
  
	
	//文字列から10進数に変換するときはparseIntを使います
	 //   var tem = parseInt(input[0], 10);
  
  // 分割する数値
var beforeText = tem;
// 数値を文字列に変換して、一文字ずつ分割
var arr = String(tem).split('');

var a = parseInt(arr[0], 10);
var b = parseInt(arr[1], 10);
var c = parseInt(arr[2], 10);
var d = parseInt(arr[3], 10);

//console.log(arr); 
//console.log(a,b,c,d); 

if (a == b){console.log('Bad');}
      else if (b == c){console.log('Bad');}
             else if (c == d){console.log('Bad');}
                             else {console.log('Good');}
                             
                      
                             
        


  
   	   }    //    1    
     
  //*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));