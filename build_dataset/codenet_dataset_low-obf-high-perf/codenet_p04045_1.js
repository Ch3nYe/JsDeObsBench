function main(input) {
	var inputs = input.split("\n");
	var money = inputs[0].split(" ")[0];
    var kRegexp = new RegExp(inputs[1].replace(" ","|"));
    while(kRegexp.test(String(money))){
    	money++;
    }
    return money;
}

console.log(main(require("fs").readFileSync("/dev/stdin", "utf8")));