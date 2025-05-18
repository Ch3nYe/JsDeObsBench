process.stdin.resume();
process.stdin.setEncoding('utf8');

var lines = [];
var reader = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout
});
reader.on('line', (line) => {
  lines.push(line);
});
reader.on('close', () => {
    const a = lines[1].split(" ").map(v=>v-0);
    const b = lines[1].split(" ").map(v=>v-0).sort((a,b)=>a-b);
    let ans = a.filter((v,i)=>v!=b[i]).length;
    console.log(ans<=2?"YES":"NO");
});

min = (...a)=>{return a.reduce((a,b)=>a<b?a:b, a[0])};
