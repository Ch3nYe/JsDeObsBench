function main(input){
    var ans=1;
    var inputNum=toInt(input);
    for(var i=1;i<=input;i++){
        ans=ans*i;
    }
    console.log(ans);
}
function toInt(str){
    return parseInt(str, 10);
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));