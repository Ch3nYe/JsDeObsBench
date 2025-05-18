function Main(input) {
  input=input.split("\n");
  if(input[input.length-1]===''){
    input.pop();
  }
  const N=input[0].split(' ')[0]-0;
  const K=input[0].split(' ')[1]-0;
  var A=input[1].split(' ').map(e=>{
    return e-0;
  }).sort((a,b)=>{
    return a-b;
  });
  var F=input[2].split(' ').map(e=>{
    return e-0;
  }).sort((a,b)=>{
    return b-a;
  });
  var possible=0;
  for(var i=0;i<N;i++){
    possible=Math.max(possible,A[i]*F[i]);
  }
  var impossible=-1;
  var temp;
  var sum;
  while(possible-impossible>1){
    temp=Math.ceil((impossible+possible)/2);
    sum=0;
    for(var i=0;i<N;i++){
      sum+=Math.max(0,A[i]-Math.floor(temp/F[i]));
    }
    if(sum<=K){
      possible=temp;
    }else{
      impossible=temp;
    }
  }
  console.log(possible);
}




//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));