var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr = input.trim().split("\n");
while (true) {
   var tdl = arr[0];
   if (tdl == "0 0 0") break;
   var [t,d,l]=tdl.split(" ").map(Number);
   var cnt=0;
   var time=0;
   for(var i=0;i<t;i++){
      if(time!=0)cnt++;
      if(time>0)time--;
      var x=arr[i+1]-0;
      if(x>=l)time=d;
   }
   console.log(cnt);
   arr=arr.slice(t+1);
}
