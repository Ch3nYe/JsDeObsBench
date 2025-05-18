var toInt = x=>parseInt(x,10);
var toIntArr = arr=>arr.map(x=>toInt(x));
var abs = x=>x>0?x:-x;
function min(){var rest = arguments,val=rest[0];for(var i=1;i<rest.length;i++)if(rest[i]<val)val = rest[i];return val}
function max(){var rest = arguments,val=rest[0];for(var i=1;i<rest.length;i++)if(rest[i]>val)val = rest[i];return val}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
 
function Main(input){
	var input = input.split('\n');
	var nk = toIntArr(input[0].split(' '));
	var x = nk[0];
	var y = nk[1];
	var a = y/x;
  	var temp = 1;
 	var ans = 0;
    while(temp<=a){
    	temp *= 2;
      	ans++;
      //console.log(ans,temp)
    }

	console.log(ans);
}