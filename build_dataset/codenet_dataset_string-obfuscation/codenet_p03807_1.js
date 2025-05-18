function Main(input) {
	input = input.split("\n");
	var arr = input[1].split(" ").map(Number);
	var m=0;
	var n=0;
	for(var i=0;i<arr.length;i++){
		if(arr[i]%2==0) m++;
		else n++;
	}
 // console.log(n,m)
	console.log((n%2==0&&((n/2)+m)%2==0)?"YES":"NO")
}Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());
