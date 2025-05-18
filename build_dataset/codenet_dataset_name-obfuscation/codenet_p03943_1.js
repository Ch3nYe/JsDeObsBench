function Main(input){
    input= input.split(" ");
    input= input.map(Number);
    children = 2;
    
    var sub = function(arry,num){
        var sum = 0;
        arry.forEach(element => {
            sum += element;
        });
        return arry.includes(sum/num);
    }
    
    if(sub(input,children)){
        console.log('Yes');
    }else{
        console.log('No');
    }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8")); 