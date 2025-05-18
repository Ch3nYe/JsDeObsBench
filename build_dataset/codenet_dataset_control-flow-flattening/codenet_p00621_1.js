var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var wq=arr.shift();
   if(wq=="0 0")break;
   wq=wq.split(" ").map(Number);
   var w=wq[0];
   var W=[];
   for(var i=0;i<w;i++)W[i]=true;
   var cat={};
   while(wq[1]--){
      var sw=arr.shift().split(" ");
      if(sw[0]=="s"){
         var id=sw[1];
         var width=sw[2]-0;
         var cnt=0;
         var ans="impossible";
         for(var i=0;i<w;i++){
            cnt=(W[i])?cnt+1:0;
            if(cnt==width){
              while(cnt--){W[i]=false;i--;}
               i++;
               cat[id]=[i,width];
               ans=i;
               break;
            }
         }
         console.log(ans);
      }
      if(sw[0]=="w"){
         var id=sw[1];
         var width=cat[id][1];
         var i=cat[id][0];
         while(width--){W[i]=true;i++;}
      }
   }
   console.log("END");
}