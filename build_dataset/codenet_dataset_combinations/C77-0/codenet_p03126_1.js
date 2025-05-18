function Main(input) {
    input = input.split("\n");
    var m = input[0].split(" ").map(Number);
    input.shift();
    var arr = new Array(35).fill(0);
    input.forEach(function(val){
        var mem = val.split(" ").map(Number);
        mem.shift();
        mem.forEach(function(p){
            arr[p]++;
        });
    })
    var ans = 0;
    arr.forEach(function(val){
      if(val==m[0]) ans++;  
    })
    console.log(ans);
}Main(require("fs").readFileSync("/dev/stdin","utf8").trim());
