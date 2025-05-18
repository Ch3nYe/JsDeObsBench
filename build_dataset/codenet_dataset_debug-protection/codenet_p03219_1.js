const rl = require('readline')
    .createInterface({
        input: process.stdin,
    });

rl.on('line', (line) => {
    const param = line.split(" ");
    solve(Number(param[0]), Number(param[1]));
    rl.close();
});

function solve(x,y){
    console.log(x+y/2);
}
