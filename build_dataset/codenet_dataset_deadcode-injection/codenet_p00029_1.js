process.stdin.on("data",function(c,o,m){
	o={},n=0,s="";
	(c+"").trim().split(" ").some(function(a){
		n<(o[a=a.toLowerCase()]?++o[a]:(o[a]=1))&&(n=o[m=a]);
		s.length<a.length&&(s=a);
	});
	console.log(m+" "+s);
}).resume();