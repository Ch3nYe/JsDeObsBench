function move(yx){
   var arr=[];
   for(var y=0;y<8;y++)arr[y]=[];
   for(var y=0;y<8;y++){
      for(var x=0;x<8;x++){
         arr[y][x]=yx[7-x][y];
      }
   }
   return arr;
}

var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var yx=[];
for(var i=0;i<8;i++)yx.push(Arr[i].split(""));
yx=move(yx);
console.log("90\n"+yx.join("\n").replace(/\,/g,""));
yx=move(yx);
console.log("180\n"+yx.join("\n").replace(/\,/g,""));
yx=move(yx);
console.log("270\n"+yx.join("\n").replace(/\,/g,""));