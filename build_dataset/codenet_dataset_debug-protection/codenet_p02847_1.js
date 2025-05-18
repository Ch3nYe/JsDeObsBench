function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
  	var result;
  	switch (input){
        case 'SUN':
        result = '7';
        break;
        case 'MON':
        result = '6';
        break;
        case 'TUE':
        result = '5';
        break;
        case 'WED':
        result = '4';
        break;
        case 'THU':
        result = '3';
        break;
        case 'FRI':
        result = '2';
        break;
        case 'SAT':
        result = '1';
        break;
    }
	console.log(result);
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));
