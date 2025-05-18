function Main(input){
    input = input.split("\n");
    for(var i = 0;1;i++){
        input[i] = input[i].split(" ");
        var r0 = parseInt(input[i][0],10);
        var w0 = parseInt(input[i][1],10);
        var c = parseInt(input[i][2],10);
        var r = parseInt(input[i][3],10);
        if(r0 == 0 && w0 == 0 && c == 0 && r == 0)
            break;

        var a = c * w0;
        if(a <= r0)
            console.log("0");
        else{
            console.log(Math.floor((a - r0 + r - 1) / r));
        }
    }
}
Main(require("fs").readFileSync("/dev/stdin","utf8"));