function Main(input) {
  var output = 0;
  var list = [];
  var output = input.length;
  var tmp = "";
  for(var i = input.length - 1; i >= 0; i--){
    var tmp2 = input.slice(i, i + 1);
    if(list.length == 0){
      list.push(tmp2);
      continue;
    }else{
      var tmp1 = list[list.length - 1];
      if(tmp1 == tmp2){
         list.push(input.slice(i - 1, i) + tmp2);
        i--;
      }else{
        list.push(tmp2);
      }
    }
  }
  output = list.length;
  var first = input.slice(0, 1);
  var second = input.slice(1, 2);
  if(first == second){
     output--;
  }
  
  console.log(output.toString());
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));
