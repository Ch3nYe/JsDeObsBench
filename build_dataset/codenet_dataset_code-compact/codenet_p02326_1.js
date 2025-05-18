var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
var [h,w]=arr.shift().split(" ").map(Number);
var yx=[];
for(var i=0;i<h;i++){
   yx[i]=arr.shift().split(" ").map(v=>1-(v-0));
}
for(var y=1;y<h;y++){
   for(var x=1;x<w;x++){
      if(yx[y][x]==1)yx[y][x]=Math.min(yx[y-1][x],yx[y][x-1],yx[y-1][x-1])+1;
   }
}
var max=0;
for(var y=0;y<h;y++){
   for(var x=0;x<w;x++){
      max=Math.max(max,yx[y][x]);
   }
}
console.log(max*max);
