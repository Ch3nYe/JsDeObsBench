function Main(input) {
	input = input.split("\n");
	const N = parseInt(input[0])
	const As = input[1].split(" ").map(x => parseInt(x))
	var now = As
	while(true){
		var min = -1
		var next = []
		for(i=1; i<now.length-1; i++){
			if(min == -1 || now[min] > now[i]) min = i
			if(min == now[i] && now[i-1] + now[i+1] < now[min-1] + now[min+1]) min = i
		}
		if(now[min]*2 > now[now.length-2]) min = now.length-2
		for(i=0; i<now.length; i++){
			if(i == min-1){
				next.push(now[min-1]+now[min])
			}else if(i == min){

			}else if(i == min+1){
				next.push(now[min+1]+now[min])
			}else{
				next.push(now[i])
			}
		}
		now = next
		if(now.length == 2) break
	}
	console.log(now[0] + now[1])
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));