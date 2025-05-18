const mod = 10**9 +7;

function pow (x,y){
    var r = 1;
    for (var i=1; i<=y; i++){
        r = (r * x) % mod;
    }
    return r;
};


function Main (input){
    const [N] = input.trim().split(' ').map(x => parseInt(x));
    var count = pow(10,N)-(pow(9,N)*2)+pow(8,N);
    count = count % mod;
    count = (count + mod) % mod;
    console.log(count)
};


Main(require("fs").readFileSync("/dev/stdin", "utf8"));
