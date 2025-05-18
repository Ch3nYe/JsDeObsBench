function bomb(y,x){
   cnt++;
   var dx=[0,-1,1,0];
   var dy=[-1,0,0,1];
   for(var i=0;i<4;i++){
      var X=x+dx[i];
      var Y=y+dy[i];
      if(Y>=h || Y<0 || X>=w || X<0)continue;
      if(yx[Y][X]=="S")continue;
      else if(yx[Y][X]=="."){yx[Y][X]="S";bomb(Y,X);}
      else {
         if(color=="" || color==yx[Y][X])color=yx[Y][X];
         else color="bad";
      }
   }
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var wh=arr.shift();
   if(wh=="0 0")break;
   wh=wh.split(" ").map(Number);
   var w=wh[0];
   var h=wh[1];
   var yx=[];
   for(var i=0;i<h;i++)yx.push(arr.shift().split(""));
   var ans=[0,0];
   for(var y=0;y<h;y++){
      for(var x=0;x<w;x++){
         var color="";
         var cnt=0;
         if(yx[y][x]=="."){yx[y][x]="S";bomb(y,x);}
         if(color=="B")ans[0]+=cnt;
         else if(color=="W")ans[1]+=cnt;
      }
   }
   console.log(ans[0]+" "+ans[1]);
}