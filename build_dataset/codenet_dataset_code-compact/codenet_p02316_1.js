function knapsack(){
   var C=[];
   for(var i=0;i<=N;i++)C[i]=[];
   for(var i=0;i<=W;i++)C[0][i]=0;
   for(var i=0;i<=N;i++)C[i][0]=0;
   for(var i=1;i<=N;i++){
      for(var j=1;j<=W;j++){
         if(items[i].w<=W){
            if(items[i].v+C[i-1][j-items[i].w]>C[i-1][j]){
               C[i][j]=items[i].v+C[i-1][j-items[i].w];
            }else{
               C[i][j]=C[i-1][j];
            }
         }else{
            C[i][j]=C[i-1][j];
         } 
      }  
   }
   return C[N][W];
}   
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
var nW=(Arr.shift()).split(" ").map(Number);
var n=nW[0];
var W=nW[1];
var N=0;
var items=[null];
for(var i=1;i<=n;i++){
   var arr=(Arr.shift()).split(" ").map(Number);
   var k=1;
   do{
      items.push({v:arr[0]*k,w:arr[1]*k});
      N++;
      k++;
   }while(arr[1]*k<=W);
}
var max=knapsack();
console.log(max);