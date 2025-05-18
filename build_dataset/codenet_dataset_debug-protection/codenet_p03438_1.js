function Main(input) {
  input = input.split("\n");
  var n = parseInt(input[0]);
  a = new Array(n).fill(0);
  b = new Array(n).fill(0);
  tmpa = input[1].split(" ");
  tmpb = input[2].split(" ");
  var suma=0;
  var sumb=0;
  var dif=0;

  for(i=0;i<n;i++){
    a[i]=parseInt(tmpa[i]);
    suma += a[i];
    b[i]=parseInt(tmpb[i]);
    sumb += b[i];
    dif+=Math.abs(a[i]-b[i]);
  }
  var ans ="No";
  if(suma<=sumb&&dif<=(sumb-suma)*3){
    ans="Yes";
  }
  console.log('%s', ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));