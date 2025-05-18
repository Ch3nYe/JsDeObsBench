function main(data){
    input = data.split("");
    len = input.length;
    temp = []
    for(i = 0; i<len; i+=1){
        if(temp.indexOf(input[i]) === -1){
            temp.push(input[i]);
        }else{
            console.log("no");
            return;
        }
    }
    console.log("yes");
}
main(require("fs").readFileSync("/dev/stdin", "utf8"));