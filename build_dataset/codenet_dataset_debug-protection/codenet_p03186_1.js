'use strict';

function Main(input) {

  input = input.trim().split(" ").map(Number);
  let badKusuri = input[0];
  let goodKusuri = input[1];
  let goodPoison = input[2];
  
  for(;(goodKusuri>0)&&(goodPoison>0);){
  	goodKusuri--;
    goodPoison--;
  }
  
  if(goodPoison == 0){
  	goodKusuri = 0;
  } else {
  	for(;(badKusuri>0)&&(goodPoison>0);){
  		badKusuri--;
      	goodPoison--;
  	}
  }
  
  if(goodPoison > 0){
  	goodPoison--;
  }
  
  console.log((input[1] + input[2]) - (goodKusuri + goodPoison));
  
  
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));