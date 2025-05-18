main = function(input) {
    var data = input.split(' ');
    var n = parseInt(data[0]);
    var a = parseInt(data[1]);
    var b = parseInt(data[2]);
    
    var ans = (n - 2) * (b - a) + 1;
    
    
    console.log(Math.max(ans, 0));
};

main(require("fs").readFileSync("/dev/stdin", "utf8"));