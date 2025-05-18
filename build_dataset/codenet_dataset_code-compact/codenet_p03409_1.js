function Main(s) {
	s = s.split("\n");
	var n = parseInt(s[0]);
	var a = Array(n);
	var c = Array(n);
	for(var i = 0; i < n; i++){
		a[i] = s[i+1].split(" ").map(a => parseInt(a));
	}
	for(var i = 0; i < n; i++){
		c[i] = s[i+n+1].split(" ").map(a => parseInt(a));
	}
	a = a.sort((a,b) => a[1] - b[1]);
	a = a.sort((a,b) => a[0] - b[0]);
	c = c.sort((a,b) => a[0] - b[0]);
	c = c.sort((a,b) => b[1] - a[1]);
	
	var ans = 0;
	for(i = n-1; i >= 0; i--){
		for(var j = c.length-1; j >= 0; j--){
			if(a[i][0] < c[j][0] && a[i][1] < c[j][1]){
				ans++;
				c.splice(j,1);
				break;
			}
		}
	}
	console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());