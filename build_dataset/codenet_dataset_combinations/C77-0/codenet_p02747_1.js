"use strict";
const Main = (input) =>{
   let xs = input.trim().split('');
   let len = xs.length;
   let ans = 0;

    for(let i =0; i<=len; i++) {
       if(i%2==0 && xs[i]=='h'&&[i+1]!='h') {
       	ans+=1;
       }else if(i%2==1 && xs[i]=='i' &&xs[i+1]!='i'){
        ans+=1;
       }else{
        ans+=0;
       }
    }
    if(ans>=2){
    console.log('Yes');
    }else{
    console.log('No');
    }
}
Main(require('fs').readFileSync('/dev/stdin','utf8'));