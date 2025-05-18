function gcd(i,j,k){
    var max = 0;
    if(max<i){max = i;}
    if(max<j){max = j;}
    if(max<k){max = k;}
    var a =0;
    for(var count=1;count<=max;count++){
        if((i%count ==0 && i>=count) && (j%count == 0 && j>=count) && (k%count == 0 && k>=count)){a = count;}    
    }

    return a;

}

function Main(input) {
    var N = parseInt(input,10);
    var sum = 0;
    for(var i=1;i<=N;i++){
        for(var j=1;j<=N;j++){
            for(var k=1;k<=N;k++){
                //console.log(i+","+j+","+k)
                sum += gcd(i,j,k);
            }
        }
    }
    
    console.log(sum);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
