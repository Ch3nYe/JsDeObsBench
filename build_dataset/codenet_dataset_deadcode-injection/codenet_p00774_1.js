function stoneRemove(){
   yx.forEach(function(v,i){
      var str=v.join("").replace(/([1-9])\1{2,}/,function(x){
         point+=(x[0]-0)*x.length;
         return x.replace(/./g,"0");
      });
      yx[i]=str.split("").map(Number);
   });
   var flag=true;
   while(flag){
      flag=false;
      for(var i=0;i<H-1;i++){
         for(var j=0;j<5;j++){
            if(yx[i][j]!=0 && yx[i+1][j]==0){
               yx[i+1][j]=yx[i][j];
               yx[i][j]=0;
               flag=true;
            }
         }
      }
   }
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=(input.trim()).split("\n");
while(true){
   var h=arr.shift()-0;
   if(h==0)break;
   var H=h;
   var yx=[];
   while(h--)yx.push(arr.shift().split(" ").map(Number));
   var point=0;
   var p=point;
   while(true){
      stoneRemove();
      if(p==point)break;
      p=point;
   }
   console.log(point);
}