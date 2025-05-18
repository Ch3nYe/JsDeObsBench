function Main(input) {
    input = input.trim().split("\n").map(function(x) { return x.split(" ")});    
    var N = parseInt(input[0][0], 10);
    var RGBWithoutOrder = [1, 0, 0];
    var tmp1, tmp2, flag;
    var ans = 3;
    for (var i = 1; i < N; i++){
        tmp2 = 0;
        tmp1 = parseInt(input[1][i], 10);
        for (var x of RGBWithoutOrder){
            if (x === tmp1) tmp2 ++;
        }
        ans *= tmp2;
        ans %= (1e+9 + 7);

        for (var j = 0; j < 3; j++){
            if (RGBWithoutOrder[j] === tmp1){
                RGBWithoutOrder[j] ++;
                break;
            }
        }
    }
    console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));