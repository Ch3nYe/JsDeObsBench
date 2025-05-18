function Main(s) {
  const sl = s.length - 1;
  const sa = s.split("").map(a => parseInt(a));
  var ans = 0;
  for(var i = 0; i < 1 << sl; i++){
    var b = 0;
    for(var j = 0; j < sl; j++){
      b += sa[j];
      if(i & 1 << j){
        ans += b;
        b = 0;
      }
      else b *= 10;
    }
    ans += b + sa[sl];
 }
  console.log(ans);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());