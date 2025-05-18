function Main(input) {
  input = input.split("\n");
  var n = parseInt(input[0]);
  tmp = input[1].split(" ");
  a = new Array(n);
  var odd=0;
  var even=0;
  var four=0;
  for(i=0;i<n;i++){
    a[i]=parseInt(tmp[i]);
    if(a[i]%4==0){
      four++;
    }else if(a[i]%2==0){
      even++;
    }else{
      odd++;
    }
  }
  var ans ="No";
  if(odd<=four){
    ans="Yes";
  }else if(four+1==odd&&even==0){
    ans="Yes";
  }

  console.log('%s', ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));