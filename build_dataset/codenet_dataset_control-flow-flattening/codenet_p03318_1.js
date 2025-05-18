'use strict'

function main(s) {

  const K = Number(s.split('\n')[0]);

  const list = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '19', '29', '39', '49', '59', '69', '79', '89', '99', '199'];

  const head = ['2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19'];

  let rest = '99';

  for (let i = 0; i <= 20; i++) {
    for (let j = 0; j < head.length; j++) {
      list.push(head[j] + rest);
    }
    rest += '9';
  }

  const ans = list.slice(0, K).join('\n');
  console.log(ans);
}

main(require("fs").readFileSync("/dev/stdin", "utf8"));
