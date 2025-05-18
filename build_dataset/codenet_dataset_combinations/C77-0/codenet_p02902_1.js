

function Main(input) {
  input=input.split("\n");
  if(input[input.length-1]===''){
    input.pop();
  }
  const N=input[0].split(' ')[0]-0;
  const M=input[0].split(' ')[1]-0;
  var direct=[];
  for(var i=0;i<=N;i++){
    direct.push([]);
  }
  for(var i=1;i<input.length;i++){
    direct[input[i].split(' ')[0]-0].push(input[i].split(' ')[1]-0);
  }
  var memo=[];
  for(var i=1;i<=N;i++){
    memo.push([i]);
  }
  var temp;
  var str;
  while(memo.length>0){
    str='';
    temp=[];
    memo.forEach(e=>{
      direct[e[e.length-1]].forEach(f=>{
        temp.push(e.concat([f]));
      });
    });
    memo=temp.slice();
    memo.forEach(e=>{
      if(e[e.length-1]===e[0]){
        temp=e.slice();
        temp.shift();
        str=temp.length+"\n"+temp.join("\n");
      }
    });
    if(str!==''){
      console.log(str);
      return;
    }
  }
  console.log(-1);
}




//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));