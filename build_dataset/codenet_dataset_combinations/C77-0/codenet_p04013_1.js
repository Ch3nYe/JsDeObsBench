function Main(input) {
  input = input.split("\n");
  tmp1 = input[0].split(" ");
  var n = parseInt(tmp1[0]);
  var a = parseInt(tmp1[1]);
  tmp= input[1].split(" ");
  x=new Array(n);
  var sum2=0;
  for(i=0;i<tmp.length;i++){
    x[i]=parseInt(tmp[i]);
  }
  var s=0;
  for(i=0;i<n;i++){
    sum2=sum2+x[i];
  }
  var b = new Array(sum2+1);
  for(var y = 0; y < sum2+1; y++) {
    b[y] = new Array(n+1).fill(0);
  }
  b[0][0]=1;
  for(j=0;j<n;j++){
    for(i=sum2;i>=0;i--){
      for(k=0;k<n+1;k++){
        if(b[i][k]>=1){
          b[i+x[j]][k+1]=b[i+x[j]][k+1]+b[i][k];
        }
      }
    }
  }
  for(i=1;i<=n && i*a<=sum2;i++){
      s=s+b[i*a][i];
  }


  console.log('%s', s);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));