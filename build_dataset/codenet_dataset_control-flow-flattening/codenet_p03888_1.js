
function Main(inputData) {
	init(inputData);
	
	var a = inI();
	var b = inI();

	outln(((a*b)/(a+b)).toFixed(10));
	
}

////////////////////////////////////////////////////////////////////////////////////
var input,inputCnt;

// "実行する"ボタンを押した時に実行される関数 (デバッグ用)
function debug(){
	Main(document.getElementById("input").value);
}

function init(inputData){
    //配列inputに順番に代入
	input = inputData.replace( /\n/g , " " );
	input = input.split(" ");
	inputCnt = 0;
}
//output
const out = (output) => { console.log(output) }
const outln = (output) => { console.log(output+"\n") }

//input
const inS = () => {return input[inputCnt++]};
const inI = () => {return parseInt(inS(), 10)};
const inF = () => {return parseFloat(inS())};

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
