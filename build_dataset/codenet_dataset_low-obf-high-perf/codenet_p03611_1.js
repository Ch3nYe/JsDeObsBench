"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const N = parseInt(arg[0]);
    const a = arg[1].split(" ").map(n=>parseInt(n)).sort((a,b)=>a-b);
    
    const set = new Set();
    
    let max = 0;
    
    for(let i=0; i<N; i++) {
        let cnt = 0;
        
        if(set.has(a[i])) {
            continue;
        }
        
        set.add(a[i]);
        
        for(let j=0; j<N; j++) {
            if(Math.abs(a[j] - a[i]) <= 1) {
                cnt++;
            }
        }
        
        if(cnt > max) {
            max = cnt;
        }
    }
    
    console.log(max);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
