var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var [e,y] = input.trim().split(" ").map(Number);
var mtsh = "MTSH".split("");
if(e==0){
   if(y>=1868 && y<=1911){e=1;y-=1868}
   else if(y>=1912 && y<=1925){e=2;y-=1912}
   else if(y>=1926 && y<=1988){e=3;y-=1926}
   else if(y>=1989 && y<=2016){e=4;y-=1989}
   console.log(mtsh[e-1] + (y+1));
}
else if(e==1)console.log(1868 + y - 1);
else if(e==2)console.log(1912 + y - 1);
else if(e==3)console.log(1926 + y - 1);
else if(e==4)console.log(1989 + y - 1);
