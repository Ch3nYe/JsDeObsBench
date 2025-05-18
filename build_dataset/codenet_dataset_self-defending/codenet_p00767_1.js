function HW(){
   var arr=[];
   for(var i=1;i<150;i++){
      for(var j=i+1;j<=150;j++){
         arr.push([i,j,i*i+j*j]);
      }
   }
   arr.sort(function(a,b){
      if(a[2]==b[2])return a[0]-b[0];
      else return a[2]-b[2];
   });
   return arr;
}
var Rectangles=HW();
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var hw=Arr.shift().split(" ").map(Number);
   var h=hw[0];
   var w=hw[1];
   if(h==0 && w==0)break;
   var num=h*h+w*w;
   for(var i=0;i<Rectangles.length;i++){
      if(Rectangles[i][0]==h &&Rectangles[i][1]==w)break;
   }
   console.log(Rectangles[i+1][0]+" "+Rectangles[i+1][1]);
}