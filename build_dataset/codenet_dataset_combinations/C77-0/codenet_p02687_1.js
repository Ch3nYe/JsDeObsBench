"use strict";
const Main = input => {
    if(input === "ABC") {
        console.log("ARC");
    } else {
        console.log("ABC");
    }
}
 
Main(require("fs").readFileSync("/dev/stdin", "utf8"));