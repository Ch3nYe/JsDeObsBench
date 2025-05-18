var input = require('fs').readFileSync('/dev/stdin', 'utf8');

var arr = input.trim().split("\n");
while(true){
   var [n,q]=arr.shift().split(" ").map(Number);
   if(n==0 && q==0)break;
   var g=[];
   for(var i=0;i<n;i++){
      var [e,ey,wy]=arr.shift().split(" ");
      [ey,wy]=[ey-0,wy-0];
      g.push([e,wy-ey,wy]);
   }
   for(var i=0;i<q;i++){
      var n = arr.shift() - 0;
      var ans="Unknown";
      for(var j=0;j<g.length;j++){
         var a = g[j][1];
         var b = g[j][2];
         if(a<n && n<=b){
            ans=[g[j][0],n-a].join(" ");
         }
      }
      console.log(ans);
   }
}

