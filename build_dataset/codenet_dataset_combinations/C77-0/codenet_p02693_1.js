function Main(input) {
	var str = input;
	const n = str.split('\n');
	var k  =Number(n[0]);
	var p = n[1].split(" ");	
	var a = Number(p[0]); 
	var b = Number(p[1]);
	var ans = "";
	
	for(var i = a; i <= b; i++){
		if(i%k===0){
			ans = "OK";
		}
	}
if(ans !== "OK"){
	ans = "NG"
}
 console.log(ans);
 }
 
 
//*おまじない
Main(require("fs").readFileSync("/dev/stdin", "utf8"));