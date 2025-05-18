function Main(input) {
		input = input.split(" ");
		const num = parseInt(input[0], 10);
		if (num > 81) {
				console.log('No');
				return;
		}

if((num%2==0 && num/2<10) ||(num%3==0 && num/3<10) ||(num%4==0 && num/4<10) ||(num%5==0 && num/5<10) ||(num%6==0 && num/6<10) ||(num%7==0 && num/7<10) ||(num%8==0 && num/8<10) ||(num%9==0 && num/9<10)){
console.log('Yes');
}else {
console.log('No');
}
}
Main(require("fs").readFileSync("/dev/stdin", "utf8"));