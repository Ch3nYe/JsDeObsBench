function main(input){
  input = input.trim();
  let list = input.split("");
  let answer = 0;
  for(let i=0; i<list.length; i++){
    if(list[i]==="R"){
      if(answer===0){answer++;
      }else if(list[i-1]==="R"){
        answer++;
      }                 
    }
  }
  console.log(answer);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));