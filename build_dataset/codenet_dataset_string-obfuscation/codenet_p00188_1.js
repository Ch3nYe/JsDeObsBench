function binarySearch(A,key){
    var left = 0;
    var right = A.length-1;
    var cnt=0;
    while(true){
        cnt++;
        if(left==right)break;
        var mid =Math.floor((left + right)/2);
        if (A[mid] == key)return cnt;
        if (key < A[mid]) right = mid;
        else left = mid+1;
    }
    return cnt;
}
var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=input.trim().split("\n");
while(true){
   var n=Arr.shift()-0;
   if(n==0)break;
   var arr=[];
   for(var i=0;i<n;i++)arr.push(Arr.shift()-0);
   console.log(binarySearch(arr,Arr.shift()-0));
}