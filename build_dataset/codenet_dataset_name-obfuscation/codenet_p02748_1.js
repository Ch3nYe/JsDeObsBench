"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const A = parseInt(arg[0].split(" ")[0]);
    const B = parseInt(arg[0].split(" ")[0]);
    const M = parseInt(arg[0].split(" ")[0]);
    
    const freezer = arg[1].split(" ").map(n=>parseInt(n));
    const renzi   = arg[2].split(" ").map(n=>parseInt(n));
    
    const xyc = arg.slice(3, M + 4);
    
    const minFreeze = Math.min(...freezer);
    const minRenzi = Math.min(...renzi);
    
    let temp = minFreeze + minRenzi;
    
    for(let i in xyc) {
        let x = parseInt(xyc[i].split(" ")[0]);
        let y = parseInt(xyc[i].split(" ")[1]);
        let c = parseInt(xyc[i].split(" ")[2]);
        
        let cost = freezer[x-1] + renzi[y-1] - c;
        
        if(cost <= temp) {
            temp = cost;
        }
    }
    
    console.log(temp);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));