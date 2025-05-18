var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var MTPR=arr.shift();
   if(MTPR=="0 0 0 0")break;
   MTPR=MTPR.split(" ").map(Number);
   var team=[];
   for(var i=0;i<MTPR[1];i++)team.push([0,0,[0,0,0,0,0,0,0,0,0,0],i]);
   for(var i=0;i<MTPR[3];i++){
      var mtpj=arr.shift().split(" ").map(Number);
      var m=mtpj[0];
      var t=mtpj[1]-1;
      var p=mtpj[2]-1;
      var j=mtpj[3];
      if(j==0){
         team[t][0]++;
         team[t][1]+=m+team[t][2][p]*20;
      }
      if(j!=0)team[t][2][p]++;
   }
   team.sort(function(a,b){
      if(a[0]==b[0] && a[1]==b[1])return b[3]-a[3];
      else if(a[0]==b[0])return a[1]-b[1];
      else return b[0]-a[0];
   });
   var ans=[];
   var same=[-1,-1];
   team.forEach(function(v,i){
      if(same[0]==v[0] && same[1]==v[1])ans[ans.length-1]+="="+(v[3]+1);
      else {ans.push(v[3]+1);same=[v[0],v[1]];}
   });
   console.log(ans.join(","));
}