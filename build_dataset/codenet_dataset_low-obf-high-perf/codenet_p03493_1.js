function Main(input){
  	var args = input.split(" ");
  	var num = parseInt(args[0], 10); // 10進数
	var str = num.toString(10);
  	var count = 0;
	for(var i=0; i<str.length; i++){
      if(str[i]=="1"){
        count += 1;
      }
    }
  	console.log(count);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));