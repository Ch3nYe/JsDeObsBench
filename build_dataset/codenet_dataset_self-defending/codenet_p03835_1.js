function Main(input) {
  let inputs = input.split(' ');
  let K = Number(inputs[0]);
  let S = Number(inputs[1]);
  let count = 0;
  for(let X = 0; X <= K; X++) {
    for(let Y = 0; Y <= K; Y++) {
      for(let Z = 0; Z <= K; Z++) {
        if (X + Y + Z === S) {
          count++;
        }
      }
    }
  }
  console.log(count);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));