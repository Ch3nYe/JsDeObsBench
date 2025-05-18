function Main(s){
  s = s.split("\n");
  var k = +s[1];
  s = s[0];
  var a = 96;
  var sl = s.length;
  var ans = {};
  var j;
  loop:
  while(a <= 122){
    a++;
    var n = s.indexOf(String.fromCharCode(a));
    while(n !== -1){
      for(j = 0; j < k; j++){
        if(n + j >= sl)break;
        ans[s.slice(n, n + j + 1)] = 1;
      }
      n = s.indexOf(String.fromCharCode(a), n+1);
    }
    j = 0;
    var ans2 = [];
    for(i in ans){
      j++;
      ans2.push(i)
    }
    if(j >= k){
      ans2.sort();
      console.log(ans2[k-1]);
      break loop;
    }
  }
}

Main(require("fs").readFileSync("/dev/stdin","utf8"));