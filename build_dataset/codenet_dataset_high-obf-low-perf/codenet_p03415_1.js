"use strict";

function main(arg) {
    const letters = arg.split("\n").map(n=>n.split(""));
    console.log(letters[0][0] + letters[1][1] + letters[2][2]);
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));