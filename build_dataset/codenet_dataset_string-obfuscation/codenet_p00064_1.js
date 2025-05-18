var ans=0;
require("fs").readFileSync("/dev/stdin", "utf8").match(/\d+/g).forEach(function(elem){
	ans += parseInt(elem, 10);
});
console.log(ans);