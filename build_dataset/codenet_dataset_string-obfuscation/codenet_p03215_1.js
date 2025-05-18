'use strict'
function _(s){let l=s.split('\n');if(l[l.length-1]=='')l.pop();this.l=l;this.y=0}
_.prototype.ints = function(){return this.l[this.y++].split(' ').map(v=>+v)}
_.prototype.intv = function(){const y=this.y;this.y=this.l.length;return this.l.slice(y).map(v=>+v)}
_.prototype.strv = function(){const y=this.y;this.y=this.l.length;return this.l.slice(y)}
_.prototype.strn = function(n){const y=this.y;this.y+=n;return this.l.slice(y,y+n)}
const $ = new _(require("fs").readFileSync("/dev/stdin", "utf8"));
(()=>{

const nk = $.ints()
const n = nk[0]
const k = nk[1]
const a = $.ints()

const rr = []
for(let i=0;i<n;i++){
    let s = 0;
    for(let j=i;j<n;j++){
        s+=a[j]
        rr.push(s)
    }
}
rr.sort((a,b)=>b-a)
let res = 0
for(let d=41; d>=0; d--){
    let border = 1 << d
    let num = rr.filter(e=>(e&(res+border)) === (res+border)).length
    if(num>=k){
        res += border
    }
}
console.log(res)




})()