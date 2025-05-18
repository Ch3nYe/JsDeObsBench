'use strict'

function main(s) {  
  
  const input = s.replace(/\n/g, '').split('');
  let words = [];

  // 文字配列の重複を検出
  input.forEach((x, i, self) => {
    
    // 初出時はオブジェクト追加
    if(self.indexOf(x) === i) {
      words.push({word : x, counter: 1});

    // 2回目以降はカウントするのみ
    } else {
      words.forEach(y => {
        if(x === y.word) {
          y.counter += 1;
        }
      })
    }
  });

  // 全ての文字が偶数回出ているかどうか
  const result = words.every(x => (x.counter % 2) === 0) ? 'Yes' : 'No';
  
  console.log(result);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
