"use strict";

const main = input => {
  input = input.trim().split("\n");
  const K = parseInt(input[0].split(" ")[0]);
  const T = parseInt(input[0].split(" ")[1]);
  let a = input[1].split(" ").map((el)=>{
    return parseInt(el);
  });
  let max = a.reduce( function (previous, current) {
  	return previous > current ? previous:current;
  });
  if(max-1-(K-max) > 0){
    console.log(max-1-(K-max));
  }else{
    console.log(0);
  }
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));
