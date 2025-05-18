let input = require('fs').readFileSync('/dev/stdin', 'UTF-8');
let array = input.split('\n'); // 3人分の試験データ配列
let result = '';

// 学生分ループ
for (let i=0; i<array.length; i++) {
  let data = array[i].split(' ').map(Number);
  let fScore = data[0];
  let lScore = data[1];
  let retest = data[2];

  // データが全て-1の時終了する
  if (fScore === -1 && lScore === -1 && retest === -1) break;

  if (i !== 0) result += '\n';

  // 中間試験、期末試験のいずれかを欠席した場合成績はF
  if (fScore === -1 || lScore === -1) {
    result += 'F';
  } else {
    let sum = fScore + lScore;
    switch (true) {
      case sum >= 80:
        result += 'A';
        break;
      case 65 <= sum && sum < 80:
        result += 'B';
        break;
      case 50 <= sum && sum < 65:
        result += 'C';
        break;
      case 30 <= sum && sum < 50:
        result += retest >= 50 ? 'C' : 'D';
        break;
      default:
        result += 'F';
    };
  }
}
console.log(result);
