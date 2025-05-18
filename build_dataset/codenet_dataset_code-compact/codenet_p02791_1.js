"use strict"
 
function Main(s) {
  s = s.trim().split('\n');
  const n = Number(s[0]);
  const p = s[1].trim().split(' ').map(Number);
 
  let cnt=0;
  for(let i=1; i<=n; i++){
    let flg = true;
 
    let t = p.slice(0, i);
    let x = 0;
    while(x < t.length-1) {
      if(t[x] < p[i-1]) flg=false;
      x++;
    }
 
    if(flg)cnt++;
  }
  console.log(cnt);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));