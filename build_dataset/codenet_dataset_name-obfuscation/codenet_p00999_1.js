var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var abc=arr.shift();
   if(abc=="0 0 0 0 0")break;
   var ary=(abc+" "+arr.shift()).split(" ").map(Number);
   (function(a,b,c,d,e,na,nb,nc){
      var ans=Math.floor(nc/d)*d*e;
      var nokori=nc%d;
      var A=(function(ans){
         ans+=nokori*c;
         ans+=na*a+nb*b;
         return ans;
      })(ans);
      var B=(function(ans,na,nb){
         if(ans==0){
            var yobun=(nokori==0)?0:d-nokori;
            if(yobun>0)ans+=e*d;
            while(yobun--){
               if(nb>0)nb--;
               else if(na>0)na--;
            }
            ans+=na*a+nb*b;
            return ans;
         }
         if(ans!=0){
            return na*a+nb*b+nc*e;
         }
      })(ans,na,nb);
      console.log(Math.min(A,B));
   }).apply(null,ary);
}