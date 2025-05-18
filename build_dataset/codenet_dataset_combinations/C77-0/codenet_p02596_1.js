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
    const N = lines[0]-0;
    let tmp = 0;
    for(let i=1;i<=1000000;i++){
        tmp *= 10;
        tmp += 7;
        tmp %= N;
        if(tmp === 0){
            console.log(i);
            return;
        }
    }
    console.log(-1);
});

function check(ans){
    
    return true;
}
