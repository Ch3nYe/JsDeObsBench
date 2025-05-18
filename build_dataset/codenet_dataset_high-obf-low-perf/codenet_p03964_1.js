function Main(input) {
  input = input.split("\n");
  var n = parseInt(input[0]);
  t = new Array(n).fill(0);
  a = new Array(n).fill(0);
  for(i=0;i<n;i++){
      t[i]=parseInt(input[i+1].split(" ")[0]);
      a[i]=parseInt(input[i+1].split(" ")[1]);
  }
  var tvote=t[0];
  var avote=a[0];
  
  for(i=1;i<n;i++){
      if(((Math.ceil(tvote/t[i])*t[i])/t[i])*a[i]>=avote){
          tvote=Math.ceil(tvote/t[i])*t[i];
          avote=((Math.ceil(tvote/t[i])*t[i])/t[i])*a[i];
      }else{
          tvote=((Math.ceil(avote/a[i])*a[i])/a[i])*t[i];
          avote=Math.ceil(avote/a[i])*a[i];
      }
  }
  var ans=avote+tvote;
  console.log('%s', ans);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));