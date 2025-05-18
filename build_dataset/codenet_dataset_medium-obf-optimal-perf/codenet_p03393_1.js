function Main(s){
  const n = s.length;
  const a = "a".charCodeAt();
  var b = Array(26).fill(1);
  var i;
  if(n < 26){
    for(i = 0; i < n; i++){
      b[s.charCodeAt(i) - a] = 0;
    }
    for(i = 0; i < 26; i++){
      if(b[i]){
        s += String.fromCharCode(a + i);
        break;
      }
    }
  }else{
    if(s === "zyxwvutsrqponmlkjihgfedcba"){
      console.log(-1); return;
    }
    var c = s[25];
    b[s.charCodeAt(25) - a] = 0;
    for(i = 24; i >= 0; i--){
      if(c > s[i]){
        c = s.charCodeAt(i) - a;
        s = s.slice(0,i)
        break;
      }else{
        b[s.charCodeAt(i) - a] = 0;
      }
    }
    for(var j = c - a; j < 26; j++){
      if(b[j] === 0){
        s += String.fromCharCode(a + j);
        break;
      }
    }
  }
  console.log(s);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8").trim());