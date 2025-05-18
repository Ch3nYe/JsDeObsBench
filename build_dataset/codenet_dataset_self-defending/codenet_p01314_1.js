function Main(input){
    input = input.split("\n");
    for(var i = 0;1;i++){
        var n = parseInt(input[i],10);var ans = 0;
        if(n == 0)
            break;
        for(var j = 2;j < n;j++){
            if(n - j * (j - 1) / 2 > 0 && (n - j * (j - 1) / 2) % j == 0){
                ans++;
            }
        }
        console.log(ans);
    }
}
Main(require("fs").readFileSync("/dev/stdin","utf8"));