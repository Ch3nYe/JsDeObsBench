'use strict'
const Main = input => {

  let tmp = input.split('\n');
  let Num = tmp[0].split(' ').map(Number)[0];
  let Kji = tmp[0].split(' ').map(Number)[1];
  let Str = tmp[1].trim();
  // console.log({ Num });
  // console.log({ Kji });
  // console.log({ Str });

  let Change = Str[Kji - 1];

  switch (Change) {
    case 'A': Change = 'a';
      break;
    case 'B': Change = 'b';
      break;
    case 'C': Change = 'c';
      break;
  }

  let StrArr = Str.split('');
  StrArr[Kji - 1] = Change;
  Str = StrArr.join('');

  console.log(Str);

}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));