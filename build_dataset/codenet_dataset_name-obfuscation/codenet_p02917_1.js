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
    const list = lines[1].split(" ").map(v=>v-0);
    let ans = 0;
    for(let i=0;i<list.length-1;i++){
        ans+=Math.min(list[i],list[i+1])
    }
    ans += list[list.length-1] + list[0];
    console.log(ans);
});
