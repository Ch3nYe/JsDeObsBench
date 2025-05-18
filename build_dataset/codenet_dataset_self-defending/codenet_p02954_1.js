function Main(input) {
	var idata = input.split("");
	var ninzuu = [];
	var nextninzuutemp = [];
	//人数の配列を生成
	for( let i=0; i<idata.length ; i++ ){
	    ninzuu.push(1);
	    nextninzuutemp.push(0);
	}
	var nextninzuu = nextninzuutemp.slice();
	//一回ごとに操作が行われる
	for( let turn=0; turn<ninzuu.length+ninzuu.length%2 ; turn++ ){
		for( let j=0; j<ninzuu.length ; j++ ){
			//着目しているマスに右に行けと書いてあった場合
			if(idata[j]=="R"){
				nextninzuu[j+1]+=ninzuu[j];
			}else if(idata[j]=="L"){
			    nextninzuu[j-1]+=ninzuu[j];
			}
		}
		ninzuu = nextninzuu.slice();
		nextninzuu = nextninzuutemp.slice();
	}
	console.log(ninzuu.join(" "));
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));