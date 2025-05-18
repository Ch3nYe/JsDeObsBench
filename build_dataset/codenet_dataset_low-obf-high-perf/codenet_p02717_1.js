"use strict";
function main(input) {
    var line = input.split(" ");
    console.log(line[2] + " " + line[0] + " " + line[1]); 
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));