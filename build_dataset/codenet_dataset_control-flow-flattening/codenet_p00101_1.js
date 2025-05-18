var input = require('fs').readFileSync("/dev/stdin", "utf8").trim();
input = input.split(/\n/);
for(let i=1;i<input.length;i++){
  console.log(input[i].replace('Hoshino','Hoshina'));
}