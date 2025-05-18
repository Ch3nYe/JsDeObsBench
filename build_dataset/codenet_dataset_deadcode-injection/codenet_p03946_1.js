function Main(input) {
  input = input.split("\n");
  tmp = input[0].split(" ");
  var n = parseInt(tmp[0]);
  a = new Array(n).fill(0);
  for(i=0;i<n;i++){
    a[i]=parseInt(input[1].split(" ")[i]);
  }
  b = new Array(n).fill(0);
  var min=Math.pow(10,9);
  var max=-1;
  for(i=0;i<n;i++){
    min=Math.min(min,a[i]);
    if(max<a[i]-min){
      ans=1;
    }
    if(max==a[i]-min){
      ans++;
    }
    max=Math.max(max,a[i]-min);
  }
  console.log('%s', ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));