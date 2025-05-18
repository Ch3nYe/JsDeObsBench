// inputに入力データ全体が入る
function Main(input) {
  const array = input.split(' ');
  let takahashi = Number(array[0]);
  let aoki = Number(array[2]);
  
  let count = 0;
  let bool = true;
  while(bool) {
    if(count%2 === 0){
      aoki = aoki - Number(array[1]);
      if(aoki <= 0){
        console.log('Yes');
        bool = false;
      }
    } else {
      takahashi = takahashi - Number(array[3]);
      if(takahashi <= 0){
        console.log('No');
        bool = false;
      }
    }
    count++;
  }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));