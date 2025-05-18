var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var obj={};
for(var i=0;i<Arr.length;i++){
var arr=Arr[i].split(" ").map(Number);
   if(i!=0 && arr.length==1){
      var keys=[];
      for(var k in obj)keys.push(k-0);
      var cnt=0;
      for(var j=0;j<keys.length;j++){
         if(obj[keys[j+""]]>=1000000){console.log(keys[j+""]);cnt++;}
      }
      if(cnt==0)console.log("NA");
      if(arr[0]==0)break;
      obj={};
   }else if(arr.length==3){
       if(!obj.hasOwnProperty(arr[0]))obj[arr[0]]=arr[1]*arr[2];
       else obj[arr[0]]+=arr[1]*arr[2];
   }
}