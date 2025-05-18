var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
while(true){
   var nh=arr.shift();
   if(nh=="0 0")break;
   nh=nh.split(" ").map(Number);
   var n=nh[0];
   var h=nh[1];
   var xyz=[];
   for(var i=0;i<n;i++){
      xyz[i]=[];
      for(var j=0;j<n;j++){
         xyz[i][j]=[];
         for(var k=0;k<n;k++){
            xyz[i][j][k]=0;
         }
      }
   }
   for(var I=0;I<h;I++){
      var ary=arr.shift().split(" ");
      var c=ary.shift();
      ary=ary.map(function(v){return v-1;});
      if(c=="xy"){for(var i=0;i<n;i++)xyz[ary[0]][ary[1]][i]=1;}
      else if(c=="xz"){for(var i=0;i<n;i++)xyz[ary[0]][i][ary[1]]=1;}
      else if(c=="yz"){for(var i=0;i<n;i++)xyz[i][ary[0]][ary[1]]=1;}
   }
   var cnt=0;
   for(var i=0;i<n;i++){
      for(var j=0;j<n;j++){
         for(var k=0;k<n;k++){
            if(xyz[i][j][k]==0)cnt++;;
         }
      }
   }
   console.log(cnt);
}