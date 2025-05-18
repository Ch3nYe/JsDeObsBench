function Main(input){
    input = input.split(" ");
    tmp = parseInt(input[0]) + parseInt(input[1]) + parseInt(input[2]);
    if(tmp > 21){
     console.log("bust");   
    }else{
     console.log("win");
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));