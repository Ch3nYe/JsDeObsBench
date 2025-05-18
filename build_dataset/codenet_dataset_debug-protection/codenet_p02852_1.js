

function Main(input) {
  input=input.split("\n");
  if(input[input.length-1]===''){
    input.pop();
  }
  const N=input[0].split(' ')[0]-0;
  const M=input[0].split(' ')[1]-0;
  const S=input[1];
  var cur=S.length-1;
  var ret=[];
  while(cur>0){
    if(cur<=M){
      ret.unshift(cur);
      break;
    }
    for(var i=0;i<M;i++){
      if(S[cur-M+i]==='0'){
        ret.unshift(M-i);
        cur=cur-M+i;
        break;
      }
      if(i===M-1){
        console.log(-1);
        return;
      }
    }
  }
  console.log(ret.join(' '));
}




//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));