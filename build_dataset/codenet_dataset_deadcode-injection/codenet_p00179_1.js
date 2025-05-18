function BFS(x){
   var obj={};
   var bfs=[[x,0]];
   obj[x]=true;
   while(true){
      if(bfs.length==0){ans="NA";break;}
      var leaf=bfs.shift();
      var str=leaf[0];
      var cnt=leaf[1];
      if(/^0+$|^1+$|^2+$/.test(str)){ans=cnt;break;}
      for(var i=0;i<str.length-1;i++){
         if(str[i]==str[i+1])continue;
         var arr=str.split("");
         var color=3-(+arr[i])-(+arr[i+1]);
         arr[i]=color;
         arr[i+1]=color;
         var Str=arr.join("");
         if(obj.hasOwnProperty(Str)==false){
            bfs.push([Str,cnt+1]);
            obj[Str]=true;
         }
      }
   }
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var rgb=Arr.shift();
   if(rgb=="0")break;
   rgb=rgb.replace(/r/g,"0").replace(/g/g,"1").replace(/b/g,"2")
   var ans;
   BFS(rgb);
   console.log(ans);
}