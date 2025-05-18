
function Main(input) {
  input=input.split("\n");
  if(input[input.length-1]===''){
    input.pop();
  }
  const N=input[0].split(' ')[0]-0;
  const M=input[0].split(' ')[1]-0;
  var parent=new Array(N+1).fill(0);
  for(var i=1;i<=M;i++){
    if(root(input[i].split(' ')[0]-0)!==root(input[i].split(' ')[1]-0)){
       parent[root(input[i].split(' ')[1]-0)]=root(input[i].split(' ')[0])-0;
    }
  }
  console.log(parent.reduce((acc,cur)=>{
    return acc+(cur===0?1:0);
  },0)-1);
  
  function root(node){
    var array=[];
    var point=node;
    while(parent[point]!==0){
      array.push(point);
      point=parent[point];
    }
    array.forEach(e=>{
      parent[e]=point;
    });
    return point;
  }
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));