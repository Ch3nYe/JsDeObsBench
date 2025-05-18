var p=require("fs").readFileSync("/dev/stdin","utf8");
p = p.split("\n").map(a=>+a);
console.log(main());
function main(){
  var N = "No";
  var n = p[0];
  var t = 0;
  for(i = 1; i <= n; i++){
    while(t > i){if(p[i] !== i)return N;i++;}
    var j = i;
    while(p[j] !== i){
      j++;
      if(p[j] !== j)return N;
      j++;
    }
    t = j;
    while(j > i){
      if(p[j-2] < p[j-1])return N;
      p[j] = p[j-2]; j -= 2;
    }
  }
  return "Yes";
}