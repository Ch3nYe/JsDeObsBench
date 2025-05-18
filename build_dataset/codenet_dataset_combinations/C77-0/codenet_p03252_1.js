function Main(input) {
  input = input.split("\n");
  var S = input[0];
  var T = input[1];
  var ans="Yes";
  while(T.length!=0){
    for(i=1;i<T.length;i++){
      if(T.substr(0,1)==T.substr(i,1)){
        if(S.substr(0,1)!=S.substr(i,1)){
          ans="No";
          break;
        }
      }
      if(S.substr(0,1)==S.substr(i,1)){
        if(T.substr(0,1)!=T.substr(i,1)){
          ans="No";
          break;
        }
      }
    }
    if(ans=="No"){
      break;
    }
    S=S.substr(1);
    T=T.substr(1);
  }

  console.log('%s', ans);
}
  
// "実行する"ボタンを押した時に実行される関数 (デバッグ用)
function debug(){
  var input = document.getElementById("input").value;
  Main(input);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));