function Main(input) {
  input = input.split("\n");
  var n = parseInt(input[0]);
  a = new Array(n-1).fill(0);
  b = new Array(n-1).fill(0);
  for(i=0;i<n-1;i++){
    tmp = input[i+1].split(" ");
    a[i]=parseInt(tmp[0])-1;
    b[i]=parseInt(tmp[1])-1;
  }
  d1 = new Array(n).fill(n);
  d1[0]=0;
  d2 = new Array(n).fill(n);
  d2[n-1]=0;
  function f(x,d){
    for(i=0;i<n-1;i++){
      if(a[i]==x&&d[b[i]]>d[a[i]]){
        d[b[i]]=d[a[i]]+1;
        var j =i;
        f(b[i],d);
        i=j;
      }
      if(b[i]==x&&d[a[i]]>d[b[i]]){
        d[a[i]]=d[b[i]]+1;
        var j =i;
        f(a[i],d);
        i=j;
      }
    }
    return d;
  }
  d1=f(0,d1);
  d2=f(n-1,d2);
  var x=0;
  for(i=0;i<n;i++){
    if(i!=0&&i!=n-1){
      if(d1[i]<=d2[i]){
        x++;
      }
    }
  }
  var ans="Fennec";
  if(x<=n-2-x){
    ans="Snuke";
  }

  console.log('%s', ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));