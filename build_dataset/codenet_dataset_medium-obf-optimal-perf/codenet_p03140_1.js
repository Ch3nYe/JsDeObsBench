// inputに入力データ全体が入る
// 7
// zenkoku
// touitsu
// program

function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	inputList = input.split("\n");
    inputNum = parseInt(inputList[0], 10);
    firstList = inputList[1].split("");
    secondList = inputList[2].split("");
    thirdList = inputList[3].split("");
    count = 0;
    for (var i = 0; i < inputNum; i++) {
        if(firstList[i] == secondList[i] && secondList[i] == thirdList[i]) {
            continue;
        }
        if(firstList[i] == secondList[i] || secondList[i] == thirdList[i] || thirdList[i] == firstList[i]) {
            count++;
            continue;
        }
        count++;
        count++;
    }
	console.log(count);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));