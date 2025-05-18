function pad(n){
	while(n.length<7){
		n="0"+n
	}
	return n;
}
function divide(s){
	var a=[],i=0,l=s.length,d=7;
	for(;(a[i]=s.slice((i+1)*-d,l+i*-d)).length>d-1;i++);
	return a;
}
function unite(a){
	return a.concat().reverse().join("").replace(/^0*/,"");
}
function largeSum(n,m){
	for(var h=0,o=[],i=0,l=Math.max(n.length,m.length);i<l||h!=0;i++){
		var a=((parseInt(n[i],10)||0)+(parseInt(m[i],10)||0)+(+h)).toString(10);
		o[i]=a.length>7?(h=a.slice(0,1),a.slice(1)):(h=0,pad(a));
	}
	return o;
}
process.stdin.on("data",function(c){
	var a=(c+"").trim().split("\n");
	for(var i=0,l=+a.shift()*2;i<l;i+=2){
		var s=unite(largeSum(divide(a[i]),divide(a[i+1])));
		console.log(s==""?0:s.length>80?"overflow":s);
	}
}).resume();