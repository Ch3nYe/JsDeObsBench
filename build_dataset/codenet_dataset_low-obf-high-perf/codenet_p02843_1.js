function Main(input) {
    const n = input.split("\n")[0];
    var ans = 0 
    if (n >= 2525){
        ans = 1
        console.log(ans);
    } else {
        for(var i = 1; i <= 25; i++){
            if (n >= i * 101 && n <= i* 105) {
                ans = 1
                break;
            }
        }
    }
    console.log(ans)
    }    
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
  