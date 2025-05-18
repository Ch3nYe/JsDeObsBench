function Main(input) {
  input = input.split("\n");
  var N = parseInt(input[0].split(" ")[0]);
  var X = parseInt(input[0].split(" ")[1]);
  bans=new Array(50);
  all=new Array(50);
  bans[0]=1;
  all[0]=1;
  var ans = 0;
  for(i=1;i<=50;i++){
    bans[i]=bans[i-1]*2+1;
    all[i]=all[i-1]*2+3;
  }
  var full=all[N];
  var bs=bans[N];
  var flag=0;
  if(X%2==0){
    X=all[N]-X;
    flag=1;
  }
  while(X>0){

    if(X>(full-1)/2){
      X=X-(full-1)/2-1;
      ans=ans+(bs-1)/2+1;
      full=(full-1)/2-1;
      bs=(bs-1)/2
    }else{
      X=X-1;
      full=(full-1)/2-1;
      bs=(bs-1)/2
    }
  }
  if(flag==1){
    ans=bans[N]-ans;
  }
  console.log('%s', ans);
}
  
// "実行する"ボタンを押した時に実行される関数 (デバッグ用)
function debug(){
  var input = document.getElementById("input").value;
  Main(input);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
