var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var N=arr.shift()-0;
   if(N==0)break;
   var obj={};
   var ary=[];
   for(var i=0;i<N;i++){
      var nws=(arr.shift()).split(" ");
      var name=nws[0];
      var w=nws[1]-0;
      var s=nws[2].split("").map(Number);
      s=(s.length==3)?s[0]*60+s[1]*10+s[2]:s[0]*600+s[1]*60+10*s[2]+s[3];
      obj[name]=(w*1440)+s;
      ary.push((w*1440)+s);
   }
   var P=arr.shift()-0;
   for(var i=0;i<P;i++){
      var f=arr.shift();
      ary.push(obj[f]-29.5);
   }
   ary.sort(function(a,b){return a-b;});
   var cnt=0;
   var i=0;
   var p=0;
   ary.forEach(function(v){
      if(v%1==0.5){cnt++;p++;i=v+29.5+30;}
      else if(i<=v){cnt++;i=v+30;}
   });
   if(p!=P)cnt=-1;
   console.log(cnt);
}