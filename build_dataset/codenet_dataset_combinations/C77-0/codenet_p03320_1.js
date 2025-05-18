function Main(s){
  k = +s;
  var ans = [];
  var x = 1;
  var y = "";
  for(var i = 0; i < k; i++){
    ans[i] = x + y;
    if(x === 9){
      x = 1; y += "9";
    }else x++;
  }
  console.log(ans.join("\n"));
}
Main(require("fs").readFileSync("/dev/stdin","utf8"));