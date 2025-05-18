function Main(input) {
  input=input.split("\n");
  if(input[input.length-1]===''){
    input.pop();
  }
  const N=input[0].split(' ')[0]-0;
  const Z=input[0].split(' ')[1]-0;
  const W=input[0].split(' ')[2]-0;
  const a=input[1].split(' ').map(e=>{
    return e-0;
  });
  if(a.length===1){
    console.log(Math.abs(W-a[0]));
    return;
  }
  var x,y;
  x=new Array(N);
  y=new Array(N);
  for(var i=N-1;i>=0;i--){
    if(i===N-1){
      y[i]=Math.abs(a[N-1]-a[N-2]);
      x[i]=Math.abs(a[N-1]-a[N-2]);
      continue;
    }
    y[i]=Math.min(...x.slice(i+1),i!==0?Math.abs(a[i-1]-a[N-1]):Math.abs(Z-a[N-1]));
    x[i]=Math.max(...y.slice(i+1),i!==0?Math.abs(a[i-1]-a[N-1]):Math.abs(W-a[N-1]));
  }
  console.log(Math.max(...x));
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
