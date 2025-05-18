process.stdin.resume();
process.stdin.setEncoding('utf8');

process.stdin.on('data', function (chunk) {
    var aaa = chunk.toString();
    var line = aaa.split("\n")
    //line.pop();
    line.shift();
    for(var i in line){
        var l = line[i].split(" ")
        for(var i in l){
            l[i] = new Number(l[i]);
        }
        l.sort(function(a,b){
            if( a > b ) return -1;
            if( a < b ) return 1;
            return 0;
        });
        var num1 = new Number(l[0]) *new Number(l[0]);
        var num2 = new Number(l[1])*new Number(l[1]);
        var num3 = new Number(l[2])*new Number(l[2]);
        var num4 = num2+num3;
        if(num1 === num4){
            console.log("YES");
        }else{
            console.log("NO")
            
        }
    }
});