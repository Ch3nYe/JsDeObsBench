function BFS(){
   var bfs=[[s0,0]];
   while(true){
      if(bfs.length==0)break;
      var [leaf,cnt]=bfs.shift();
      if(leaf==s1){
         flag=true;
         console.log(cnt);
         break;
      }
      ab.forEach(v=>{
         if(leaf.includes(v[0])){
            var re = new RegExp(v[0], "g");
            var str = leaf.replace(re,v[1]);
            if(str.length<=10)bfs.push([str,cnt+1]);
         }
      });
   }
}

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var n=arr.shift()-0;
   if(n==0)break;
   var ab=arr.slice(0,n).map(v=> v.split(" "));;
   arr=arr.slice(n);
   var s0=arr.shift();
   var s1=arr.shift();
   var flag=false;
   BFS();
   if(!flag)console.log(-1);
}
