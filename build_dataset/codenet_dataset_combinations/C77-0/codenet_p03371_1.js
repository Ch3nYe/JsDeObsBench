function Main(input) {
  input = input.split("\n");
  A = parseInt(input[0].split(" ")[0]);
  B = parseInt(input[0].split(" ")[1]);
  C = parseInt(input[0].split(" ")[2]);
  X = parseInt(input[0].split(" ")[3]);
  Y = parseInt(input[0].split(" ")[4]);
  var ans =0;
  if(C<=(A+B)/2&&C>=Math.min(A,B)){
    if(X<=Y){
    ans=C*X*2+B*(Y-X);
    }else{
      ans=C*Y*2+A*(X-Y);
    }
  }else if(C<=(A+B)/2&&C<Math.min(A,B)){
    ans=C*Math.max(X,Y)*2;
  }else{
    ans=X*A+Y*B;

  }

  console.log('%s', ans);
}
  
// "実行する"ボタンを押した時に実行される関数 (デバッグ用)
function debug(){
  var input = document.getElementById("input").value;
  Main(input);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
