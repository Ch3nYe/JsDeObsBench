function Main(input){
	input=input.split(/\s/);
	input.forEach(function(e,i,a){a[i]=Number(a[i]);});
	
	var ans="No";
	if(Math.abs(input[0]-input[2])<=input[3]){ans="Yes";}
	if(Math.abs(input[0]-input[1])<=input[3]&&Math.abs(input[1]-input[2])<=input[3]){ans="Yes";}
	
	console.log(ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));