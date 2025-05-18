var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var n=arr.shift()-0;
   if(n==0)break;
   var ary=[];
   while(n--){
      var hms=arr.shift().split(" ");
      var start=hms[0].split(":").map(Number);
      var end=hms[1].split(":").map(Number);
      start=start[0]*60*60+start[1]*60+start[2];
      end=end[0]*60*60+end[1]*60+end[2];
      ary.push([start,end]);
   }
   ary.sort(function(a,b){return a[0]-b[0];});
   var train=[];
   var cnt=0;
   ary.forEach(function(v){
      if(train.length==0){
         cnt++;
         train.push(v[1]);
      }else{
         train.sort(function(a,b){return a-b;});
         if(train[0]<=v[0]){
            train.shift();
            train.push(v[1]);
         }else{
            cnt++;
            train.push(v[1]);
         }
      }
   });
   console.log(cnt);
}