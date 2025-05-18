function Main(input) {
	input = input.split("\n");
	const s = input[0]
	const t = input[1]
	const match = []
	for(i=0; i < s.length; i++){
		if((s+t).slice(i,i+t.length) == t){
			match.push(true)
		}else{
			match.push(false)
		}
	}
	max = 0
	for(i=0; i < s.length; i++){
		isInf = false
		now = i
		getted = []
		while(match[now]){
			getted.push(now)
			now = (now + t.length) % s.length
			if(getted.indexOf(now) != -1){
				isInf = true
				break
			} 
		}
		if(isInf){
			max = -1
			break
		}else{
			if(max < getted.length) max = getted.length
		}
	}
	console.log(max)
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));