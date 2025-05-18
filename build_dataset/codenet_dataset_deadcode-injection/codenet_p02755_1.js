"use strict";
    
const main = arg => {
    arg = arg.trim().split("\n");
    const A = parseInt(arg[0].split(" ")[0]);
    const B = parseInt(arg[0].split(" ")[1]);
    
    // X * 0.08 = A;
    // X * 0.1  = B;
    
    // const X = A / 0.08;
    
    // if(X % 1 !== 0) {
    //     console.log(-1);
    //     return;
    // }
    
    // const temp1 = Math.floor(X * 0.08);
    // const temp2 = Math.floor(X * 0.1);
    
    // console.log(temp2)
    
    // if(temp1 === A && temp2 === B) {
    //     console.log(X);
    //     return;
    // }
    
    // console.log(-1);

    for(let i=1; i<=10000; i++) {
        const temp1 = Math.floor(i * 0.08);
        const temp2 = Math.floor(i * 0.1);
        
        if(temp1 === A && temp2 === B) {
            console.log(i);
            return;
        }
    }
    
    console.log(-1);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));