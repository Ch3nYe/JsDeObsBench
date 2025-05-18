function Main(input) {
    input = input.split("\n");
  	n = Number(input[0].split(" "));
    a = input[1].split(" ").map(Number);
    b = input[2].split(" ").map(Number);
    c = input[3].split(" ").map(Number);
  	var count = 0;
  	for(var i=0; i<n; i++){
      count += b[a[i]-1];
      if(a[i] === a[i-1]+1){
      	count += c[a[i]-2];
      }
    }
  console.log(count);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));