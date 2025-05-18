Main(require("fs").readFileSync("/dev/stdin", "utf8"));

function Main(args){
    input = args.split("\n");
    const N = parseInt(input[0]);
    var tmp;
    var result = 0;
    
    for(var i=1; i<=N; i++){
        tmp = input[i].split(" ");
        result += (parseInt(tmp[1]) - parseInt(tmp[0]) + 1);
    }

    console.log(result);
}