/**
 * @param input number[][]
 */
function Main(input) {
  const M = input[0][1];
  const alist = input[1];

  const kumiList = alist.reduce((arr, ai, i) => {
    arr.push(ai * 2);

    var kumiVal;
    for (var j = i + 1; j < alist.length; j++) {
      kumiVal = ai + alist[j];
      arr.push(kumiVal, kumiVal);
    }

    return arr;
  }, []).sort((a1, a2) => a2 - a1);

  var answer = 0;
  for (var i = 0; i < M; i++) {
    answer += kumiList[i];
  }

  console.log(answer);
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim()
  .split('\n')
  .map((line) => line.split(' ').map(Number))
);