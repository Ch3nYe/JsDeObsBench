function Main(input){
  input = input.split("\n");
  inputStr = input[0].split(" ");
  var N = Number.parseInt(inputStr[0]);
  var M = Number.parseInt(inputStr[1]);
  var tmp = [];
  var array = [];
  var buycnt = 0;
  var okane = 0;
  var mokori = M;
  //配列に数値化して溜め込む
  for (i=0;i<N;i++){
    tmp = input[i+1].split(" ");
    array[i] = tmp.map( tmp => parseInt(tmp,10) )
    array[i][0] = ( "0000000000" + array[i][0] ).substr(-10);
  }
  //ソートする
  array.sort();
  //数値変換しつつ必要本数を買い込む
  for (i=0 ; i<N ; i++){
    if (mokori > parseInt(array[i][1])){
      okane += parseInt(array[i][0]) * parseInt(array[i][1]);
      mokori -= parseInt(array[i][1]);
    } else {
      okane += parseInt(array[i][0]) * mokori;
      break;
    }
  }
  console.log(okane);
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
