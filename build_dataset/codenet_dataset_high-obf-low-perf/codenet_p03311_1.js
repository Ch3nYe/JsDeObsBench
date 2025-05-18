
function Main(input) {
  input=input.split("\n");
  if(input[input.length-1]===''){
    input.pop();
  }
  const N=input[0].split(' ')[0]-0;
  var array=input[1].split(' ').map((e,i)=>{
    return e-i-1;
  }).sort((a,b)=>{
    return a-b;
  });
  console.log(array.reduce((acc,cur)=>{
    return acc+Math.abs(cur-array[Math.floor(array.length/2)]);
  },0));

}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

function permutation(n,k){
    var ret=[[]];
    var next;
    for(var i=0;i<k;i++){
        next=[];
        ret.forEach(e=>{
            for(var k=1;k<=n;k++){
                if(!e.includes(k)){
                    next.push(e.concat([k]));
                }
            }
        });
        ret=next.concat([]);
    }
    return ret;
}