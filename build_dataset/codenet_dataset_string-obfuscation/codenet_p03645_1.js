function Main(input) {
  input = input.split("\n");
  var n = parseInt(input[0].split(" ")[0]);
  var m = parseInt(input[0].split(" ")[1]);
  x= new Array();
  var ans = "IMPOSSIBLE";
  for(i=0;i<m;i++){
    tmp=input[i+1].split(" ");
    if(tmp[0]==1){
      if(x.indexOf(tmp[1])!=-1){
        ans="POSSIBLE";
        break;
      }else{
      x.push(tmp[1]);
      }
    }
    if(tmp[1]==n){
      if(x.indexOf(tmp[0])!=-1){
        ans="POSSIBLE";
        break;
      }else{
        x.push(tmp[0]);
      }
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