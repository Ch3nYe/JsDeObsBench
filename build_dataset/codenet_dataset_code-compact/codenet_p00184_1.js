var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n").map(Number);
var n=0;
var arr=[0,0,0,0,0,0,0];
for(var i=0;i<Arr.length;i++){
   if(n==0){
      if(i!=0)arr.forEach(function(v){console.log(v);});
      if(Arr[i]==0)break;
      n=Arr[i];
      arr=[0,0,0,0,0,0,0];
    }else{
      n--;
      if(Arr[i]>=60)arr[6]++;
      else if(Arr[i]>=50)arr[5]++;
      else if(Arr[i]>=40)arr[4]++;
      else if(Arr[i]>=30)arr[3]++;
      else if(Arr[i]>=20)arr[2]++;
      else if(Arr[i]>=10)arr[1]++;
      else arr[0]++;
   }
}