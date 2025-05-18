function keta(num) {
    for(var i=1; i<=6; i++) {
        if(num < 10**i) return i%2;
    }
}

function Main(input) {
    var ans = 0;
    var cnt = 1;
    while(cnt <= input) {
        ans += keta(cnt);
        cnt++;
    }
    console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
