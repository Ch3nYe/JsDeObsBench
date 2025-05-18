function Main(input) {
  input = input.split("\n");
  S= input[0].split("");
  var ans=0;
  for(i=0;i<S.length;i++){
    if(S[i]=="2"){
      ans++;
    }
  }

  console.log('%s', ans);
}
  
// "実行する"ボタンを押した時に実行される関数 (デバッグ用)
function debug(){
  var input = document.getElementById("input").value;
  Main(input);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));