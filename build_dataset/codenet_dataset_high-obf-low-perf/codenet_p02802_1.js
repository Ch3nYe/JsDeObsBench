"use strict";

function Main(input) {
  let lines = input.split("\n");
  let numInfo = lines.shift().split(" ")[1];
  // 答えを調べる用のMap
  let ansObj = {};
  for(let i = 0; i < numInfo;i++){
    	let quesNum = lines[i].split(" ")[0];
    	let ansKind = lines[i].split(" ")[1];
    	if(ansObj[quesNum] === undefined){
          ansObj[quesNum] = `${ansKind}`;
        } else {
        ansObj[quesNum] += `,${ansKind}`;
        }
  }
  let WANum = 0;
  let ACNum = 0;
  // objectは直接要素数は取れないらしい
  // 直線状に解いてるのが良くなかったのでは？
  let ansObjKeys = Object.keys(ansObj);
    for(let i = 0; i < ansObjKeys.length; i++){
      let targetKey = ansObjKeys[i];
      // 対象を配列として切り出したもの
      let target = ansObj[targetKey].split(",");
        for(let j = 0; j < target.length; j++){
          if(target[j] == 'AC') {
            ACNum++;
            break;
          } else {
            WANum++;
          } 
        }
    }
  console.log(ACNum + " " + WANum);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
