// inputに入力データ全体が入る
function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
  inputs = input.split("\n");
  
  const N = Number(inputs[0]);
  const arr = [];
  for( let i = 1 ; i  <= N ; i++ ){
    if( i % 3 !== 0 && i % 5 !== 0){
      arr.push(i);
    }
  }

  const sum = arr.reduce( (prev,current) => {
    return prev + current;
  });

  console.log(sum);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));