"use strict";
const Main = (input) =>{
   let xs = input.trim().split(' ').map(v=>parseInt(v,10));
   let m = xs[0];
   let n = xs[1];
   let r = 0;
   let d = 0;
   let x = m;
   let y = n;
   if(m >= n) {
        	while (n > 0) {
        		let r = m % n; 
        		m = n;     
        		n = r;     
        	}
        	d = m;
        }else{ 
        	while (m > 0) {
        		r = n % m; 
        		n = m;     
        		m = r;     
        	}
        	d = n;
        }
        let ans = x*y/d;
        console.log(ans);
}
Main(require('fs').readFileSync('/dev/stdin','utf8'));