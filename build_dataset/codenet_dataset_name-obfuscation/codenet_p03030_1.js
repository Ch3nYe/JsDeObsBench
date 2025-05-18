function Main(input) {
    'use strict';
   
    const temp = input.split("\n");
   
    const n = parseInt(temp.shift(), 10);
    for(let i = 0; i < n; i++){
      temp[i] = temp[i].split(" ");
      temp[i].push(i + 1);
      temp[i][1] = parseInt(temp[i][1],10)
    }
   
    temp.sort((a,b) => b[1] - a[1]);
    temp.sort((a,b) => {
      if(a[0] < b[0]) return -1;
      else if(a[0] > b[0]) return 1;
      else 0;
    });
    
    // temp.forEach(e => console.log(e[2]))
    const ans = temp.map(e => e[2]);
    console.log(ans.join("\n"));
    return false;
}
  //*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
  Main(require("fs").readFileSync("/dev/stdin", "utf8"));