"use strict";
function main(input) {
  const k = parseInt(input[0]);
  let i = 1;
  let runruncounter = 0;
  while(true){
    const j =  (i+"").split("").map(a => parseInt(a));
    let judge = true;

    for(let l=1;l<j.length;l++){
      //console.log(i);
      if(Math.abs(j[l]-j[l-1])>1){
        judge = false;
        if(j[l]===9){
          j[l-1]+=1;
          j[l]=0;
        }else{
          j[l]+=1;
        }
        //console.log(i +" " + j + " " + runruncounter  )
        i = parseInt(j.join(""));
        break;
      }
    }

    if(judge){
      runruncounter++;
      if(runruncounter===k){
        console.log(i);
        break;
      }
      i++;
    }
  }
}
main(require('fs').readFileSync('/dev/stdin', 'utf8').trim().split("\n"));