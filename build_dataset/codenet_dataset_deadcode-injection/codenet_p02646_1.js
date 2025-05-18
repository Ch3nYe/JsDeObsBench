function Main(input){
    const arr = input.trim().split("\n");
    const AV = arr[0].split(" ").map(Number);
    const BW = arr[1].split(" ").map(Number);
    const T  = Number(arr[2]);
    if(Math.abs(AV[0]-BW[0]) < T*(AV[1] - BW[1])){
        console.log("YES");
    } else{
        console.log("NO");
    }
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
