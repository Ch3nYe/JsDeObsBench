var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var str=arr.shift();
   if(str=="0 0")break;
   var ary=str.split(" ").map(Number);
   var h=[];
   var w=[];
   for(var i=0;i<ary[0];i++)h.push(arr.shift()-0);
   for(var i=0;i<ary[1];i++)w.push(arr.shift()-0);
   var H={};
   for(var i=0;i<h.length;i++){
      var sum=0;
      for(var j=i;j<h.length;j++){
         if(j!=i)sum+=h[j];
         (H.hasOwnProperty(h[i]+sum))?H[h[i]+sum]++:H[h[i]+sum]=1;
      }
   }
   var W={};
   for(var i=0;i<w.length;i++){
      var sum=0;
      for(var j=i;j<w.length;j++){
         if(j!=i)sum+=w[j];
         (W.hasOwnProperty(w[i]+sum))?W[w[i]+sum]++:W[w[i]+sum]=1;
      }
   }
   var cnt=0;
   for(var k in H){
      if(W.hasOwnProperty(k))cnt+=H[k]*W[k];
   }
   console.log(cnt);
}