"use strict";
var input=require("fs").readFileSync("/dev/stdin","utf8");
var cin=input.split(/ |\n/),cid=0;
function next(a){return a?cin[cid++]:+cin[cid++];}
function nexts(n,a){return a?cin.slice(cid,cid+=n):cin.slice(cid,cid+=n).map(a=>+a);}
function nextm(h,w,a){var r=[],i=0;if(a)for(;i<h;i++)r.push(cin.slice(cid,cid+=w));else for(;i<h;i++)r.push(cin.slice(cid,cid+=w).map(a=>+a));return r;}
function xArray(v){var a=arguments,l=a.length,r="Array(a["+--l+"]).fill().map(x=>{return "+v+";})";while(--l)r="Array(a["+l+"]).fill().map(x=>"+r+")";return eval(r);}

var myOut = main();
if(myOut !== undefined)console.log(myOut);

function main(){
  var a = nexts(7);
  var ans = a[1] + ((a[0]/2|0) + (a[3]/2|0)+ (a[4]/2|0)) * 2;
  switch(a[0]%2 + a[3]%2 + a[4]%2){
    case 3: ans += 3; break;
    case 2: if(a[0]*a[3]*a[4])ans += 1; break;
  }
  return ans;
}