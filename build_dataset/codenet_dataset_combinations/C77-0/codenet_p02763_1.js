"use strict";
function main(input) {
  let n = parseInt(input[0]);
  let s = input[1];
 
  let q_l = parseInt(input[2]);
  let q = [];
 
  for(let j=0;j<q_l;j++){
    let kari = input[j+3].trim().split(" ")
    q[j] = parseInt(kari[0]);
    if(q[j]===1){
      let i = parseInt(kari[1]);
      let c = kari[2];
      let str1 = s.slice(0, i-1);
      let str2 = s.slice(i);
 
      s = str1 + c + str2;
    }else{
      let l = parseInt(kari[1]);
      let r = parseInt(kari[2]);
      let str = s.slice(l-1, r);
 
      //カウント
      let list = {};
      let counter = 0;
 
      for(let i=0;i<str.length;i++){
        if(list[str[i]]===undefined){
          counter++;
          list[str[i]] = true;
        }
      }
      console.log(counter);
    }
  }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8').trim().split("\n"));