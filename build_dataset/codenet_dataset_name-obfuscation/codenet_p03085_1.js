function Main(input) {
	// 1行目がinput[0], 2行目がinput[1], …に入る
	input = input.split("\n");
    input = input[0]
    switch(input) {
        case 'A': {
            console.log('T');
            return;
        }
        case 'T': {
            console.log('A');
            return;
        }
        case 'C': {
            console.log('G');
            return;
        }
        case 'G': {
            console.log('C');
            return;
        }
        default: {
            return;
        }
    }
}

Main(require("fs").readFileSync("/dev/stdin", "utf8"));