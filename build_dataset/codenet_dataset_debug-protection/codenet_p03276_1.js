function Main(input) {
  input=input.split("\n");
  if(input[input.length-1]===''){
    input.pop();
  }
  const N=input[0].split(' ')[0]-0;
  const K=input[0].split(' ')[1]-0;
  const x=input[1].split(' ').map(e=>{
    return e-0;
  });
  var pointer=x.findIndex(e=>{
    return e=>0;
  })-K;
  if(pointer<0){
    pointer=0;
  }
  var temp;
  var ret=Infinity;
  for(var i=0;i<K;i++){
    if(pointer+i+K-1>=x.length){
      break;
    }
    if(x[pointer+i]*x[pointer+i+K-1]<0){
      temp=Math.min(-x[pointer+i],x[pointer+i+K-1])-x[pointer+i]+x[pointer+i+K-1];
    }else{
      temp=Math.max(Math.abs(x[pointer+i]),Math.abs(x[pointer+i+K-1]));
    }
    ret=Math.min(ret,temp);
  }
  console.log(ret);
      
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
