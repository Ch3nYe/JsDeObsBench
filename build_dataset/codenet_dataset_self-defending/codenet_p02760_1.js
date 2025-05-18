// inputに入力データ全体が入る
function Main(input) {
    var n = input[3];
    var ansmap = [
        [false,false,false],
        [false,false,false],
        [false,false,false]];
    var chk = [];
    for(var i=4;i<n+4;i++){
        chk.push(input[i]-0);
    }
    var map = [
        input[0].split(" ").map(v=>chk.indexOf(v-0)>=0),
        input[1].split(" ").map(v=>chk.indexOf(v-0)>=0),
        input[2].split(" ").map(v=>chk.indexOf(v-0)>=0),
    ];
    var flg = false;
    if(map[0][0]&&map[0][1]&&map[0][2]) flg = true;
    if(map[1][0]&&map[1][1]&&map[1][2]) flg = true;
    if(map[2][0]&&map[2][1]&&map[2][2]) flg = true;
    if(map[0][0]&&map[1][0]&&map[2][0]) flg = true;
    if(map[0][1]&&map[1][1]&&map[2][1]) flg = true;
    if(map[0][2]&&map[1][2]&&map[2][2]) flg = true;
    if(map[0][0]&&map[1][1]&&map[2][2]) flg = true;
    if(map[0][2]&&map[1][1]&&map[2][0]) flg = true;
    console.log(flg?"Yes":"No");
}

Main(require("fs").readFileSync("/dev/stdin", "utf8").trim().split("\n"));