function Main(input) {
  input=input.split("\n");
  var N=input[0].split(" ")[0]-0;
  var M=input[0].split(" ")[1]-0;
  
  var answer=new Array(M+1);
  answer.fill(0);
  var line;
  for(var i=1;i<input.length;i++){
    line=input[i].split(" ");
    line[1]-=0;
    line[0]-=0;
    for(var j=1;j<=M;j++){
      if(!(line[1]-line[0]<j-1&&line[1]%j>=line[0]%j&&line[0]%j>0)){
        answer[j]++;
      }
    }
  }
  answer.shift();
  console.log(answer.join("\n"));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
  
  
