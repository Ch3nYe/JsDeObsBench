var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.replace(/\n$/,"")).split("\n");
while(true){
   var arr=(Arr.shift()).split(" ").map(Number);
   if(arr[0]==0)break;
   var q1=arr[0];
   var b=arr[1];
   var c1=arr[2];
   var c2=arr[3];
   var q2=arr[4];
   var x=0;
   var y=0;
   var flag=true;
   while(true){
      if(b>=c1*(x+1) &&  (x+1)<=q2)x++;
      else break;
   }
   while(true){
      if(b>=c1*x+c2*(y+1))y++;
      else break;
   }   
   while(true){
      if(x==0){flag=false;break;}
      if(c1*x+c2*y>b){flag=false;break;}
      if(q1>x+y){
         x--;
         while(true){
            if(b>=c1*x+c2*(y+1))y++;
            else break;         
         }    
      }else{
         break;
      }
   }
   console.log((flag)?x+" "+y:"NA");
}