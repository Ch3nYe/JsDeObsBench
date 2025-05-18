function Main(input) {
    input = input.trim().split("\n").map(function(x) { return x.split(" ")});    
    var n = parseInt(input[0][0], 10);
    var originalN = n;
    var v_ans = [];
    var start = 2;
    whole_loop:
    while (true){
        for (var i = start; i <= Math.sqrt(n); i++){
            if (n % i === 0) {
                v_ans.push(i);
                n /= i;
                start = i;
                continue whole_loop;
            }
        }
        v_ans.push(n);
        break;
    }
    console.log(originalN.toString() + ": " + v_ans.join(" "));
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
