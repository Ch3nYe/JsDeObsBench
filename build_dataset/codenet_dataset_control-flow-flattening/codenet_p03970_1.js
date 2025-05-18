function Main(input) {
	input = input.trim();
  var output = 0;
  var seijou = "CODEFESTIVAL2016";
  for(var i = 0; i < input.length; i++){
    var tmp1 = input.slice(i,i+1);
    var tmp2 = seijou.slice(i,i+1);
    if(tmp1 != tmp2){
       output++;
       }
  }
  
  console.log(output);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
