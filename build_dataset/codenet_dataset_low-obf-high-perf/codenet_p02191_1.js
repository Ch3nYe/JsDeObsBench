var input = require('fs').readFileSync('/dev/stdin', 'utf8');
var arr=input.trim().split("\n");
var [n,q]=arr.shift().split(" ").map(Number);
var ary=arr.shift().split(" ").map(Number);
ary.sort((a,b)=>a-b);
var tansaku=function(x,str){
    var first=-1;
    var last=ary.length;
    while (last-first>1){
        var mid=first+Math.floor((last-first)/2);
        if(ary[mid]<x)first=mid;
        else if(str=="ookii" && ary[mid]==x)first=mid;
        else last=mid;
    }
    return last;
};
var ans=[];
arr.forEach(v=>{
   var [l,r]=v.split(" ").map(Number);
   ans.push(tansaku(r,"ookii")-tansaku(l,"izyou"));
});
console.log(ans.join("\n"));
