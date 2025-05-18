/*h  t t p : / / t a k u -k . h a t e n a blog . c o m / entry /2013/ 03 / 2 6 / 174239 */
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
for(var i=0;i<Arr.length;i++){
   var arr=Arr[i].split(",").map(Number);
   (function(x1,y1,x2,y2,xq,yq){
      var k=(x2-x1==0)?Infinity:(y2-y1)/(x2-x1);
      var ans;
      if(k==0)ans=[xq,y1-(yq-y1)];
      else if(k==Infinity)ans=[x1-(xq-x1),yq];
      else{
         var  a1=(y2-y1)/(x2-x1);
         var  a2=(-1)/a1;
         var  b1=y1-a1*x1;
         var  b2=yq-a2*xq;
         var  xm=(b2-b1)/(a1-a2);
         var  x=2*xm-xq;
         var  y=a2*x+b2;
         ans=[x,y];
      }
      console.log(ans[0].toFixed(6)+" "+ans[1].toFixed(6));
   }).apply(null,arr);
}