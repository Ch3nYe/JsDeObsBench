function Main(input) {
  input=input.split("\n");
  var X=input[0]-0;

  console.log(Math.ceil((2*Math.abs(X)+1/4)**(1/2)-1/2));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
  
  
