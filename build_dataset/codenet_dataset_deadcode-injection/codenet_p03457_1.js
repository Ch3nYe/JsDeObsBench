// inputに入力データ全体が入る
function Main(input) {
	var args = input.split("\n");
	var N = parseInt(args,10);
	var history = args.slice(1,N+1);
	var answer;
	var flg = 1;
	var plan = [];
	plan[0]=[0,0,0];
	for(var i=0;i<N;i++){
		plan[i+1] = parser(history[i]);
	}

	for(var i=1;i<plan.length;i++){
		var rec1 = plan[i-1];
		var rec2 = plan[i];
		var dt = rec2[0] - rec1[0];
		var dist = Math.abs(rec2[1]+rec2[2]-rec1[1]-rec1[2]);
		if (dt >= dist && dt % 2 === dist % 2){
		}else{
				flg = 0;
		}
	}
	answer = flg ? "Yes" : "No" ;
	//出力
	console.log(answer);
}
function parser(record){
	var args = record.split(" ");
	var return_val=[];
	return_val.push(parseInt(args[0],10));
	return_val.push(parseInt(args[1],10));
	return_val.push(parseInt(args[2],10));
	return return_val
}

//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));