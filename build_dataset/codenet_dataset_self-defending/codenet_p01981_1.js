var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr= input.trim().split("\n");
while(true){
   var gymd = arr.shift();
   if(gymd=="#")break;
   var [g, y, m, d]=gymd.split(" ");
   [y,m,d]=[y-0,m-0,d-0];
   if(y<=30 || y==31 && m<=4)console.log(gymd);
   else {
      y=y-30;
      console.log("? "+y+" "+m+" "+d);
   }
}
