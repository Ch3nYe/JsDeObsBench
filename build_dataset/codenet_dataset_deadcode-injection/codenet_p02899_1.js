function Main(input){
    input = input.split("\n");
    var N = [];
    var arr = input[1].split(" ").map(Number);
    for(var i=0;i<arr.length;i++){
        N.push([arr[i],i+1]);
    }
    N = N.sort(function(a,b){return a[0]-b[0]});
    var ans = "";
    for(i=0;i<N.length;i++){
        ans+=N[i][1]
        ans+=" ";
    }
   // console.log(N)
    console.log(ans.trim());
}Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());