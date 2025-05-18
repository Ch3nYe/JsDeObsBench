"use strict";
    
const main = arg => {
    const times = arg.trim().split("\n").map(n=>parseInt(n));
    let min = 10;
    
    let sum = 0;
    
    for(let i=0; i<times.length; i++) {
        let digitOne   = String(times[i]).split("");
        digitOne = parseInt(digitOne[digitOne.length - 1]);
        
        let digitMinus = 10 - digitOne;
        sum += parseInt(times[i]);
        
        if(digitMinus !== 10) {
            sum += digitMinus;
        }
        
        if(digitMinus !== 10 && digitOne < min) {
            min = digitOne;
        }
    }

    console.log(parseInt(sum - (10 - min)));
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));
