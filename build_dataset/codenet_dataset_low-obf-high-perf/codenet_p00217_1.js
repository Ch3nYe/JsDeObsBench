var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var Arr=(input.trim()).split("\n");
while(true){
    var AL=Arr.shift();
    if(AL==0)break;
    var pd=[];
    for(var i=0;i<AL;i++){
        var arr=(Arr.shift()).split(" ").map(Number);
        var p=arr[0];
        var d=arr[1]+arr[2];
        pd.push([p,d]);
    }
    pd.sort(function(a,b){
        if(a[1]<=b[1])return 1;
        else return -1;
    });
    console.log(pd[0].join(" "));
}