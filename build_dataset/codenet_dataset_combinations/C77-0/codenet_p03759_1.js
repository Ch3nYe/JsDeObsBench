"use strict";
    
const main = arg => {
    const [a, b, c] = arg.split("\n")[0].split(" ");
    console.log(b - a == c - b ? "YES" : "NO");
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));