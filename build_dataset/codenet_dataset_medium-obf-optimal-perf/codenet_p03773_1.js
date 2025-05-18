process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
    var lines = chunk.toString().split(' ');
    var first = Number(lines[0]);
    var second = Number(lines[1]);

    var time = second + first;
    
    if(
        time<24)
        {
            console.log(time)
        }else{
            console.log(time-24)
        }
        
//    console.log(lines);
});