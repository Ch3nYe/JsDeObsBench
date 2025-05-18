process.stdin.resume();
process.stdin.setEncoding('utf8');
process.stdin.on('data', function(chunk) {
    main(chunk.trim());
});

function main(chunk){
    var lines = chunk.split("\n");
    for(var n=0;n<lines.length-1;){
        var H = Number(lines[n].split(" ")[0]);
        var W = Number(lines[n].split(" ")[1]);
        var map = [];
        n++;
        for(var i=0;i<H;i++){
            map[i] = lines[n].split("");
            n++;
        }
        console.log(calc(map,0,0));
    }
}
function calc(map,h,w){
    if(map[h][w] == "."){
        return w + " "+ h;
    }
    if(map[h][w] == "1"){
        return "LOOP";
    }
    switch(map[h][w]){
    case '>':
        map[h][w] = "1";
        return calc(map,h,w+1);
    case '<':
        map[h][w] = "1";
        return calc(map,h,w-1);
    case 'v':
        map[h][w] = "1";
        return calc(map,h+1,w);
    case '^':
        map[h][w] = "1";
        return calc(map,h-1,w);
    }
}