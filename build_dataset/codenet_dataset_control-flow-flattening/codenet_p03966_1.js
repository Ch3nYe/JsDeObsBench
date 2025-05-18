function Main(input) {
    TT = 0;
    AA = 0;
 
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");
	N = input[0];
//    console.log(N);	
    for (i = 1; i <= N; i++) {
    	tmp = input[i].split(" ");
    	T = tmp[0] * 1;
    	A = tmp[1] * 1;
        // console.log("T:" + T + " A:" + A);
 
        if ((TT <= T) && (AA <= A)) {
            TT = T;
            AA = A;
        } else {
            ratioT = TT / T;
            ratioA = AA / A;
            // console.log("ratioT:" + ratioT + " ratioA:" + ratioA);
            ratio = Math.ceil(Math.max(ratioT, ratioA));
            TT = T * ratio;
            AA = A * ratio;
        }
        // console.log("TT:" + TT + " AA:" + AA);
    }
	//出力
    console.log(TT + AA);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));