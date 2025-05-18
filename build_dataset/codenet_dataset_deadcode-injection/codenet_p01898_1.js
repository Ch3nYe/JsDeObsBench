var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr= input.trim().split("\n");
var [m,n]=arr.shift().split(" ").map(Number);
var yx=[];
for(var i=0;i<m;i++)yx.push(arr.shift().split(""));
var memo=[];
for(var i=0;i<m;i++){
   for(var j=0;j<n;j++){
      if(i==0)memo.push([i,j]);
      if(yx[i][j]=="o"){
         [[0,-1],[0,1]].forEach(v=>{
            var y=i+v[0];
            var x=j+v[1];
            if((y<0 || x<0 || y>=m || x>=n)==false)memo.push([y,x]);
         });
      }else if(yx[i][j]=="x"){
         for(var ii=-1;ii<=1;ii++)for(var jj=-1;jj<=1;jj++){
            if(ii==0 && jj==0)continue;
            var y=i+ii;
            var x=j+jj;
            if(y<0 || x<0 || y>=m || x>=n)continue;
            memo.push([y,x]);
         }
      }
   }
}
memo.forEach(v=>{
   yx[v[0]][v[1]]="b";
});
console.log(yx.join("").replace(/[^-]/g,"").length);
