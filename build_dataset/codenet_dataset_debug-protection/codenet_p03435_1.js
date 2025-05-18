"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const c = arg.map(n=>n.split(" ").map(l=>parseInt(l)));
    
    // a1の仮定100通りを試す
    for(let a1=0; a1<=100; a1++) {
        // a1が決まればb1,b2,b3も決まる
        const b1 = c[0][0] - a1;
        const b2 = c[1][0] - a1;
        const b3 = c[2][0] - a1;
        
        // そうすると、他のaの値も全て確定するので正しいか検証する
        for(let a2=0; a2<=100; a2++) {
            if(a2 + b1 !== c[0][1]) continue;
            if(a2 + b2 !== c[1][1]) continue;
            if(a2 + b3 !== c[2][1]) continue;

            for(let a3=0; a3<=100; a3++) {
                if(a3 + b1 !== c[0][2]) continue;
                if(a3 + b2 !== c[1][2]) continue;
                if(a3 + b3 !== c[2][2]) continue;
                
                console.log("Yes");
                return;
            }
        }
    }
    
    console.log("No");
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));