'use strict'
const i = require("fs").readFileSync("/dev/stdin", "utf8");
let r = 'Christmas ';
switch (i) {
    case '22':
        r = r + 'Eve Eve Eve';
        break
    case '23':
        r = r + 'Eve Eve';
        break
    case '24':
        r = r + 'Eve'
        break
    case '25':
        r = r;
        break
}
console.log(r);