"use strict"
const Main = (input) =>{
	let xs = input.trim().split(' ').map(v=>parseInt(v,10));
    let a = xs[0];
    let b = xs[1];
    let ans = 1;
    if(a >= b){
    ans = 1;
    }else{ 
    	for(let i = 1; (a-1)*i+1 < b; i++){
    	ans += 1;
    	}
    }
    console.log(ans);
}
Main(require('fs').readFileSync('/dev/stdin','utf8'));
