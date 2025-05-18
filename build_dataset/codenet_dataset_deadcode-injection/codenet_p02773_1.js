"use strict";
const main = arg => {
  	const rows = arg.trim().split("\n");
  	const N = rows.shift();
  	let wordsObj = {};
  	rows.forEach(row => {
    	if(wordsObj[row]){
        	wordsObj[row]++;
        } else {
        	wordsObj[row] = 1;
        }
    })
  	let ansArr = [];
  	let max = 0;
  	let output = (w) => {console.log(w)};
  	for(let i = 0; i < Object.keys(wordsObj).length; i++){
    	if(wordsObj[Object.keys(wordsObj)[i]] < max){	
          continue;
        } else if(wordsObj[Object.keys(wordsObj)[i]] > max){	
          	ansArr = [];
        	ansArr.push(Object.keys(wordsObj)[i]);
          	max = wordsObj[Object.keys(wordsObj)[i]];
        } else if(wordsObj[Object.keys(wordsObj)[i]]*1 == max){
        	ansArr.push(Object.keys(wordsObj)[i])
        }
    }
	ansArr.sort();
  	ansArr.forEach(output);
  	
}
main(require('fs').readFileSync('/dev/stdin', 'utf8'));