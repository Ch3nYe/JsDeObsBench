function Main(input) {
  //入力から変数を全て定義
  lines = input.split("\n");
  firstLine = lines[0].split(" ");
  N = +firstLine[0];
  X = +firstLine[1];
  secondLine = lines[1].split(" ");
  
  //跳ねた距離がX以下かどうか判定するための変数
  distanceTravelled = 0;
  //跳ねた回数を記録するための変数（初期値が１なのは、最初に０地点でバウンスするのを先に含めているから）
  numBounces= 1;
  
  //distanceTravelledに毎回バウンスする距離を足していき、
  //もし跳ねた先がまだX以下の距離ならカウントを足す。これをN回やる。
  for(i=0;i<N; i++){
    distanceTravelled += +secondLine[i];
    
    if(distanceTravelled <= X){
      numBounces += 1;
    }
  }
  
  console.log(numBounces);
  
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));

