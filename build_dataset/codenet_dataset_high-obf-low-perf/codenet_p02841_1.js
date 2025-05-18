function Main(input) {
	var input = input.split("\n");
	var i1 = input[0].split(" ");
	var i2 = input[1].split(" ");

    var d1 = new Date("2019/" + i1[0] + "/" + i1[1]);
    var d2 = new Date("2019/" + i2[0] + "/" + i2[1]);

    if (d1.getMonth() == d2.getMonth()) {
	    console.log(0);
    } else {
	    console.log(1);
    }
}
//*この行以降は編集しないでください（標準入出力から一度に読み込み、Mainを呼び出します）
Main(require("fs").readFileSync("/dev/stdin", "utf8"));