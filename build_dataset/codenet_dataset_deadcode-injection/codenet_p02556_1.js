function Main(input) {

	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");
    input.shift();
    
    let xy = input.map(val => val.split(" ").map(Number));

    let arr0 = xy.map(val => val[0] + val[1]);
    let arr1 = xy.map(val => val[0] - val[1]);
    
    let arr0_calc = Math.max(...arr0) - Math.min(...arr0);
    let arr1_calc = Math.max(...arr1) - Math.min(...arr1);
 
    console.log(Math.max(arr0_calc,arr1_calc));
    
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));