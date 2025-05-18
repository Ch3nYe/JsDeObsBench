function Main(input) {
input = input.split("\n");

var n =Number(input[0]);
var d =Number(input[1].split(" ")[0]);
var x =Number(input[1].split(" ")[1]);
var array=[];
for(var i =0; i<input.length-2; i++){
    array.push(Number(input[i+2]));
}

var total=[]
for(var j =0; j<array.length; j++){

    for(var k=1; k<100;k++){
    if(d>=k*array[j]+1){
        total.push(k*array[j]+1);
}
    }
}

console.log(total.length+n+x);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));