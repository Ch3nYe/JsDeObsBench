function Main(input){
  let Red = 0;
  let Blue = 0;
  const input_line = input.split('\n');
  inputS = input_line[1].split('');
  for (i = 0; i < inputS.length; i++) {
    if (inputS[i] === 'R'){
      Red++;
    }else {
      Blue++;
    }
  }
//  inputS.forEach((s) => {
//    if (s === 'R'){
//      console.log("Red++");
//      Red++;
//    } else {
//      console.log("Blue++");
//      Blue++;
//    }
//  });
  console.log(Red > Blue ? "Yes" : "No");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
