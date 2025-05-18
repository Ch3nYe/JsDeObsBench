function year(x){
   var m=[365,31,28,31,30,31,30,31,31,30,31,30,31];
   if(x%4==0){
      m[2]=29;
      m[0]=366;
      if(x%100==0){m[2]=28;m[0]=365;}
      if(x%400==0){m[2]=29;m[0]=366;}
   }
   return m;
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
   var str=Arr.shift();
   if(str=="-1 -1 -1 -1 -1 -1")break;
   var arr=str.split(" ").map(Number);
   (function(y1, m1, d1, y2, m2, d2){
      var sum1=0;
      var sum2=0;
      var Y1=year(y1);
      var Y2=year(y2);
      sum1+=Y1[m1]-d1;
      sum2+=Y2[m2]-d2;
      while(m1<12){m1++;sum1+=Y1[m1];}
      while(m2<12){m2++;sum2+=Y2[m2];}
      var days=sum1-sum2;
      while(y1!=y2){
         y1++;
         days+=(year(y1))[0];
      }
      console.log(days);
   }).apply(null,arr);
}