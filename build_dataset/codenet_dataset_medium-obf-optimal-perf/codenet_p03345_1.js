'use strict';

const DELIMITER = " ";
const A_INDEX = 0;
const B_INDEX = 1;
const K_INDEX = 3;
const LIMIT = Math.pow(10, 18);

const process = input => {
    const indexArr = input.split(DELIMITER);
    const ans = parseInt(indexArr[A_INDEX]) - parseInt(indexArr[B_INDEX]);
    const KString = indexArr[K_INDEX];
    // JS rounds up large numbers; simply get last digit for modulo
    const K = parseInt(KString.charAt(KString.length-1));

    if (Math.abs(ans) > LIMIT) {
        console.log('Unfair')
    } else {
        console.log(K % 2 === 0 || ans === 0 ? ans : -ans);
    }
}

process(require("fs").readFileSync("/dev/stdin", "utf8").trim());